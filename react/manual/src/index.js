import ReactDOM from "react-dom/client";
import React from "react";

export default function App() {
    return <>Welcome to My React App</>
}

const element = document.getElementById("app")

const root = ReactDOM.createRoot(element)
root.render(<App />)