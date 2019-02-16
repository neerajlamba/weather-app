import React, { Component } from 'react';
import AutoComplete from './AutoComplete';
import Countries from './countries';
import Cities from './cities';

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    
                    <AutoComplete items = {Countries} name = 'country' filler = 'Country'/>
                    <AutoComplete items = {Cities} name = 'city' filler = 'City'/>
                    <button type = 'submit'>Get Weather</button>
                </form>
            </div>
        );
    }
}

export default Form;