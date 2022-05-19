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
                // console.log(res.data.quantity);   
                // let paintNum = res.data.quantity.map(paintAmount => (
                //     paintAmount = paintAmount.quantity

                // ));
                // console.log(paintAmount)
                //         if (10 < paintNum) {
                //             paintNumAv = paintNum;
                //         } else if (0 < paintNum) {
                //             paintNumLow = paintNum;
                //         } else {
                //             paintNumOut = paintNum;
                //         }

            })
            .catch((error) => {
                console.log(error);
            });
    }




    render() {

        let avalPaints = this.state.paints.filter(paintAmount => paintAmount.quantity > 10);
        avalPaints.sort();
        
        let lowPaints = this.state.paints.filter(paintAmount => paintAmount.quantity > 0  && paintAmount.quantity <= 10 );
        lowPaints.sort();

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


// {this.state.paints.filter(paintAval => paintAval.quantity > 10)
//     .map(paintAval => (paintAval
//     <Card
//         // let avalPaint = ()
//         arrayPaints={paintAval}
//         title='Available'
//     />
//     ))}
