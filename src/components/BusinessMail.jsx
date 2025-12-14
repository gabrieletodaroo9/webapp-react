import { Link } from "react-router-dom"

export default function BusinessMail() {

    return (
        <>
            <div className="card mt-5 p-3 text-center">
                <h2 className="py-2">For business</h2>
                <p className="pb-3">Collaborations, partnership,media</p>
                <p className="pt-2">send a mail to our media manager: <Link className="btn btn-sm btn-dark" to="https://mail.google.com/">fabio.pacific@example.com</Link> </p>
            </div>
        </>
    )
}