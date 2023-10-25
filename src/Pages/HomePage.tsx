import { useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { UserProps } from '../Types/user';
import { RepositoresProps } from '../Types/repos';
import { SearchBar } from '../Components/SearchBar';
import { ProfileCard } from '../Components/ProfileCard';
import { Error } from '../Components/Error';

export function HomePage() {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false)

    const loadUser = async (userName: string) => {
        setError(false)
        setUser(null)

        const user = await fetch(`https://api.github.com/users/${userName}`)
        const userResponseData = await user.json()
        console.log(userResponseData)


        if (user.status === 404) {
            setError(true)
            return
        }

        const { avatar_url, name, location, followers, following, html_url, login } = userResponseData
        const userData: UserProps = {
            avatar_url,
            followers,
            following,
            location,
            name,
            html_url,
            login
        }
        setUser(userData)
    }

    return (
        <>
            <div>
                <nav className="w-full pt-6 flex items-center justify-center">
                    <FiGithub size="40" color="#F6F6F7" />
                </nav>
                <div className="w-full flex flex-col items-center justify-center text-center mb-10 select-none">
                    <h1 className="text-3xl md:text-4xl text-[#f6f6f7] pt-10">Seja bem vindo(a) ao GitFinder</h1>
                    <span className="text-lg md:text-xl text-gray-400 pt-3">Clique na foto para te redirecionar ao GitHub.</span>
                </div>
                <div className="w-full flex justify-center items-center">
                    <SearchBar LoadUser={loadUser} />
                </div>
                <div className="w-full flex justify-center items-center">
                    {user && <ProfileCard {...user} />}
                    {error && <Error />}
                </div>
            </div>
        </>
    )
}