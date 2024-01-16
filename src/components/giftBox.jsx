import React from 'react';
import '../styles/_commonStyles.scss';
import '../styles/_recentUpdates.scss';
import '../styles/_giftBox.scss';

const GiftBox = () => {
    return (
        <div className='card gift-box-card'>


            <div className='gift-box-container'>

                <div className='gb-one'>

                    <div className='gb-image'>
                        <span>

                        gift image
                        </span>
                    </div>

                    <div className='btn-claim'>
                        <span>
                            claim gift
                        </span>
                    </div>
                </div>

                <div className='gb-two'>
                    <div className='kudos-received'>
                        <div>
                            icons
                        </div>
                        <div className='kr-names'>
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