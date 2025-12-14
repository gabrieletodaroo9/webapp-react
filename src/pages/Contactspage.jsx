import SocialSection from "../components/SocialSection";
import AssistanceMail from "../components/AssistanceMail";
import BusinessMail from "../components/BusinessMail";

export default function Contactspage() {

    return (
        <>
            <main className="bg-second">
                <div className="container py-5">
                    <h1 className="text-center pt-3 fw-bold">Contacts</h1>
                    <AssistanceMail />
                    <BusinessMail />
                    <SocialSection />
                </div>
            </main>
        </>
    )
}