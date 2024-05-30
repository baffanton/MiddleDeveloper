import React, { useEffect, useRef, useState } from 'react';
import { VirtualScrollProps } from './types';
import { getExtraBottomHeight, getExtraTopHeight } from './helpers';
import cx from 'classnames';
import './style.scss';

const VirtualScroll: React.FC<VirtualScrollProps> = ({ data, settings }) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const [startIndex, setStartIndex] = useState<number>(0);
    const [isShowOptions, setIsShowOptions] = useState<boolean>(false);

    const { rowHeight, countVisibleRows } = settings;

    useEffect(() => {
        const onScroll = (e: any) => {
            setStartIndex(
                Math.min(
                    data.length - countVisibleRows - 1,
                    Math.floor(e.target.scrollTop / rowHeight),
                ),
            );
        };

        if (!rootRef || !rootRef.current) {
            return;
        }

        rootRef.current.addEventListener('scroll', onScroll);

        return () => {
            if (!rootRef || !rootRef.current) {
                return;
            }

            rootRef.current.removeEventListener('scroll', onScroll);
        };
    }, [data.length, countVisibleRows, rowHeight]);

    return (
        <div className="select">
            <div
                className="select__title"
                style={{ height: rowHeight }}
                onClick={() => setIsShowOptions(!isShowOptions)}
            >
                SELECT
            </div>
            <div
                className={cx('select__menu', !isShowOptions && 'select__menu_hidden')}
                style={{ height: rowHeight * countVisibleRows + 1 }}
                ref={rootRef}
            >
                <div style={{ height: getExtraTopHeight(rowHeight, startIndex) }} />
                <div>
                    {data
                        .slice(startIndex, startIndex + countVisibleRows + 1)
                        .map((item, itemIndex) => (
                            <div
                                style={{ height: rowHeight }}
                                key={startIndex + itemIndex}
                                className="select__option"
                            >
                                {item}
                            </div>
                        ))}
                </div>
                <div
                    style={{
                        height: getExtraBottomHeight(
                            rowHeight,
                            data.length,
                            startIndex,
                            countVisibleRows,
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export { VirtualScroll };
