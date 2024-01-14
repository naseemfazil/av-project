import React from 'react';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import '../styles/_flikx.scss';

const Flikx = () => {

    const imageUrl = 'https://randomuser.me/api/portraits/men/20.jpg';

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

                <div className='flikx-child-card each-card ' >
                    <div className='name-content'>

                        <span>
                            <img className='person-image' height="40" width="40" src={imageUrl} alt="Avatar"></img>
                        </span>

                        <span className='person-label'>
                            Blake
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Flikx;