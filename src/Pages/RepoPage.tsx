import { useEffect, useState } from "react";
import { RepositoresProps } from "../Types/repos";
import { Link, useParams } from "react-router-dom";
import { RepoCard } from "../Components/RepoCard";
import { FiArrowLeft } from "react-icons/fi";

export function RepoPage() {
    const [repo, setRepos] = useState([]);
    const { login } = useParams()

    const loadRepos = async (userName: string) => {
        const repo = await fetch(`https://api.github.com/users/${userName}/repos`)
        const repoResponseData = await repo.json()
        console.log(repoResponseData)

        setRepos(repoResponseData)
    }

    useEffect(() => {
        if (login) {
            loadRepos(login);
        }
    }, [login]);

    return (
        <>
            <section className="relative z-10">
                <div className="text-white">
                    <div className="w-full flex flex-col items-center justify-center gap-8 text-center mb-10 select-none">
                        <h1 className="text-3xl md:text-4xl text-[#f6f6f7] pt-10">Repositórios</h1>
                        <span className="text-lg md:text-xl text-gray-400 pt-3">Clique no link do repositório para se redirecionar ao GitHub.</span>
                        <Link to="/" className="flex justify-center items-center gap-3 py-2 px-3 group">
                            <FiArrowLeft size={20} className="group-hover:text-[#b383f6] group-hover:-translate-x-1 transform transition-transform" />
                            <span className="group-hover:text-[#b383f6] transition-colors text-xl">Voltar</span>
                        </Link>
                    </div>
                    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-5 px-10 mt-[60px] mb-5">
                        {repo.map((repos, index) => (
                            <RepoCard key={index} {...repos as RepositoresProps} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}