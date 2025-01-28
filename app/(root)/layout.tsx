import Navbar from "../components/Navbar";
import FooterMessage from "../components/FooterMessage"

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className="font-work-sans">
            <Navbar/>
            {children}
            <FooterMessage/>
            

        </main>
    )
}