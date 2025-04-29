import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Layout({ title, description, children }) {
    return (
        <>
            <Nav />
            <div className="hero bg-base-100 py-8">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold" style={{fontFamily: 'Montserrat'}}>{title}</h1>
                        <p className="text-xl py-6" style={{fontFamily: 'Poppins'}}>{description}</p>
                    </div>
                </div>
            </div>
            <main className="p-8">
                {children}
            </main>
            <Footer />
        </>
    );
}
