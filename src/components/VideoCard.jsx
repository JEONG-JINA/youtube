import { Link } from "react-router-dom";
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko'
register('ko', koLocale);

export default function VideoCard({ video }) {
	const { id, snippet } = video;
	const videoId = id.videoId || id; // search API와 videos API의 id 구조 차이 대응

	return (
		<li className="overflow-hidden">
			<Link to={`/videos/watch/${videoId}`}>
				<div className="w-full overflow-hidden rounded-lg hover:shadow-lg transition">
					<img
						src={snippet.thumbnails.medium.url}
						alt={snippet.title}
						className="w-full"
					/>
				</div>
				<div className="pt-2 pb-2 pl-1 pr-1 box-border">
					<h3 className="text-sm font-semibold line-clamp-2">
						{snippet.title}
					</h3>
					<p className="text-xs text-gray-500 mt-1 mb-2">
						{snippet.channelTitle}
					</p>
					<p className="text-xs text-gray-400">
						{format(
							new Date(snippet.publishedAt).toLocaleDateString(),
							"ko"
						)}
					</p>
				</div>
			</Link>
		</li>
	);
}