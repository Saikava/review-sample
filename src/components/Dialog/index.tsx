import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import {Button} from "../Button";
import React from "react";
export interface DialogTitleProps {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

export interface DialogProps extends MuiDialogProps {
    handleClose:any;
    title:string;
    open: boolean;
    children?: React.ReactNode;
}



export function HistorySelectionDialogTitle(props: DialogTitleProps) {
    const { children = '', onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <Button
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </Button>
            ) : null}
        </DialogTitle>
    );
}

export function Dialog(props:DialogProps) {
    const { handleClose, title, open, children=''} = props;
    return (
        <MuiDialog className="History-selection-dialog" open={open}>
            <HistorySelectionDialogTitle id="History-selection-dialog-title" onClose={handleClose}  >
                {title}
            </HistorySelectionDialogTitle>
            <DialogContent dividers sx={{ width: 1200 }}>
                {children}
            </DialogContent>
        </MuiDialog>
    );
}
