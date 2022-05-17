import './Card.scss';
import { Link } from 'react-router-dom';

export default function Crads() {

    return (
        <>
            <div className='card__container'>
                <h3 className='card__title'>Available</h3>
                <section className='card__content'>
                    <ul className='card__item'>

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