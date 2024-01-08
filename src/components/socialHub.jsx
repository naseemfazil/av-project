import React from 'react';
import '../styles/_socialHub.scss';
import '../styles/_common.scss';

const SocialHub = () => {
    return (
        <div className='social-hub card'>

            <div className="heading-row">
                <span>
                    Social Hub
                </span>
                <span>
                    icon
                </span>
            </div>

            <div className='child-card'>

                <div className='child-heading-row'>
                    <span>
                        icon
                    </span>
                </div>

                <div className='child-content'>
                    <span className='font-bold'>
                        Post your thoughts
                    </span>

                    <span className='font-medium'>
                        Feel like sharing something? Share your thoughts, ideas, or updates with the community.
                    </span>

                    <span>
                        <button>
                            Create post
                        </button>
                    </span>
                </div>

            </div>
        </div>
    );
}

export default SocialHub;