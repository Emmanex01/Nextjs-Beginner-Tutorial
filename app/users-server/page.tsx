type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        <div>
            {
                users.map((user: User) => (
                    <div key={user.id} className="space-y-4 bg-slate-400">
                        {user.name} ({user.phone})
                    </div>
                ))
            }
        </div>
    )
}