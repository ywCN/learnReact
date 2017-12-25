import React from 'react';
import VideoListItem from './video_list_item';

// accept props from App.js
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        // etag is in the object, it is a unique id
        // key is required by React
        // Each child in an array or iterator should have a unique "key" prop.
        return (
            <VideoListItem 
                key={video.etag}
                video={video} 
            />);
    });
    return (
        // use className to avoid conflict
        // col-md-4 list-group is from BootStrap
        <ul className="col-md-4 list-group">
            {/* {props.videos.length} */}
            {videoItems}
        </ul>
    );
}

export default VideoList;
