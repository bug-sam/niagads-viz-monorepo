// modified from https://github.com/ggascoigne/react-table-example
import React, { ReactElement, useCallback, useState, useMemo } from "react";

import Button from "@mui/core/Button";
import Collapse from "@mui/core/Collapse";
import Divider from "@mui/core/Divider";
import Box from "@mui/core/Box";

interface CollapseWithClose {
    isOpen: boolean;
    handleClose: any;
    children: React.ReactElement;
}
export const CollapseWithClose: React.FC<CollapseWithClose> = ({ isOpen, handleClose, children }) => {
    return <Collapse in={isOpen}>
        {children}
        <Divider/>
        <Box>
            <Button variant="text" color="primary" onClick={handleClose}>Close</Button>
        </Box>
    </Collapse>;
};
