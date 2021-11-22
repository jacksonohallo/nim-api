import React, {useState, useEffect, useRef} from 'react'

import { submitComment } from '../services'

const CommentsForm = ({slug}) => {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSuccesMessage, setShowSuccesMessage] = useState(false)
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeDataEl = useRef()

    useEffect(()=> {
        nameEl.current.value = window.localStorage.getItem('name')
        emailEl.current.value = window.localStorage.getItem('email')
    }, [])

    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if(!comment || !name || !email) {
            setError(true)
            return
        }

        const commentObj = { name, email, comment, slug }

        if(storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        } else {
            window.localStorage.removeItem('name', name)
            window.localStorage.removeItem('email', email) 
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccesMessage(true)
                
                setTimeout(() => {
                    setShowSuccesMessage(false)
                    
                }, 3000);
            })
    }

    return (
        <div className="bh-opacity-0 glass-container p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
            {/* Textarea  */}
            <div className="grid grid-col-1 gap-4 mb-4">
                <textarea 
                    ref={commentEl} 
                    name="comment"
                    placeholder="Comment"
                    className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                />
            </div>
            {/* Name & email  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input 
                    ref={nameEl}
                    type="text" 
                    name="name"
                    placeholder="Name"
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                />
                <input 
                    ref={emailEl}
                    type="email" 
                    name="email"
                    placeholder="Email"
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                />
            </div>
            {/* Checkbox  */}
            <div className="grid grid-col-1 gap-4 mb-4">
                <div>
                    <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true"/>
                    <label htmlFor="storeData" className="text-white cursor-pointer ml-2">Save my e-mail and name for the next time I comment</label>
                </div>
            </div>
            {/* Error  */}
            {error && <p className="text-xs text-red-500">All fields are required.</p>}
            <div className="mt-8">
                {/* Post Button  */}
                <button 
                    type="button" 
                    onClick={handleCommentSubmission}
                    className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
                >
                    Post Comment
                </button>
                {/* Success  */}
                {showSuccesMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
            </div>
        </div>
    )
}

export default CommentsForm
