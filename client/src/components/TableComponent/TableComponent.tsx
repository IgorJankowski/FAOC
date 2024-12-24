import { TableComponentProps } from "./TableComponentTypes";

export default function TableComponent<T>({
    items,
    tableHeaders,
    alignLeft = false,
}: TableComponentProps<T>) {
    return (
        <table>
            <thead>
                {tableHeaders.map((header) => (
                    <th>{header}</th>
                ))}
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr></tr>
                ))}
            </tbody>
            {/* <tfoot> not sure if i'll be using it for now
            </tfoot> */}
        </table>
    );
}
