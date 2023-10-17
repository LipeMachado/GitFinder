import { BiSearch } from "react-icons/bi";

export function SearchBar() {
    return (
        <>
            <div className="w-[90%] sm:w-[500px] relative flex justify-center items-center">
                <BiSearch className="absolute left-2" size={30} color="#F6F6F7" />
                <input className="w-full py-2 pl-12 pr-3 rounded border-[1px] border-[#7858A6] bg-[#19191F] placeholder:-[#7C7C8A] text-[#f6f6f7] " placeholder="Pesquise um usuário do github." />
            </div>
        </>
    )
}