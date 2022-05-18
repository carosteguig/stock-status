import './Card.scss';
import { Link } from 'react-router-dom';

export default function Card(props) {

    return (
        <>
            <div className='card'>
                <h3 className='card__title'>{props.title}</h3>
                <section className='card__content'>
                    <ul className='card__list'>

                    </ul>
                </section>
                <Link>
                {/* maybe add an image instead of edit button */}
                    <p className='card__button'>Edit</p>
                </Link>
            </div>
        </>

    );
}