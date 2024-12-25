import TableComponent from "../../components/TableComponent/TableComponent";

export default function HomeView() {
    const mock = {
        tableHeaders: ["name", "id", "amount", "profit"],
        tableItems: [
            { name: "Alice", id: 1, amount: 500, profit: 50 },
            { name: "Bob", id: 2, amount: 300, profit: 30 },
            { name: "Charlie", id: 3, amount: 700, profit: 70 },
            { name: "Diana", id: 4, amount: 400, profit: 40 },
            { name: "Eve", id: 5, amount: 600, profit: 60 },
        ],
    };
    return (
        <div className="container-lg">
            <TableComponent tableHeaders={mock.tableHeaders}>
                {mock.tableItems.map((item) => (
                    <tr>
                        <th>{item.name}</th>
                        <th>{item.id}</th>
                        <th>{item.amount}</th>
                        <th>{item.profit}</th>
                    </tr>
                ))}
            </TableComponent>
        </div>
    );
}
