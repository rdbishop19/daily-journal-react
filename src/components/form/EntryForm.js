import React, { Component } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Select, MenuItem, Button, TextareaAutosize } from '@material-ui/core';
import DatePicker from '../../modules/DatePicker';
import ApiManager from '../../modules/ApiManager';
import './EntryForm.css'

const getCurrentDate = () => {
    const today = new Date()
    const now = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    return now
}

class EntryForm extends Component {
	state = {
		moods: [],
		date: getCurrentDate(),
		title: "",
		description: "",
		moodId: "",
		tags: []
	};

	submitHandler = evt =>{
		evt.preventDefault()
		const newEntry = {
			date: this.state.date,
			title: this.state.title,
			description: this.state.description,
			moodId: this.state.moodId,
			tags: this.state.tags,
		}
		ApiManager.post(newEntry, "entries")
		.then(() => this.props.history.push('/entries'))
	}

	handleChange = evt => {
		evt.preventDefault()
		const stateToChange = {}
		stateToChange[evt.target.id] = evt.target.value
		// console.log('stateToChange', stateToChange)
		this.setState(stateToChange)
	}

	componentDidMount(){
		ApiManager.getAll("moods")
		.then(moods => {
			this.setState({
				moods: moods
			});
		})
	}

	render() {
		return (
			<>
				<div className="new-entry-header">
					<h3 style={{ fontFamily: "Roboto" }}>
						Add New Entry:</h3>
				</div>
				<form onSubmit={this.submitHandler}>
					<DatePicker handleChange={this.handleChange} date={this.state.date} /><br/>
					<FormControl className="form-control">
						<InputLabel hidden htmlFor="my-input">Title</InputLabel>
						<Input id="title" aria-describedby="entry title" onChange={this.handleChange} required />
						<FormHelperText id="title-helper-text">Enter a brief title with technologies/tools utilized</FormHelperText>
					</FormControl><br/><br/>
					<TextareaAutosize id="description" 
						rows="6"
						style={{ width: "100%", fontFamily: "Roboto" }}
						aria-label="empty textarea" 
						aria-describedby="entry description"
						onChange={this.handleChange}
						required />
						<InputLabel hidden htmlFor="description">Description</InputLabel>
						{/* <Input id="description" aria-describedby="entry description" onChange={this.handleChange} required/> */}
						<FormHelperText id="description-helper-text">Record the topics and tools you learned.</FormHelperText>
					<FormControl className="form-control">
						<InputLabel id="mood-label">Mood</InputLabel>
						<Select
							labelId="mood-label"
							id="moodId"
							onChange={(evt) => this.setState({ moodId: evt.target.value })}
							value={this.state.moodId}
						>
							<MenuItem name="moodId" value="">
            					<em>None</em>
          					</MenuItem>
							{this.state.moods.map(mood =>
								<MenuItem name="moodId" key={mood.id} value={parseInt(mood.id)}>{mood.label}</MenuItem>)
							}
						</Select>
						<FormHelperText>How were you feeling?</FormHelperText><br/>
					</FormControl>
				<Button style={{ display: "block"}} type="submit" color="primary" variant="outlined" size="large">SAVE ENTRY</Button>
				</form>
			</>
		);
	}
}

export default EntryForm;
