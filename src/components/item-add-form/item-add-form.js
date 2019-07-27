import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChanged = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);

        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={ this.onSubmit }   >
                <input type="text"
                        className="form-control search-" 
                        onChange={ this.onLabelChanged }
                        placeholder="What to do?"
                        value={ this.state.label } />
                <button 
                    className="btn btn-outline-secondary">Add item</button>
            </form>
        );
    }
} 