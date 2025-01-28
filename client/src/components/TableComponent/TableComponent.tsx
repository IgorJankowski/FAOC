import { TableComponentProps } from "./TableComponentTypes";
import { useState } from "react";
import AddStockModal from "../../modals/AddStockModal/AddStockModal";
import { TableRecordModel } from "../../views/HomeView/HomeView";

export default function TableComponent({
    tableItems,
    tableHeaders,
    children,
    useChildrenContent = false,
    onAddRecord,
}: TableComponentProps) {
    const [showModal, setShowModal] = useState(false);
    const handleNewRecord = (newRecord: TableRecordModel) => {
        onAddRecord([...tableItems, newRecord]);
    };

    return (
        <div className="d-flex flex-column align-items-end">
            <table className="table table-striped table-hover table-bordered no-top-border w-100 mb-1">
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
                                  {Object.entries(item).map(([key, value]) => (
                                      <td key={key}>{value}</td>
                                  ))}
                              </tr>
                          ))}
                </tbody>
            </table>
            <button
                className="btn btn-primary col-2"
                onClick={() => setShowModal(true)}
            >
                Add
            </button>
            {showModal && (
                <AddStockModal
                    onSave={(newRecord: TableRecordModel) => {
                        handleNewRecord(newRecord);
                        setShowModal(false);
                    }}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}
