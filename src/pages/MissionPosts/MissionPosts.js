import React from 'react'
import { useParams, Link } from "react-router-dom";
import { BlogData } from '../../components/Data/BlogData/BlogData';


export default function MissionPosts() {
    const { id } = useParams();
    const currentPostIndex = BlogData.findIndex((post) => post.id === Number(id));

    // Handle invalid post IDs
    if (currentPostIndex === -1) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1>404: Post not found</h1>
                <Link to="/missions" className="underline mt-4">Back to Blog</Link>
            </div>
        );
    }

    const prevPost = currentPostIndex > 0 ? BlogData[currentPostIndex - 1] : null;
    const nextPost = currentPostIndex < BlogData.length - 1 ? BlogData[currentPostIndex + 1] : null;
    return (
        <div className="flex flex-col items-center justify-between min-h-screen pt-10 px-4 md:pt-30 lg:pt-20 md:px-30 lg:px-40">
            
            {/* Main Content */}
            <div className="flex flex-col items-start justify-center text-left w-full max-w-xl mx-auto lg:max-w-3xl flex-grow">
                <p className="font-semibold tracking-[0.5em] text-lg mb-6">
                    {BlogData[currentPostIndex].date}
                </p>           
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-regular mb-10 mt-3 text-black">{BlogData[currentPostIndex].title}</h1>
                <p className="text-sm sm:text-base lg:text-lg tracking-widest leading-relaxed">{BlogData[currentPostIndex].mainContent}</p>
            </div>
    
            {/* Navigation Links */}
            <div className="w-full flex justify-between items-center mb-10">
            <div className="w-1/3">
                {prevPost ? (
                <Link to={`/mission/${prevPost.id}`} className="font-semibold text-md md:text-2xl lg:text-3xl tracking-wide leading-[6rem] text-black hover:bg-opacity-80">
                    &#x2190; {prevPost.title.split(':')[0]}
                </Link>
             ) : (
            <div></div>
             )}
            </div>

            <div className="w-1/3 text-right">
                {nextPost && (
                <Link to={`/mission/${nextPost.id}`} className="font-semibold text-md md:text-2xl lg:text-3xl tracking-wide leading-[6rem] text-black hover:bg-opacity-80">
                    {nextPost.title.split(':')[0]} &#x2192;
                </Link>
            )}
            </div>
            </div>
        </div>
    );
    
}
