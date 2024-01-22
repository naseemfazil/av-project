import React from 'react';
import '../styles/_commonStyles.scss';
import '../styles/_recentUpdates.scss';
import '../styles/_giftBox.scss';
import Gift from '../assests/Gift-box.png';
import TopArrow from '../assests/Top-arrow.svg';
import Img from '../components/img';

const GiftBox = () => {
    return (
        <div className='card gift-box-card'>
            <span className='gift-top-arrow' style={{display:'flex',width:'100%',justifyContent:'end'}}>
                <span>
                    <Img src={TopArrow} alt=' ' />
                </span>
            </span>

            <div className='gift-box-container'>


                <div className='gb-one'>

                    <div className='gb-image'>
                        <span>

                            <Img src={Gift} alt="" />
                        </span>
                    </div>

                    <div className='btn-claim-container'>
                        <div className='border'>
                            <button className='btn-claim'>
                                Claim gift
                            </button>
                        </div>
                    </div>
                </div>

                <div className='gb-two'>
                    <div className='kudos-received'>
                        <div>
                            <div className="round-image_container">
                                <div class="round-image" style={{ zIndex: "1" }}>
                                    <Img
                                        src={"https://randomuser.me/api/portraits/men/20.jpg"}
                                        alt="Avatar"
                                    />
                                </div>
                                <div class="round-image" style={{ marginLeft: "-1rem", zIndex: "3" }}>
                                    <Img
                                        src={"https://randomuser.me/api/portraits/men/20.jpg"}
                                        alt="Avatar"
                                    />
                                </div>
                                <div
                                    className="round-text"
                                    style={{ marginLeft: "-1rem", zIndex: "2" }}
                                >
                                    <p>+40</p>
                                </div>
                            </div>
                        </div>
                        <div className='kr-names font-bold'>
                            Alfie Solomon(You) and 40 others
                        </div>
                        <div>
                            Received Kudos from
                            <span className='font-weight-bold'>
                                Michael Mayers
                            </span>
                        </div>
                        <div className='kr-content'>
                            Big congratulations for their outstanding dedication and hard work! 🏆Your contributions and positive attitude make our team shine.
                        </div>
                        <div className='hashtags'>
                            #SpreadJoy #Kudos
                        </div>
                    </div>
                </div>

            </div>




            {/* <div className='gift-box-container' style={{ widows: '49%' }}>
                <div className='gift-box-content'>
                  
                </div>
            </div>
            <div className='gift-receiver-container'  style={{ widows: '49%' }}>
                
            </div> */}
        </div>
    );
}

export default GiftBox;