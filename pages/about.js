import React from 'react'
import Image from 'next/image'
import { FaGithub, FaInstagram, FaTwitter, FaFacebook, FaLinkedinIn,FaExternalLinkAlt, FaPaw } from "react-icons/fa";

const contacts = [
    {
        name: 'github',
        link: 'https://github.com/gurpreet-legend',
        icon: <FaGithub/>
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/gurpreetsiingh/',
        icon: <FaLinkedinIn/>
    },
    {
        name: 'instagram',
        link: 'https://www.instagram.com',
        icon: <FaInstagram/>
    },
    {
        name: 'twitter',
        link: 'https://twitter.com',
        icon: <FaTwitter/>
    },
    {
        name: 'facebook',
        link: 'https://www.facebook.com',
        icon: <FaFacebook/>
    },

]

const About = () => {
    return (
        <div className="container mx-auto p-6 px-10 glass-container">
            <div className="text-4xl mb-8 flex space-x-2">
                <FaPaw className="inline text-pink-400"/><h1>About me</h1>
            </div>
            <Image 
                src="/mee.jpg" 
                alt="Gurpreet" 
                width="100" 
                height="100" 
                className="object-cover object-center rounded-full"
            />
            <div className="ml-4 my-2">
                <h2 className="text-3xl">Hi!</h2>
                <h2 className='text-xl mb-8'>I am <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="text-pink-400 hover:underline">Nimrod Kibet</a>  and this is my blog</h2>
                <p className='text-lg mb-10'>I’m a passionate Geospatial Analyst and an aspiring full stack developer.<br/>So, stay tuned ...</p>
                <div className="contact-section mb-8">
                    <h1 className="text-2xl text-pink-400">Contact me</h1>
                    <div className="flex gap-4 my-3">
                        {contacts.map((contact)=>(
                            <div className="border-2 rounded-full p-3 hover:text-pink-400 hover:border-pink-400">
                                <a href={contact.link} key={contact.name} target="_blank" rel="noreferrer noopener">
                                    {contact.icon}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <a 
                    href="www.nimrodkibet.com"
                    target="_blank"
                    className="text-2xl text-pink-400"
                    rel="noreferrer noopener"
                >
                Portfolio{" "} <FaExternalLinkAlt className="inline text-xl"/> 
                </a>

            </div>
        </div>
    )
}

export default About
