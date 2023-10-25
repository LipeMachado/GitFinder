import { BiMap } from "react-icons/bi";
import { UserProps } from "../Types/user";
import { Link } from "react-router-dom";

export function ProfileCard({ avatar_url, followers, following, location, name, html_url, login }: UserProps) {

    return (
        <>
            <div className="w-[90%] sm:w-[500px] py-3 mt-6 sm:mt-12 rounded border-[1px] border-[#7858A6] bg-[#19191F] text-[#f6f6f7] select-none">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center py-4 px-5">
                    <a href={html_url} target="_blank">
                        <img className="w-[70px] h-[70px] sm:h-[60px] rounded" src={avatar_url} />
                    </a>
                    <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-around">
                        <div className="flex flex-col gap-1 justify-center mx-0 sm:mx-3">
                            <h2 className="text-sm sm:text-base font-bold text-center">{name}</h2>
                            <div className="flex justify-center sm:justify-start items-center gap-1">
                                {location ? (
                                    <>
                                        <BiMap />
                                        <span className="sm:text-xs">{location}</span>
                                    </>
                                ) : <span className="sm:text-xs">Localidade não encontrada</span>}
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <div className="flex flex-col gap-1 text-center mr-5">
                                <h3 className="font-bold">Seguidores</h3>
                                <span className="text-sm">{followers}</span>
                            </div>
                            <div className="flex flex-col gap-1 text-center">
                                <h3 className="font-bold">Seguindo</h3>
                                <span className="text-sm">{following}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/repositorios/${login}`}>Ver repositórios</Link>
                </div>
            </div>
        </>
    )
}