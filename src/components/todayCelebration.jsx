import React from 'react';
import '../styles/_todayCelebration.scss';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import TopArrow from '../assests/Top-arrow.svg';
import Birthday from '../assests/Birthday.svg';
import Position from '../assests/New Position.svg';
import Certification  from'../assests/New Certification.svg';
import Img from '../components/img';

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
            icon: Position,
            subContent: "  Celebrating New Position",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Av',
            icon: Certification,
            subContent: "  Celebrating New Certification",
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
                    <Img src={TopArrow} alt='' />
                </span>
            </div>

            <div className="scroll-content">
                {TodayCelabrationDtls.map((eachDtls, index) => {
                    return (
                        <div className="details-card">
                            <span className="content">
                                <span>
                                    <Img height="50" width="50" src={eachDtls.profile} alt="Avatar"/>
                                </span>
                                <span className="person-details">
                                    <span className="person-name">
                                        {eachDtls.name}
                                    </span>
                                    <span className="event-name">
                                        <span >
                                            <Img src={eachDtls.icon} />
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