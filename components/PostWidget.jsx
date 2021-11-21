import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/Link'
import { getRecentPosts, getSimilarPosts } from '../services'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(()=> {
        if(slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    },[slug])

    return (
            <Tilt 
                className="Tilt bg-opacity-0 glass-container p-8 mb-8 mx-6 lg:mx-0" 
                tiltMaxAngleX={15} 
                tiltMaxAngleY={15}
            >
                <div className="inner-Tilt">
                    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                        {slug? 'Related Posts' : 'Recent Posts'}
                    </h3>
                    {relatedPosts.map((post) => (
                        <div key={post.title} className="flex items-center w-full mb-4">
                            <div className="w-16 flex-none">
                                <Image 
                                    loader={() => post.featuredImage.url}
                                    src={post.featuredImage.url} 
                                    alt={post.title}
                                    width="60px"
                                    height="60px"
                                    className="align-middle rounded-full"
                                />
                            </div>
                            <div className="flex-grow ml-4">
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
    )
}

export default PostWidget
