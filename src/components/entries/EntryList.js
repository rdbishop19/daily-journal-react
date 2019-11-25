import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import EntryCard from '../entries/EntryCard'

class EntryList extends Component {
    state = {
        entries: []
    }

    componentDidMount(){
        ApiManager.getAll("entries?_expand=mood&_sort=date&_order=desc")
        .then(entries => {
            this.setState({
                entries: entries,
            })
        });
    }

    render(){
        return(
            <>
                <h3 style={{ fontFamily: "Roboto" }}>Journal Entries</h3>
                <div className="entries-container">
                    {this.state.entries.map(entry => 
                        <EntryCard key={entry.id}
                            entry={entry} />
                    )}
                </div>
            </>
        )
    }
}

export default EntryList