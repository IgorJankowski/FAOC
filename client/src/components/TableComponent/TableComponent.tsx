import { TableComponentProps } from "./TableComponentTypes";

export default function TableComponent<T extends Record<string, any>>({
    tableItems,
    tableHeaders,
    children,
    useChildrenContent = false,
}: TableComponentProps<T>) {
    return (
        <table className="table table-striped table-hover table-bordered no-top-border w-100">
            <thead>
                {tableHeaders.map((header) => (
                    <th className="no-top-border">{header}</th>
                ))}
            </thead>
            <tbody>
                {children && useChildrenContent
                    ? children
                    : tableItems.map((item, rowIndex) => (
                          <tr key={rowIndex}>
                              {Object.keys(item).map((key, cellIndex) => (
                                  <td key={cellIndex}>{item[key]}</td>
                              ))}
                          </tr>
                      ))}
            </tbody>
        </table>
    );
}
