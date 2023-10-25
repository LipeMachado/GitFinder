import { useEffect, useState } from "react";
import { RepositoresProps } from "../Types/repos";
import { Link, useParams } from "react-router-dom";
import { RepoCard } from "../Components/RepoCard";

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
                    <div className="w-full flex flex-col items-center justify-center text-center mb-10 select-none">
                        <h1 className="text-3xl md:text-4xl text-[#f6f6f7] pt-10">Seja bem vindo(a) ao GitFinder</h1>
                        <span className="text-lg md:text-xl text-gray-400 pt-3">Clique na foto para te redirecionar ao GitHub.</span>
                    </div>
                    <Link to="/">Voltar</Link>
                    {repo.map((repos, index) => (
                        <RepoCard key={index} {...repos as RepositoresProps} />
                    ))}
                </div>
            </section>
        </>
    )
}