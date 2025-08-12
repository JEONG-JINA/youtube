import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const youtube = axios.create({
	baseURL: BASE_URL,
	params: {
		key: API_KEY,
		part: "snippet",
		maxResults: 12,
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
export const fetchRelatedVideos = async (id) => {
	const res = await youtube.get("/search", {
		params: {
			relatedToVideoId: id,
			type: "video",
		},
	});
	return res.data.items;
};