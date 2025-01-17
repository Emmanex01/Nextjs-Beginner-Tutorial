"use client";

import { useEffect, useState } from "react";



type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}


export default function userClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError("failed to fetch user")
                if (err instanceof Error) {
                    setError(`failed to fetch user ${err.message}`)
                }
            }
            finally {
                setLoading(false)
            }
        }
        
        fetchUsers()}, [])

    if (loading) return <div>Loading....</div>
    if (error) return <div>Failed to fetch user data</div>

    return (
        <div>
            { users.map((user) => (
                <div key={user.id} className="space-y-4 bg-slate-400 mb-2">
                    {user.name} ({user.phone})
                </div>
            ))
                
            }
        </div>
    )
}