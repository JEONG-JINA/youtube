import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Videos /> },
			{ path: "videos", element: <Videos /> },
			{ path: "videos/:keyword", element: <Videos /> },
			{ path: "videos/watch/:videoId", element: <VideoDetail /> },
		],
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}