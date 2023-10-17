import { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { SearchBar } from './Components/SearchBar';
import { ProfileCard } from './Components/ProfileCard';
import { UserProps } from './Types/user';

export function App() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()
    const { avatar_url, name, location, followers, following } = data
    const userData: UserProps = {
      avatar_url,
      followers,
      following,
      location,
      name
    }
    setUser(userData)
  }

  return (
    <>
      <div className="">
        <nav className="w-full pt-6 flex items-center justify-center">
          <FiGithub size="40" color="#F6F6F7" />
        </nav>
        <div className="w-full flex items-center justify-center text-center mb-10 select-none">
          <h1 className="text-3xl md:text-4xl text-[#f6f6f7] pt-10">Seja bem vindo(a) ao GitFinder</h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <SearchBar LoadUser={loadUser} />
        </div>
        <div className="w-full flex justify-center items-center">
          {user && <ProfileCard {...user} />}
        </div>
      </div>
    </>
  )
}