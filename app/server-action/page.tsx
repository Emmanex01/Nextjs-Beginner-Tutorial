import { revalidatePath } from "next/cache";

type mockUser = {
    id: number
    name: string
}

export default async function FetchUser() {

    // fetching data from the endpoint
    const res = await fetch("https://678c22f11a6b89b27a2c6d9f.mockapi.io/users");
    const users = await res.json();

    // create a server action
    async function addUser(formData: FormData) {
        // Tells Nextjs to execute the async function on the server
        "use server"

        // extract the name
        const name = formData.get("name");

        // make a POST request (add new user name)
        const res  = await fetch("https://678c22f11a6b89b27a2c6d9f.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        })


        const newUser = await res.json()

        revalidatePath("/server-action")

    }

    // returning the fetched data and display
    return (
        <div>
            <div className="flex bg-red-50">
                <form action={addUser}>
                    <input 
                        type="text" 
                        name="name"
                        required
                        className="bg-orange-600"
                    />
                    <button className="bg-blue-800 p-3">Add User</button>
                </form>
            </div>
            <div className="grid grid-cols-4   gap-4">
                {users.map((user: mockUser) => (
                    <div key={user.id} className="bg-slate-400 py-4">
                        {user.name} ({user.id})
                    </div>
                ))}
            </div>
        </div>
        
    )
}