import React from 'react';

const VideoDetail = (props) => {
	const video = props.video;

	if (!video){
		return <div>Loading..... </div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

	return (
		<div className="video-detail">
			<div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} allowFullScreen="allowfullscreen">
                </iframe>
            </div>
			<div className="details">
				<div> {video.snippet.title} </div>
				<div> Published on - {video.snippet.publishedAt.split('T')[0]} </div>
				<div> Description - {video.snippet.description} </div>
			</div>
		</div>
	);
};

export default VideoDetail;