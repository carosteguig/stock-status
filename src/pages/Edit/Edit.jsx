import './Edit.scss';
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Edit extends Component {

    state = {
        paintItem: {

        }
    }

    componentDidMount() {
        this.getPaintItem();
    }

    render() {

        return (

            <div className='edit'>
                <h1 className='edit__title'>Edit Item</h1>
                <form className='edit__form'>
                    <h2 className='edit__form-title'>Item Details</h2>

                    <div className='edit__form-content'>

                        <label className='edit__form-item'>Paint Colour
                            <input className='edit__form-input ' type='text' name='paintColour'
                                placeholder='{/* add paint colour */}' />
                        </label>

                        <label className='edit__form-item'>Quantity
                            <input className='edit__form-input edit__form-input--quantity' type='text' name='paintQuantity'
                                placeholder='{/* add paint colour */}' />
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