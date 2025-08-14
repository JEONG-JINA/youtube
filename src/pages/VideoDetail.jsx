// import { useEffect, useState } from "react";
// import { fetchRelatedVideos } from "../api/youtube";
// import RelatedVideos from "../components/RelatedVideos";

// export default function VideoDetail() {
// 	const [relatedVideos, setRelatedVideos] = useState([]); // 여기서 videos가 생성됨

// 	useEffect(() => {
// 		const loadVideos = async () => {
// 			const data = fetchRelatedVideos;
// 			setRelatedVideos(data); // 받아온 데이터를 videos state에 저장
// 		};
// 		loadVideos();
// 	}, []);

// 	return (
// 		<ul>
// 			{relatedVideos.map(relatedVideo => {
// 				<RelatedVideos relatedVideo={relatedVideo} />
// 			})}
// 		</ul>
// 	)
// }