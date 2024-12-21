import React, { useEffect, useState } from "react";

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

    return <div>{mock?.users}</div>;
}

export default App;
