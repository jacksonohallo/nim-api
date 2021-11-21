import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className="bg-opacity-0 glass-container p-8 mb-8 pb-12 mx-6 lg:mx-0">
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                Categories
            </h3>
            <div className="flex flex-wrap space-x-2">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="inline cursor-pointer mb-3 bg-gray-200 hover:bg-pink-600 hover:text-white px-3 py-2.5 rounded-full text-pink-600 text-sm">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories
