import { FiGithub } from 'react-icons/fi';
import { SearchBar } from './Components/SearchBar';
import { ProfileCard } from './Components/ProfileCard';

export function App() {
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
          <SearchBar />
        </div>
        <div className="w-full flex justify-center items-center">
          <ProfileCard />
        </div>
      </div>
    </>
  )
}