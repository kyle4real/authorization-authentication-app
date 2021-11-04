import React from "react";
import { Fragment } from "react";
import { STable, STableContainer, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "./styles";

const Table = ({ thArr, trArr }) => {
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
                        const dataArr = Object.values(dataObj);
                        return (
                            <Fragment key={index}>
                                <STBodyTR>
                                    <STD style={{ width: "0%", whiteSpace: "nowrap" }}>
                                        {index + 1}
                                    </STD>
                                    {dataArr.map((item, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <STD>{item}</STD>
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
