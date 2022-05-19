import './Card.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import uuid from 'react-uuid';

export default function Card(props) {

    return (
        <>
            <div className='card'>
                <h3 className='card__title'>{props.title}</h3>
                <section className='card__content'>
                    <ul className='card__list card__list--left'>
                        {props.arrayPaints.map(paint => (
                            <li className='card__item' key={paint.id}>
                                <h3>{paint.colour}</h3>
                            </li>

                        ))}
                    </ul>
                    <ul className='card__list card__list--right'>
                        {props.arrayPaints.map(paint => (
                            <Link key={uuid()} to={`/edit/${paint.colour}`}>
                            <li className='card__item card__item-container' key={uuid()}>
                                <h3>{paint.quantity}</h3>
                                <p className='card__item-button'>edit</p>
                                
                            </li>
                            </Link>
                        ))}
                    </ul>
                </section>
            </div>
        </>

    );
}