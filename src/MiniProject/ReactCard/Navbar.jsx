export default function Navbar() {
    return(
        <>
            <header className="h-90 bg-slate-500 px-4 py-3">
                <nav className="flex items-center h-100 text-xl text-cyan-400 font-bold">
                    <img className="w-12 mr-2" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react logo" />
                    <span className="to-blue-400">ReactFacts</span>
                </nav>
            </header>
        </>
    );
}