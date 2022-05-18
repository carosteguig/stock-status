import './Home.scss';
import React from 'react';
import { Component } from 'react';
import Card from '../../components/Card/Card';
import axios from 'axios';



export default class Home extends Component {

    state = {
    paints: []
}

componentDidMount() {
    this.getAllPaints();
}

getAllPaints() {
    axios
    .get(`${process.env.REACT_APP_API_URL}/paints`)
    .then((res) => {
        console.log(res);
        this.setState({
            paints: res.data,
        });
        let paintAmount = this.props.match.params.quantity;
    })
    .catch((err) => {
        console.log(err);
    });
}


    render() {

        // console.log(paintArr);

        return(
            <main className='main'>
                <h1 className='main__title'>Paint Stock</h1>
                <section className='main__cards'>
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
