import './Edit.scss';
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Edit extends Component {

    state = {
        paintItem: {},
    }

    componentDidMount() {
        this.getPaintDetails(this.props.match.params.colour);
    }


    getPaintDetails(colour) {
        console.log('getPaintDetails', colour);
        axios
        .get(`${process.env.REACT_APP_API_URL}/paints/${colour}`)
        // console.log(this.props.match.params.colour)
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

    render() {

        return (

            <div className='edit'>
                <h1 className='edit__title'>Edit Item</h1>
                <form className='edit__form'>
                    <h2 className='edit__form-title'>Item Details: Colour {this.state.paintItem.colour}</h2>

                    <div className='edit__form-content'>

                        <label className='edit__form-item'>Paint Colour
                            <input className='edit__form-input ' type='text' name='paintColour'
                                placeholder= {this.state.paintItem.colour} />
                        </label>

                        <label className='edit__form-item'>Quantity
                            <input className='edit__form-input edit__form-input--quantity' type='text' name='paintQuantity'
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