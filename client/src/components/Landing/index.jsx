import { Link } from 'react-router-dom';
import "./Landing.css";
import img from './images/th.jpg'

function Landing() {
    return (
        <>
        <div className='contenedor'>
            <div className="contenedor-img">
                <img src={img} ></img>
            </div>
            
            <div className='contenedor-buttom' >
            <h2><span >Br<sub className='first' >35</sub></span>eaking <span>Ba<sub className='second' >56</sub></span>d</h2>
            <Link to='/characters'>
                WELCOME
            </Link>
            </div>
        </div>
        </>
    );
};

export default Landing;