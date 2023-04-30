import React from "react";
import ReactDOM from 'react-dom/client';

function App() {
    const title: string = "Laravel 9 Vite with TypeScript React ああ!!";
    return <h1>{title}</h1>;
}

export default App;

const container = document.getElementById('app') as HTMLInputElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);
