import React from 'react';

const VideoListItem = ({video, onVideoClick}) =>{
  const imageUrl = video.snippet.thumbnails.default.url;
  const onClick = () => {onVideoClick(video)}

  return(
    <li className='list-group-item' onClick={onClick}>
      <div clasName='video-list media'>
        <div className='media-left'>
          <img className= 'media-object' src={imageUrl}/>
         </div>
         <div className='media-body'>
            <div className='media-heading'>
              {video.snippet.title}
            </div>
         </div>
      </div>
    </li>
  )
}

export default VideoListItem;
