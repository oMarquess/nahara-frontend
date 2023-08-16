import React from "react";

const BackgroundVideo: React.FC = () => {
	return (
		<div>
			<video autoPlay loop muted className="w-full h-screen object-cover">
				<source src="/video-bg.mp4" type="video/mp4" />
			</video>
		</div>
	);
};

export default BackgroundVideo;
