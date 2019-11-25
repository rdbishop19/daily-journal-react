import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import EntryList from './components/entries/EntryList'
import EntryForm from './components/form/EntryForm';

class ApplicationView extends Component {

    render() {
        return(
            <>
                <Route exact path="/" />
                <Route exact path="/home" />
                <Route exact path="/entries" render={(props) => {
                    return <EntryList {...props}/>
                }} />
                <Route path="/entries/new" render={(props) => {
                    return <EntryForm {...props}/>
                }} />
            </>
        )
    }
}

export default ApplicationView