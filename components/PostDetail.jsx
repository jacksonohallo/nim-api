import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import { AiOutlineCalendar } from 'react-icons/ai'

const PostDetail = ({ post }) => {
    console.log(post.content.raw.children)
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }

        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'bulleted-list':
            return <ul key={index} className="mb-8 list-disc ml-4 mt-8">{obj.children.map((item, i) =>{
                const listText = item.children[0].children[0].text
                return (
                    <li key={i}>{listText}</li>
                )
            })}</ul>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
    
    return (
        <div className="bg-opacity-0 glass-container lg:p-8 pb-12 mb-8">
            {/* Image  */}
            <div className="relative overflow-hidden shadow-md mb-6">
                <img 
                    src={post.featuredImage.url} 
                    alt={post.title}
                    className="object-center h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>

            {/* Author & Date  */}
            <div className="px-4 lg:px-0">
                <div className="flex justify-between lg:justify-start space-x-6 items-center mb-8 w-full">
                    {/* Author  */}
                    <div className="flex flex-row items-center justify-center lg:mb-0 lg:w-auto">
                        <Image 
                            unoptimized
                            loader={() => post.author.photo.url}
                            src={post.author.photo.url}
                            alt={post.author.name} 
                            height="35px"
                            width="35px"
                            className="align-middle rounded-full object-cover"
                        /> 
                         <p className="inline align-middle ml-2 font-medium text-lg">{post.author.name}</p>
                    </div>
                    {/* Date  */}
                    <div className="flex flex-row font-medium">
                        <AiOutlineCalendar 
                            className="h-6 w-6 inline mr-2 text-pink-600"
                        />
                        <span>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>
                    </div>
                </div>
                {/* Post Title  */}
                <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
                {/* Blog Content */}
                {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                    return getContentFragment(index, children, typeObj, typeObj.type)
                })}
            </div>


        </div>
    )
}

export default PostDetail
