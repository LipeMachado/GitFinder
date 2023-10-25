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
            <div className="text-white">
                <Link to="/">Voltar</Link>
                {repo.map((repos, index) => (
                    <RepoCard key={index} {...repos as RepositoresProps} />
                ))}
            </div>
        </>
    )
}