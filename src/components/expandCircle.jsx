import React from 'react';
import '../styles/_expandCircle.scss';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import TopArrow from '../assests/Top-arrow.svg';
import Birthday from '../assests/Birthday.svg';

const ExpandCircle = () => {

    const expandCircleDtls = [
        {

            name: 'Benford Black',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },

        {

            name: 'Benford Black',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Benford Black',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Benford Black',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Benford Black',
            icon: Birthday,
            subContent: "  Celebrating birthday",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        }
    ];
    return (

        <div className='expand-cricle card' >

            <div className="heading-row">
                <span>
                    Expand your Cricle
                </span>
                <span>
                    <img src={TopArrow} alt='' />
                </span>
            </div>

            <div className="scroll-content">
                {expandCircleDtls.map((eachDtl, index) => {
                    return (
                        <div className="details-card">

                            <span className="content">
                                <span>
                                    <img height="50" width="50" src={eachDtl.profile} alt="Avatar"></img>
                                </span>
                                <span className="person-details">
                                    <span className="person-name">
                                        {eachDtl.name}
                                    </span>
                                    <span className="event-name">
                                        <span >
                                            <img src={eachDtl.icon} />
                                        </span>
                                        <span>
                                            {eachDtl.subContent}
                                        </span>
                                    </span>
                                </span>
                            </span>

                            <span className="button">
                                <span>
                                    <button className='primary_btn'>
                                        {eachDtl.btnTxt}
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

export default ExpandCircle;