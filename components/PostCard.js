import React from 'react'
import moment from 'moment'
import Link from 'next/Link'
// import Image from 'next/image'
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import { MdDateRange } from 'react-icons/fa'
import { AiOutlineCalendar } from 'react-icons/ai'

const PostCard = ({ post }) => {

    console.log(post);
    return (
        <div className="bg-opacity-0 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 postcard">
            <div className="relative overflow-hiidden shadow-md pb-80 mb-6">
                <img 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="featuredImage object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>
            <h1 className="transition duration-7 text-center mb-8 cursor-pointer hover:text-pink-500 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>

            <div className="block lg:flex lg:flex-col text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb- w-full lg:w-auto">
                    <img 
                    src={post.author.photo.url}
                    alt={post.author.name} 
                    className="align-middle rounded-full h-10 w-10"
                    />
                    <p className="inline align-middle text-gray-70 ml-2 tex-lg">{post.author.name}</p>
                </div>

                <div className="font-medium text-gray-70">
                    <AiOutlineCalendar 
                        className="h-6 w-6 inline mr-2 text-pink-500"
                    />
                    <span>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>
                <p className="text-center text-lg text-gray-70 font-normal px-4 lg:px-20 mb-8">{post.excerpt}</p>
                <div className="text-center">
                    <Link href={`/post/${post.slug}`}>
                        <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                            Continue Reading
                        </span>
                    </Link>
                </div>
            </div>
           {/* {post.title}
           {post.excerpt}  */}
        </div>
    )
}

export default PostCard
