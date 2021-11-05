import React from "react";
import { Fragment } from "react";
import {
    STable,
    STableContainer,
    STBody,
    STBodyTR,
    STD,
    STDNoPadding,
    STH,
    STHead,
    STHeadTR,
} from "./styles";

const Table = ({ thArr, trArr, displayKeys }) => {
    return (
        <STableContainer>
            <STable>
                <STHead>
                    <STHeadTR>
                        <STH>#</STH>
                        {thArr.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <STH>{item}</STH>
                                </Fragment>
                            );
                        })}
                    </STHeadTR>
                </STHead>
                <STBody>
                    {trArr.map((dataObj, index) => {
                        let displayArr;
                        if (displayKeys) {
                            displayArr = displayKeys.reduce((r, v) => {
                                if (v instanceof Array) {
                                    return [...r, { value: dataObj[v[0]], component: v[1] }];
                                } else {
                                    return dataObj[v] !== undefined
                                        ? [...r, { value: dataObj[v], component: null }]
                                        : r;
                                }
                            }, []);
                        } else displayArr = Object.values(dataObj);
                        return (
                            <Fragment key={index}>
                                <STBodyTR>
                                    <STD style={{ width: "0%", whiteSpace: "nowrap" }}>
                                        {index + 1}
                                    </STD>
                                    {displayArr.map(({ value, component }, index) => {
                                        return (
                                            <Fragment key={index}>
                                                {!component && <STD>{value}</STD>}
                                                {component && (
                                                    <STDNoPadding>
                                                        {component(value, dataObj)}
                                                    </STDNoPadding>
                                                )}
                                            </Fragment>
                                        );
                                    })}
                                </STBodyTR>
                            </Fragment>
                        );
                    })}
                </STBody>
            </STable>
        </STableContainer>
    );
};

Table.defaultProps = {};

export default Table;
