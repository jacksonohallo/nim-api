import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BiCategory } from "react-icons/bi";
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
                <div className="border-b w-full inline-block py-8">

                    <div className="md:float-left inline-block md:mb-0 mb-4">
                        <Link href="/">
                            <span className="cursor-pointer font-bold text-4xl text-white">
                                Expresso
                            </span>
                        </Link>
                    </div>
              
                    {/* Categories  */}
                    <div>
                        <DropdownMenu.Root modal={false}>
                            <DropdownMenu.Trigger
                                className="md:float-right float-left align-middle text-white glass-container p-2 px-4"
                            >
                                <span className="hidden md:contents"> Categories</span> 
                                <BiCategory className="md:ml-2 inline"/>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content
                                sideOffset={5}
                                className="bg-white rounded-lg p-2"
                            >
                                <DropdownMenu.Arrow className="fill-current text-white"/>
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
                    <div className="md:float-right float-left align-middle text-white glass-container p-2 px-4 mx-2 cursor-pointer ">
                        <Link href="/about">
                            <span className="hidden md:contents px-2">
                                About me   
                            </span>
                        </Link>
                        <FaPaw className="inline md:ml-2"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
