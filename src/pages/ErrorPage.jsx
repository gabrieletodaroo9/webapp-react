export default function ErrorPage() {

    return (
        <><div className="container p-5">
            <div className="alert alert-danger text-center d-flex justify-content-center align-items-center">
                <p className="fs-2"><strong><i className="bi bi-sign-stop-fill pe-4"></i>Errore: </strong>Stai tentando di accedere a una pagina che non esiste</p>
            </div>
        </div >
        </>
    )
}