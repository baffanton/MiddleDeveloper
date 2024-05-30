export interface VirtualScrollProps {
    data: number[];
    settings: VirtualScrollSettingsModel;
}

export interface VirtualScrollSettingsModel {
    rowHeight: number;
    countVisibleRows: number;
}
