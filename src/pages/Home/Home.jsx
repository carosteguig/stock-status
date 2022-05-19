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
            })
            .catch((error) => {
                console.log(error);
            });
    }




    render() {

        // console.log(this.props)


        // filtering the paints from the array. Directing the paints with over 10 in quantity to available
        let avalPaints = this.state.paints.filter(paintAmount => paintAmount.quantity > 10);
        avalPaints.sort();
        
        // filtering the paints from the array. Directing the paints with under 10  and over 0 in quantity to running low
        let lowPaints = this.state.paints.filter(paintAmount => paintAmount.quantity > 0  && paintAmount.quantity <= 10 );
        lowPaints.sort();

        // filtering the paints from the array. Directing the paints with 0 quantity to out of stock
        let outStocPaints = this.state.paints.filter(paintAmount => paintAmount.quantity == 0);
        outStocPaints.sort();


        return (
            <main className='main'>
                <h1 className='main__title'>Paint Stock</h1>
                <section className='main__cards'>

                    <Card
                        arrayPaints={avalPaints}
                        title='Available'
                    />

                    <Card
                        arrayPaints={lowPaints}
                        title='Running Low'
                    />

                    <Card
                        arrayPaints={outStocPaints}
                        title='Out of Stock'
                    />
                </section>

            </main>
        );
    }
}

