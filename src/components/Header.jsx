import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
	const navigate = useNavigate(); // 페이지 이동용 hook
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); // 폼 기본 동작 막기
		if (text.trim() === '') return; // 빈 문자열 방지
		navigate(`/videos/${text}`);
	};

	return (
		<header className='w-full flex p-4 box-border text-2xl border-b border-zinc-600 mb-4 justify-between items-center'>
			<Link to='/' className='flex items-center gap-2'>
				<FaYoutube className='text-red-500' />
				<h1 className='text-red-500 font-bold'>YOUTUBE</h1>
			</Link>
			<form onSubmit={handleSubmit} className='flex items-center'>
				<input 
					className='w-60 h-10 border border-zinc-300 text-sm box-border p-2 outline-0' 
					type="text" 
					value={text} 
					onChange={(e) => setText(e.target.value)} 
					placeholder="검색어를 입력하세요"
				/>
				<button 
					className='w-10 h-10 flex justify-center items-center bg-zinc-300 text-white'
					type='submit'
				>
					<IoIosSearch />
				</button>
			</form>
		</header>
	)
}