import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { UserProfile } from "./pages/UserProfile/UserProfile"
import { Authentication } from "./pages/Authentication/Authentication"
import { PageNotFound } from "./pages/PageNotFound/PageNotFound"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userProfile" element={<UserProfile />} />
                <Route path="/authentication" element={<Authentication />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
