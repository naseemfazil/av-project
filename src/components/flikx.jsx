import React from 'react';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import '../styles/_flikx.scss';
import China from '../assests/flikx/china.jpg';
import Night from '../assests/flikx/night.avif';
import Road from '../assests/flikx/road.webp';
import Img from '../components/img';

const Flikx = () => {

    const imageUrl = 'https://randomuser.me/api/portraits/men/20.jpg';

    const Flikx = [
        {
            name: 'Blake',
            bgImg: China,
            profile: ''
        },

        {
            name: 'Fazil',
            bgImg: Night,
            profile: ''
        },

        {
            name: 'Hari',
            bgImg: Road,
            profile: ''
        },



    ];

    return (
        <div className='flikx card' >

            <div className="heading-row">
                <span>
                    Flikx
                </span>
                <span>
                    {/* <img src={TopArrow} alt='' /> */}
                </span>
            </div>

            <div className="flikx-content">

                {Flikx.map((eachDtls, index) => {
                    return (
                        <div className='flikx-child-card each-card ' style={{ backgroundImage: `url(${eachDtls.bgImg})`, }} >
                            <div className='name-content'>

                                <span>
                                    <Img className='person-image' height="30" width="30" src={imageUrl} alt="Avatar"/>
                                </span>

                                <span className='person-label'>
                                    {eachDtls.name}
                                </span>
                            </div>
                        </div>
                    )
                })}


            </div>

        </div>
    );
}

export default Flikx;