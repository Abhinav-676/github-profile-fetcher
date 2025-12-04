'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function SearchBox() {
    const [input, setInput] = useState<string>("")

    const router = useRouter()
    
    const onSeach = () => {
        router.push(`/${input}`)
    }

    return (
        <div className="py-4 px-4 rounded-2xl bg-gray-900">
        <input 
            className="py-2 px-1 mr-3" 
            placeholder="Enter Username" 
            value={input}
            onChange={(e) => {setInput(e.target.value)}}/>
        <button className="bg-fuchsia-900 py-2 px-4 rounded-lg cursor-pointer" onClick={onSeach}>Search</button>
        </div>
    )
}