import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <>
            <header>ciao header</header>
            <Outlet />
            <footer>ciao footer</footer>
        </>
    )
}