import './Home.scss';
import React from 'react';
import { Component } from 'react';
import Card from '../../components/Card/Card';
import axios from 'axios';
import Card from '../../components/Card/Card';


export default class Home extends Component {

    state = {
    paints: []
}



    render() {

        console.log(paintArr);

        return(
            <main className='main'>
                <h1 className='main__title'>Paint Stock</h1>
                <section cardName='main__cards'>
                    <Card 
                       key='1' 
                       title='Available'
                       items='blue'
                       quantity='100'

                    />
                   <Card 
                       key='2' 
                       title='Running Low'
                       items='reed'
                       quantity='9'

                    />
                    <Card 
                       key='3' 
                       title='Out of Stock'
                       items='black'
                       quantity='0'

                    />
                </section>


            </main>
        );
    }
}
