import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <footer className="bg-light">
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <h3>Menu</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Contacts</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Privacy</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/">
                                        terms and conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        ciaone
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col text-center">
                            <img className="logo-lg" src="../logo_recensando.jpg" alt="logo" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}