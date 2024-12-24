export default function Main() {
    return(
        <>
            <main className="bg-[url('/images/react-logo-half.png')] bg-center bg-no-repeat bg-right bg-contain bg-[position] bg-slate-700 text-white px-20 py-20 m-0">
                <h1 className="font-bold text-6xl">Fun facts about React</h1>
                
                <ul className="p-4 mt-10 list-disc list-inside marker:text-blue-400 marker:text-3xl">
                    <li className="p-3 text-2xl">Was first released in 2013</li>
                    <li className="p-3 text-2xl">Was originally created by Jordan Walke</li>
                    <li className="p-3 text-2xl">He well over 100k starts on GitHub</li>
                    <li className="p-3 text-2xl">Is maintained by Meta</li>
                    <li className="p-3 text-2xl">Powers thousands of enterprise apps, including mobile apps</li>
                </ul>

            </main>
        </>
    );
}