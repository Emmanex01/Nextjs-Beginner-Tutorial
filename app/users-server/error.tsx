"use client"
import { useEffect } from "react";

export default function Error({error}: {error: string}) {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div>
            Error fetching student data
        </div>
    )
}