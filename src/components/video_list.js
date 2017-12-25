import React from 'react';

// accept props from App.js
const VideoList = (props) => {
    return (
        // use className to avoid conflict
        // col-md-4 list-group is from BootStrap
        <ul className="col-md-4 list-group">
            {props.video.length}
        </ul>
    );
}

export default VideoList;
