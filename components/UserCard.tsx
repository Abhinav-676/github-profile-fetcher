import { User } from "@/app/[username]/page"


type UserCardProp = {
    user: User
}

export default function UserCard({ user }: UserCardProp) {
    return (
        <div className="bg-gray-900 border rounded-lg p-6 w-full max-w-sm shadow-md">
            {user.profileImageUrl && (
                <img
                    src={user.profileImageUrl}
                    alt={user.name || 'User avatar'}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
            )}
            {user.name && <h2 className="text-2xl font-bold text-center mb-2">{user.name}</h2>}
            {user.username && <p className="text-gray-500 text-center mb-4">@{user.username}</p>}
            {user.bio && <p className="text-gray-600 text-center mb-4">{user.bio}</p>}
            {user.location && <p className="text-gray-500 text-center mb-4">📍 {user.location}</p>}
            <div className="flex justify-around text-center mb-4">
                {user.numPubRepos !== undefined && (
                    <div>
                        <p className="text-xl font-bold">{user.numPubRepos}</p>
                        <p className="text-gray-500 text-sm">Repos</p>
                    </div>
                )}
                {user.numFollowers !== undefined && (
                    <div>
                        <p className="text-xl font-bold">{user.numFollowers}</p>
                        <p className="text-gray-500 text-sm">Followers</p>
                    </div>
                )}
            </div>
        </div>
    )
}