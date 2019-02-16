import React, { Component } from 'react';
import './AutoComplete.css';

class AutoComplete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestions : [],
            text : '',
        };
    }
    
    handleTextChange = (e) => {
        const {items} = this.props;
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        this.setState({suggestions : suggestions,
        text : value
        });
    }

    renderSuggestions(){
        const {suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return(
            <ul>
                {suggestions.map((item,index) => 
                <li key ={index}
                onClick = {()=> this.handleSuggestionSelection(item)}>
                {item}</li>)}
            </ul>
        );
    }

    handleSuggestionSelection(value){
        this.setState({
            text : value,
            suggestions : []
        });
    }

    render() {
        const {text} = this.state;
        const {name} = this.props;
        const {filler} = this.props;
        return (
            <div className = "autoComplete">
                <input value = {text} placeholder = {filler} name = {name} onChange = {this.handleTextChange} type = 'text'/>
                {this.renderSuggestions()}
            </div>
        );
    }
}

export default AutoComplete;