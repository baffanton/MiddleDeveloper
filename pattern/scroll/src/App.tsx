import React from 'react';
import './App.css';
import { VirtualScroll } from './components/VirtualScroll';

function App() {
    const data: number[] = Array.from(Array(10000).keys());

    return (
        <div className="App">
            <VirtualScroll data={data} settings={{ rowHeight: 50, countVisibleRows: 5 }} />
        </div>
    );
}

export default App;
