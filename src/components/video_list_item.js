import React from 'react';

// traditional way
// const VideoListItem = (props) => {
//     const video = props.video;

// ES6
const VideoListItem = ({video}}) => {
    // console.log(video);
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" />  
                </div>

                <div className="media-body">
                    <div className="media-heading"></div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
