import React from "react";
import { SGrid, SGridItem } from "./styles";

const PageSplit = (left, right) => {
    return (
        <SGrid>
            <SGridItem>{left}</SGridItem>

            <SGridItem>{right}</SGridItem>
        </SGrid>
    );
};

export default PageSplit;
