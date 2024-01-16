import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "../Layouts/DefaultLayout";

import { Home } from "../Pages/Home";
import { Historic } from "../Pages/Historic";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={ <DefaultLayout/> }>
                <Route path='/' element={ <Home/> } />
                <Route path='/historic' element={ <Historic/> } />
            </Route>
        </Routes>
    )
}