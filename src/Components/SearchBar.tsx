import { useState, KeyboardEvent } from "react";
import { BiSearch } from "react-icons/bi";

type SearchBarProps = {
    LoadUser: (userName: string) => Promise<void>
}

export function SearchBar({ LoadUser }: SearchBarProps) {
    const [userName, setUserName] = useState("")

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            LoadUser(userName)
        }
    }

    return (
        <>
            <div className="w-[90%] sm:w-[500px] relative flex justify-center items-center select-none">
                <button onClick={() => LoadUser(userName)}>
                    <BiSearch className="absolute left-2" size={30} color="#F6F6F7" />
                </button>
                <input
                    className="w-full py-2 pl-12 pr-3 rounded border-[1px] border-[#7858A6] bg-[#19191F] placeholder:-[#7C7C8A] text-[#f6f6f7]"
                    placeholder="Pesquise um usuário do github."
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </>
    )
}