import React from 'react';
import '../styles/_expandCircle.scss';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import TopArrow from '../assests/Top-arrow.svg';
import Expand from '../assests/Expand your circle icon.svg';
import Img from '../components/img';

const ExpandCircle = () => {

    const expandCircleDtls = [
        {

            name: 'Benford Black',
            icon: Expand,
            subContent: "  Human Resource Manager",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },

        {

            name: 'Jemses ben',
            icon: Expand,
            subContent: "  Visual Designer",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Bruce wanes',
            icon: Expand,
            subContent: "  Financial Manager",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Alfred sigh',
            icon: Expand,
            subContent: "  Chief Product Engineer",
            btnTxt: "Wish",
            profile: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {

            name: 'Benford Black',
            icon: Expand,
            subContent: "  Marketing Management",
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
                    <Img src={TopArrow} alt='' />
                </span>
            </div>

            <div className="scroll-content">
                {expandCircleDtls.map((eachDtl, index) => {
                    return (
                        <div className="details-card">

                            <span className="content">
                                <span>
                                    <Img height="50" width="50" src={eachDtl.profile} alt="Avatar"/>
                                </span>
                                <span className="person-details">
                                    <span className="person-name">
                                        {eachDtl.name}
                                    </span>
                                    <span className="event-name">
                                        <span >
                                            <Img src={eachDtl.icon} />
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