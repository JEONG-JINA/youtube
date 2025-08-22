import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const youtube = axios.create({
	baseURL: BASE_URL,
	params: {
		key: API_KEY,
		part: "snippet",
		maxResults: 20,
	},
});

// 🔥 인기 영상 가져오기
export const fetchMostPopular = async () => {
	const res = await youtube.get("/videos", {
		params: {
			chart: "mostPopular",
			regionCode: "KR", // 한국 인기 영상
		},
	});
	return res.data.items;
};

// 🔍 검색 결과 가져오기
export const searchVideos = async (keyword) => {
	const res = await youtube.get("/search", {
		params: {
			q: keyword,
			type: "video",
		},
	});
	return res.data.items;
};

// 📌 영상 상세 정보 가져오기
export const fetchVideoDetail = async (id) => {
	const res = await youtube.get("/videos", {
		params: {
			id,
		},
	});
	return res.data.items[0];
};

// 📌 연관 영상 가져오기
export async function fetchRelatedVideos(id) {
	try {
		const res = await fetch(
			`${BASE_URL}/search?part=snippet&relatedToid=${id}&type=video&maxResults=25&key=${API_KEY}`
		);
		if (!res.ok) {
			throw new Error(`API 요청 실패: ${res.status}`);
		}
		const data = await res.json();
		return data.items;
	} catch (error) {
		console.error("연관 영상 불러오기 실패:", error);
		return [];
	}
}