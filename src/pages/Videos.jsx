import { useParams } from 'react-router-dom';

export default function Videos() {
	const { keyword } = useParams();

	return(
		<section className="sec_video">
			<h2>Video {keyword ? `🔎${keyword}` : '🔥'}</h2>
		</section>
	)
}