import UserCard from "@/components/UserCard"

type UserPageProps = {
    params: {
        username: string
    }
}

export type User = {
        profileImageUrl?: string,
        name?: string
        username?: string,
        bio?: string,
        numFollowers?: number,
        numPubRepos?: number,
        location?: string
    }

async function fetchUser(username: string): Promise<User> { 
    let user: User = {}
    const res = await fetch("https://api.github.com/users/" + username)
    if (res.status !== 200) {
        return {}
    }
    const jsonData = await res.json()

    user.profileImageUrl = jsonData["avatar_url"] || undefined
    user.name = jsonData["name"] || undefined
    user.username = jsonData["login"] || undefined
    user.bio = jsonData["bio"] || undefined
    user.numFollowers = jsonData["followers"] || undefined
    user.numPubRepos = jsonData["public_repos"] || undefined
    user.location = jsonData["location"] || undefined

    console.log(user)

    return user
}

export default async function UserDetails({params}: UserPageProps) {
    const {username} = await params
    const user = await fetchUser(username)
    if (Object.keys(user).length == 0) {

    }
    return (
        <main className="mt-[10vh]">
            <div className="flex justify-center">
                {Object.keys(user) ? <UserCard user={user} /> :
                    <div className="bg-red-400 py-4 px-2 rounded-md">
                        <p>User Not Found.</p>
                    </div>
                }
            </div>
        </main>
    )
}