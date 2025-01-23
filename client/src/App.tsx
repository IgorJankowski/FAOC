import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import CreateEditStockRecords from "./views/CreateEditStockRecords/CreateEditStockRecords";

interface mockDataModel {
    users: string[];
}

function App() {
    const [mock, setMockData] = useState<mockDataModel>();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5000/api");

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            setMockData(result);
        };
        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <div className="container-lg">
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route
                        path="/CreateEditStockRecords"
                        element={<CreateEditStockRecords />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
