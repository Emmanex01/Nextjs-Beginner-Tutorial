// An array of object of different user
export const users = [
    {
        id: 1,
        name: "Emma"
    },
    {
        id: 2,
        name: "Tochukwu"
    }
]

// Define a GET handler function for retrieving an existing data from the database
export async function GET() {
    return Response.json(users)
}

// To add a new user object we use POST Request Handler
export async function POST(request: Request) {
    // The request parameter represent the data to be sent by client
    
    // Reads and extract the json data sent by the client and converts it to javascript object
    const user = await request.json()

    // create new user object to be added to the array of users
    const newUser = {
        id: users.length + 1,
        name: user.name
    }

    // Add to the users array
    users.push(newUser); 

    return new Response(JSON.stringify(newUser), {
        headers: {
            "content-Type": "application/json"
        }
    })
}