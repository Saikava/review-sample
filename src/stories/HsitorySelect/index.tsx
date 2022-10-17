import React, { useState } from "react";
import {Button, ButtonProps, HistorySelectionDialogTitle, SelectionModal} from '../../components';

export interface HistorySelectionProps extends ButtonProps{}

export default function HistorySelection() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button variant="contained" className="History-selection" onClick={handleClickOpen}>
                History Selection
            </Button>
            <SelectionModal open={open} handleClose={handleClose} title="History Selection Modal" />
        </>
    );
}
