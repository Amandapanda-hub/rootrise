import React from 'react';
import { Link } from 'react-router-dom';
import  { BlogData }  from '../../../../components/Data/BlogData/BlogData';

export default function MissionsGrid() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen py-20 px-4">
        <div className="flex flex-col items-center justify-center text-center min-h-screen px-4">
            <h1 className="text-4xl font-bold mt-20 mb-20 text-black]">Current Missions</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[10rem] gap-y-10 max-w-6xl w-full mx-auto">
            {BlogData.map((post) => (
            <div key={post.id} className="flex flex-col items-center bg-white p-4 w-full space-y-5">
                <img src={post.imgSrc} alt={post.title} className="w-full h-[20em] mb-4" />  {/* The image rendering line */}
                <p className="font-semibold text-lg">{post.date}</p>
                <h2 className="text-xl font-bold my-2">{post.title}</h2>
                <p className="text-md">{post.content}</p>
                <Link to={`/mission/${post.id}`} className="mt-2 underline text-black">Read More</Link>
            </div>
            ))}
            </div>
        </div>
    </div>
  )
}