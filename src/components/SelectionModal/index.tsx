import React from "react";
import { SelectionTable, SelectProps } from '../SelectionTable';
import {Dialog as Modal , DialogProps} from '../Dialog';



export function SelectionModal (props:DialogProps, p: SelectProps) {
    const { handleClose } = props
    return (
        <Modal {...props}>
            <SelectionTable handleClose={handleClose} {...p}/>
        </Modal>
    );
}
