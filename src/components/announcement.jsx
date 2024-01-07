import React from 'react';
import '../styles/_announcement.scss';


const Announcement = () => {
    return (
        <div className='announcement'>

            <div className='announcement-body'>

                <div className="heading-row">
                    <span>
                        Announcement
                    </span>
                    <span>
                        icon
                    </span>
                </div>

                <div className='announcement-content'>
                    <div className='dear-gamers'>
                        Dear Gamers,
                    </div>
                    <div className='para'>
                        Dear Gamers, Are you ready to level up your gaming experience? We are thrilled to announce the launch of our brand-new Gamers Community, and we invite you to be a part of it! Discuss your favourite games, strategies, and in-game triumphs with fellow gamers. Connect with like-minded gamers and form squads for epic multiplayer battles. Get the latest updates on upcoming game releases, patches, and gaming news. Access expert tips, tutorials, and guides to enhance your gaming skills.Participate in gaming tournaments and competitions for a chance to win fantastic prizes.
                    </div>
                </div>
            </div>

            <div className='bottom-row'>
                <span>
                    Read more
                </span>
                <span>
                    icon
                </span>
            </div>
        </div>
    );
}

export default Announcement;