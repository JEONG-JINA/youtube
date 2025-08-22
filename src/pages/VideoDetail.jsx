import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideoDetail } from "../api/youtube";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
	const { videoId } = useParams();
	const [video, setVideo] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			const detailData = await fetchVideoDetail(videoId);
			setVideo(detailData);
		};
		loadData();
	}, [videoId]);

	if (!video) return <p>로딩중...</p>;

	return (
		<div className="flex flex-col lg:flex-row gap-6">
			<div className="flex-1">
				<iframe
					className="w-full aspect-video"
					src={`https://www.youtube.com/embed/${videoId}`}
					title={video.snippet.title}
					frameBorder="0"
					allowFullScreen
				></iframe>
				<h1 className="text-lg font-bold mt-2">
					{video.snippet.title}
				</h1>
				<p className="text-sm text-gray-600">
					{video.snippet.channelTitle}
				</p>
				<p className="mt-2">{video.snippet.description}</p>
			</div>

			<RelatedVideos videoId={videoId} />
		</div>
	);
}