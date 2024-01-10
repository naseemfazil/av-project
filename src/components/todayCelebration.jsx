import React from 'react';
import '../styles/_todayCelebration.scss';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import TopArrow from '../assests/Top-arrow.svg';
import Birthday from '../assests/Birthday.svg';

const TodayCelabration = () => {

    const TodayCelabrationDtls = [
        {

            name: 'Benford Black',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },

        {

            name: 'Fazil',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Av',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Hari',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Venkat',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        }
    ];
    return (

        <div className='today-celebration card' >

            <div className="heading-row">
                <span>
                    Today Celebration
                </span>
                <span>
                    <img src={TopArrow} alt='' />
                </span>
            </div>

            <div className="scroll-content">
                {TodayCelabrationDtls.map((eachDtls, index) => {
                    return (
                        <div className="details-card">
                            <span className="content">
                                <span>
                                    <img height="50" width="50" src={eachDtls.profile} alt="Avatar"></img>
                                </span>
                                <span className="person-details">
                                    <span className="person-name">
                                        {eachDtls.name}
                                    </span>
                                    <span className="event-name">
                                        <span >
                                            <img src={eachDtls.icon} />
                                        </span>
                                        <span>
                                            {eachDtls.subContent}
                                        </span>
                                    </span>
                                </span>
                            </span>

                            <span className="button">
                                <span>
                                    <button className='primary_btn'>
                                        {eachDtls.btnTxt}
                                    </button>
                                </span>
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default TodayCelabration;