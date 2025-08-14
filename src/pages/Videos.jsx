import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMostPopular, searchVideos } from "../api/youtube";
import VideoCard from "../components/VideoCard";

export default function Videos() {
	const { keyword } = useParams();

	const [videos, setVideos] = useState([]); // 여기서 videos가 생성됨

	useEffect(() => {
		const loadVideos = async () => {
			const data = keyword
				? await searchVideos(keyword) // 검색 결과 불러오기
				: await fetchMostPopular(); // 인기 영상 불러오기
			setVideos(data); // 받아온 데이터를 videos state에 저장
		};
		loadVideos();
	}, [keyword]);

	return (
		<section className="sec_video">
			<h2 className="mb-5 text-lg font-bold tracking-tighter">{keyword ? `🔎 ${keyword}` : "🔥 인기 동영상"}</h2>
			<ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{videos.map(video => (
					<VideoCard
						key={video.id.videoId || video.id}
						video={video}
					/>
				))}
			</ul>
		</section>
	);
}