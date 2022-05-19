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
        // let paintNum = this.props.match.params.quantity;
        // if (10 < paintNum) {
        //     let paintNumAv = paintNum;
        // } else if (0 < paintNum) {
        //     let paintNumLow = paintNum;
        // } else {
        //     let paintNumOut = paintNum;
        // }

    })
    .catch((error) => {
        console.log(error);
    });
}


    render() {
        
        console.log(this.props);

        return(
            <main className='main'>
                <h1 className='main__title'>Paint Stock</h1>
                <section className='main__cards'>
                    <Card 
                        arrayPaints= {this.state.paints}
                        title='Available'
                    />

                   <Card 
                        arrayPaints= {this.state.paints}
                        title='Running Low'
                    />

                    <Card 
                        arrayPaints= {this.state.paints}
                        title='Out of Stock'
                    />
                </section>
             
            </main>
        );
    }
}
