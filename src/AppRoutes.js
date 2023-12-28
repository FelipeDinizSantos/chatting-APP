import Index from "./screens/Index";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes()
{
    return(
        <Routes>
            <Route exact path="/" element={<Index />} />
        </Routes>
    )
}