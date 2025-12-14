import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img className="logo" src="../logo_recensando.png" alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0 py-4 align-self-end">
                            <li className="nav-item">
                                <NavLink className="nav-link fs-4 pe-5 fw-bold" to="/" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-4 fw-bold" to="/Contacts">Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}