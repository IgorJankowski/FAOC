export interface TableComponentProps<T> {
    items: T[];
    tableHeaders: string[];
    alignLeft?: boolean;
}
