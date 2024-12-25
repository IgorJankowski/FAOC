import { TableComponentProps } from "./TableComponentTypes";

export default function TableComponent({
    children,
    tableHeaders,
}: TableComponentProps) {
    return (
        <table className="table table-striped table-hover table-bordered w-100">
            <thead>
                {tableHeaders.map((header) => (
                    <th>{header}</th>
                ))}
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
