import React from "react";
import rows from './data';
import columns from './columns';
import {DataGrid, DataGridProps} from "@mui/x-data-grid";

export interface historyElement {
    companyId?: number;
    dataAsAt?: string;
    firstYear?: number;
    id?: number;
    lastYear?: number;
    logChangeType?: number;
    name?: string;
    notes?: string;
    policyEffectiveDate?: string;
    reportingThreshold?: number;
}

export interface SelectProps extends DataGridProps {
    handleClose?:()=>{}
}

export function SelectionTable(props:SelectProps) {
    const { handleClose } = props;
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                sx={{
                    '& .MuiDataGrid-row':{cursor:'pointer' }
                }}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onRowClick={handleClose}
            />
        </div>
    );
}
