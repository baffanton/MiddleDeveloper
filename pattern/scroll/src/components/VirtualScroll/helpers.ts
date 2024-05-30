export const getExtraTopHeight = (rowHeight: number, startIndex: number) => {
    return rowHeight * startIndex;
};
export const getExtraBottomHeight = (
    rowHeight: number,
    countItems: number,
    startIndex: number,
    countVisibleRows: number,
) => {
    return rowHeight * (countItems - (startIndex + countVisibleRows + 1));
};
