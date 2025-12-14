import { Link } from "react-router-dom"

export default function AssistanceMail() {

    return (
        <>
            <div className="card mt-5 p-3 text-center">
                <h2 className="py-2">For assistance and support</h2>
                <p className="pb-3">Tecnic problem,reports, general answer and other useful tips</p>
                <Link className="btn btn-dark fw-bold fs-3 mx-5" to="/error">Contact here!</Link>
                <p className="pt-5">or send a mail to: <Link className="btn btn-sm btn-dark" to="https://mail.google.com/">recensando@example.com</Link> </p>
            </div>
        </>
    )
}