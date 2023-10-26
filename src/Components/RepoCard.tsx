import { Link } from "react-router-dom";
import { RepositoresProps } from "../Types/repos";

export function RepoCard({ name, html_url }: RepositoresProps) {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-3 py-3 px-3 sm:mt-12 rounded border-[1px] border-[#7858A6] bg-[#19191F] text-[#f6f6f7] text-center">
                <h1 className="">{name}</h1>
                <Link to={html_url} target="_blank">Link do Repositório</Link>
            </div>
        </>
    )
}