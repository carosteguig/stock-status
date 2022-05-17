import './Home.scss';
import { Component } from 'react';
import Card from '../../components/Card/Card';

export default class Home extends Component {

    state = {
    paintArr: []
}



    render() {

        console.log(paintArr);

        return(
            <main className='main'>
                <h1 className='main__title'>Paint Stock</h1>
                <section cardName='main__cards'>
                    <Card 
                       key='' 
                       title=''
                       items=''
                       quantity=''

                    />
                   <Card 
                       key='' 
                       title=''
                       items=''
                       quantity=''

                    />
                    <Card 
                       key='' 
                       title=''
                       items=''
                       quantity=''

                    />
                </section>


            </main>
        );
    }
}
