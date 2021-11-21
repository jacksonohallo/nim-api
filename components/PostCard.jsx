import React from 'react'
import moment from 'moment'
import Link from 'next/Link'
import Image from 'next/image'
import { AiOutlineCalendar } from 'react-icons/ai'

const PostCard = ({ post }) => {

    console.log(post);
    return (
        <div className="bg-opacity-0 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 mx-6 glass-container lg:mx-0">
            <div className="relative overflow-hiidden shadow-md pb-80 mb-6">
                <Image 
                    loader={() => post.featuredImage.url}
                    src={post.featuredImage.url}
                    alt={post.title}
                    layout="fill"
                    className="featuredImage object-center absolute h-40 sm:h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>
            <h1 className="text-left mb-6 cursor-pointer hover:text-pink-600 hover:underline text-3xl font-semibold lg:p-0 px-4">
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>

            <div className="block lg:flex lg:flex-col text-center items-start justify-center mb-8 w-full lg:p-0 px-4">
                <div className="flex lg:flex-row flex-col items-start justify-start lg:space-x-12 mb-4">
                    <div className="flex flex-row mb-4 lg:mb-0 w-full lg:w-auto">
                        <Image 
                            loader={() => post.author.photo.url}
                            src={post.author.photo.url}
                            alt={post.author.name} 
                            height="35px"
                            width="35px"
                            className="align-middle rounded-full h-10 w-10"
                        />
                        <p className="inline align-middle text-white-700 ml-2 font-medium text-lg">{post.author.name}</p>
                    </div>

                    <div className="flex flex-row font-medium text-gray-70">
                        <AiOutlineCalendar 
                            className="h-6 w-6 inline mr-2 text-pink-600"
                        />
                        <span className="">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>
                    </div>  
                </div>
                <p className="text-left text-lg text-gray-70 font-normal  mb-8">{post.excerpt}</p>
                <div className="text-left">
                    <Link href={`/post/${post.slug}`}>
                        <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                            Read Now
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
