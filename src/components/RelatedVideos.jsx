import { useEffect, useState } from "react";
import { fetchRelatedVideos } from "../api/youtube";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ videoId }) {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const data = await fetchRelatedVideos(videoId);
			setVideos(data);
		};
		loadData();
	}, [videoId]);

	return (
		<div className="w-full lg:w-80">
			<h2 className="text-md font-semibold mb-2">연관 영상</h2>
			<ul className="flex flex-col gap-2">
				{videos.map((video) => (
					<VideoCard
						key={video.id.videoId || video.id}
						video={video}
					/>
				))}
			</ul>
		</div>
	);
}