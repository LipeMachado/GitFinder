import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { RepoPage } from "./Pages/RepoPage";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/repositorios/:login' element={<RepoPage />} />
        </Routes>
    )
}