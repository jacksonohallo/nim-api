import React from 'react'
import Image from 'next/image'

const PostDetail = ({ post }) => {
    return (
        <div className="bg-opacity-0 glass-container lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md mb-6">
            <Image 
                unoptimized
                loader={() => post.featuredImage.url}
                src={post.featuredImage.url} 
                alt={post.title}
                layout='fill'
                className="object-center h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                priority={true}
            />
            </div>
        </div>
    )
}

export default PostDetail
