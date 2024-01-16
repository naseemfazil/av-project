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
                        gift image
                    </div>

                    <div className='btn-claim'>
                        <span>
                            claim gift
                        </span>
                    </div>
                </div>

                <div className='gb-two'>
                    content
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