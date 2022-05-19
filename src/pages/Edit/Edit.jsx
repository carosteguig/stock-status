import './Edit.scss';
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Edit extends Component {

    state = {
        paintItem: {},
        paintColour: '',
        paintQuantity: '',
    };

    componentDidMount() {
        this.getPaintDetails(this.props.match.params.colour);
    };

    // collecting single paint data from array
    getPaintDetails(colour) {
        console.log('getPaintDetails', colour);
        axios
        .get(`${process.env.REACT_APP_API_URL}/paints/${colour}`)
        .then((res) => {
           console.log(res);
           this.setState({
               paintItem: res.data,
           });
        })
        .catch(error => {
            console.log(error);
        })
    }

    // THIS BELOW DIDN'T WORK! ///////////////////////////////////////////////////////////////////////

    // Collecting all form data instead of creating a handleChange call for each input
    handleChange = event => {
        console.log(event.target.value);
        this.setState({
        [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const colour = this.props.match.params.paintColour;
        const id = this.props.match.params.id;
        const paintColour = this.props.match.params.paintColour;
        const paintQuantity = this.props.match.params.paintQuantity;

        axios.patch(`${process.env.REACT_APP_API_URL}/paints/${colour}/edit`, {
            id,
            paintColour,
            paintQuantity,
        })
        
        alert('your changes have been submited succesfully');
    }

    // THIS ABOVE DIDN'T WORK! ///////////////////////////////////////////////////////////////////////

    render() {

        return (

            <div className='edit'>
                <h1 className='edit__title'>Edit Item</h1>
                {/* passing form data */}
                <form className='edit__form' onSubmit={this.handleSubmit}>
                    <h2 className='edit__form-title'>Item Details: Colour {this.state.paintItem.colour}</h2>

                    <div className='edit__form-content'>

                        <label className='edit__form-item'>Paint Colour
                            <input className='edit__form-input ' type='text' name='paintColour'
                                onChange={this.handleChange}
                                placeholder= {this.state.paintItem.colour} />
                        </label>

                        <label className='edit__form-item'>Quantity
                            <input className='edit__form-input edit__form-input--quantity' type='text' name='paintQuantity'
                                onChange={this.handleChange}
                                placeholder= {this.state.paintItem.quantity}  />
                        </label>
                        <div className='edit__form-btn'>
                            <button className="edit__form-btn-icon" type='submit'>save</button>
                        </div>

                    </div>
                </form>

            </div>

        );
    }
}