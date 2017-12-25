import React from 'react';

// traditional way
// const VideoListItem = (props) => {
//     const video = props.video;

// ES6
const VideoListItem = ({video, onVideoSelect}) => {
    // console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />  
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
