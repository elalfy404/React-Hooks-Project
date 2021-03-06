
import React from 'react';

import { animateScroll as scroll } from 'react-scroll';

import { Link } from 'react-router-dom';

import Inner from '../home/Inner';

import Slideshow from '../Slideshow/Slideshow';

import Button from './Button';

// import _Introduction.scss stylesheet
import '../../styles/_Introduction.scss';

// import img line-instagram.svg
import line from '../../img/svg/line-instagram.svg';

// import img btn-down.svg
import down from '../../img/svg/btn-down.svg';


export default function Introduction() {
    const btnCalculate = {
        background: '#E3B873e8',
        borderRadius: '3px',
    };
    const btnApplication = {
        borderRadius: '3px',
        border: '1px solid #eeeeee',
        background: '#000000e1',
    };

    return (
        <>
            <section className="introduction">
                <div className="introduction__img" role="img" />
                <div className="introduction__inner">
                    <Inner
                        __title="introduction__title"
                        title="Turnkey Repair In The"
                        br="City Of"
                        em="Rostov-On-Don"
                        __paragraph="introduction__description"
                        paragraph="Get ready-made turnkey repairs on time
                        with work time saving up to 45 days and
                        20% from
                        cost of materials due to the organization of work"
                    />
                    <div className="Link">
                        <Link to="/" target="_blank" style={btnCalculate} type="button" tabIndex="0" rel="noopener noreferrer" className="btn btn-calculate">
                            CALCULATE THE COST
                        </Link>
                        <Link to="/" target="_blank" style={btnApplication} type="button" tabIndex="0" rel="noopener noreferrer" className="btn btn-application">
                            <span>SUBMIT YOUR</span>
                            {' '}
                    APPLICATION
                        </Link>
                    </div>
                </div>
                <div className="introduction__box-instagram">
                    <span className="inst__box">
                        <p>Instagram</p>
                        <img src={line} alt="line_instagram" />
                    </span>
                </div>
                <div className="introduction__box-scroll-down">
                    <button className="btn" type="button" onClick={() => scroll.scrollMore(900, { delay: 0 })} title="Go to down">
                        <p>Scroll down</p>
                        <img src={down} alt="btn-down" />
                    </button>
                </div>
                <Button />
            </section>
            <Slideshow />
        </>
    );
}
