import { Routes, Route } from "react-router-dom";

export default function BrowserRoute_Routes_Route() {
return (
    <>
        <div>
            <Routes>
                <Route path="/" element={<div>This is a BrowserRoute_Routes_Route page</div>}/>
            </Routes>
            <Routes>
                <Route path="/BrowserRoute" element={<div> This is BrowserRoute page</div>}/>
                <Route path="/Routes" element={<div> This is Routes page</div>}/>
                <Route path="/Route" element={<div> This is Route page</div>}/>
            </Routes>
        </div>
    </>
)
}
