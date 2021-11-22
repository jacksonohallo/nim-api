import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';

const PostWidget = ({ categories, slug }) => {
    const [displayPosts, setDisplayPosts] = useState([])

    useEffect(()=> {
        if(slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setDisplayPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setDisplayPosts(result))
        }
    },[slug])

    return (
            <>
                {displayPosts.length != 0 && (
                    <Tilt 
                        className="Tilt bg-opacity-0 glass-container p-8 mb-8 mx-6 lg:mx-0" 
                        tiltMaxAngleX={10} 
                        tiltMaxAngleY={10}
                    >
                        <div className="inner-Tilt">
                            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                                {slug? 'Related Posts' : 'Recent Posts'}
                            </h3>
                            {displayPosts.map((post) => (
                                <div key={post.title} className="flex items-center justify-center w-full mb-4">
                                    <div className="w-16 flex ">
                                        <Image 
                                            unoptimized
                                            loader={() => post.featuredImage.url}
                                            src={post.featuredImage.url} 
                                            alt={post.title}
                                            width="60px"
                                            height="60px"
                                            className="align-middle rounded-full"
                                        />
                                    </div>
                                    <div className="flex-grow ml-4 py-2 recent-post px-2">
                                        <p className="text-white-500 font-xs">
                                            {moment(post.createdAt).format('MMM DD, YYYY')}
                                        </p>
                                        <Link href={`/post/${post.slug}`} className="text-md">
                                            {post.title}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tilt>
                )}
            </>
    )
}

export default PostWidget
