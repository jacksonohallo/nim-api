import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AiOutlinePicCenter } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";

import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div>
            <div className="container mx-auto px-10 mb-8">
                <div className="border-b w-full inline-block border-blue-4 py-8">

                    <div className="md:float-left block">
                        <Link href="/">
                            <span className="cursor-pointer font-bold text-4xl text-white">
                                Expresso
                            </span>
                        </Link>
                    </div>

                    {/* Categories  */}
                    <div className="hidden md:float-left md:contents">
                        <DropdownMenu.Root modal={false}>
                            <DropdownMenu.Trigger
                                className="md:float-right flex items-center text-white glass-container p-2 px-4"
                            >
                                <span> Categories | </span> 
                                <AiOutlinePicCenter />
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content
                                sideOffset={5}
                                className="bg-white rounded-lg p-2"
                            >
                                <DropdownMenu.Arrow className="text-white"/>
                                {categories.map((category) => (
                                    <DropdownMenu.Item key={category.slug} className="p-2 hover:bg-pink-500 hover:text-white outline-none rounded-lg">
                                        <Link href={`/category/${category.slug}`}>
                                            <span className='mt-2 align-middle text-sm cursor-pointer'>
                                                {category.name}
                                            </span>
                                        </Link>
                                    </DropdownMenu.Item>
                                ))}

                            </DropdownMenu.Content>
                        </DropdownMenu.Root> 
                    </div>

                    {/* About me */}
                    <div className="md:float-right flex items-center text-white glass-container p-2 px-4 mx-2">
                        <Link href="/about">
                            <span className='align-middle cursor-pointer px-2'>
                                About me   
                            </span>
                        </Link>
                            <FaPaw />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
