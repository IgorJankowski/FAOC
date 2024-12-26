import { ReactNode } from "react";

export interface TableComponentProps<T> {
    tableItems: T[];
    tableHeaders: string[];
    children?: ReactNode;
    useChildrenContent?: boolean;
}
