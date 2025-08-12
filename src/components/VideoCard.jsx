import { Link } from "react-router-dom";
import { format } from 'timeago.js';

export default function VideoCard({ video }) {
	const { id, snippet } = video;
	const videoId = id.videoId || id; // search API와 videos API의 id 구조 차이 대응

	return (
		<li className="border rounded overflow-hidden shadow hover:shadow-lg transition">
			<Link to={`/videos/watch/${videoId}`}>
				<img
					src={snippet.thumbnails.medium.url}
					alt={snippet.title}
					className="w-full"
				/>
				<div className="p-2">
					<h3 className="text-sm font-semibold line-clamp-2">
						{snippet.title}
					</h3>
					<p className="text-xs text-gray-500 mt-1">
						{snippet.channelTitle}
					</p>
					<p className="text-xs text-gray-400">
						{format(new Date(snippet.publishedAt).toLocaleDateString())}
					</p>
				</div>
			</Link>
		</li>
	);
}