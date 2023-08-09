"use client"
import { useEffect } from "react"

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log(error)
    },[error])
    return (
        <div>
            <h1>Something went wrong! {error.message}</h1>
            <button className="hover:text-amber-500" onClick={()=>reset()}>Try again!</button>
        </div>
    )
}