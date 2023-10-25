import { Link } from "react-router-dom";
import { RepositoresProps } from "../Types/repos";

export function RepoCard({ name, html_url }: RepositoresProps) {
    return (
        <>
            <div>
                <h1>{name}</h1>
                <Link to={html_url} target="_blank">Link do Repositório</Link>
            </div>
        </>
    )
}