import { TableComponentProps } from "./TableComponentTypes";

export default function TableComponent({
    children,
    tableHeaders,
}: TableComponentProps) {
    return (
        <table className="table table-striped table-hover table-bordered no-top-border w-100">
            <thead>
                {tableHeaders.map((header) => (
                    <th className="no-top-border">{header}</th>
                ))}
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
