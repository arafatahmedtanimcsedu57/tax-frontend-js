import React, { useRef, useCallback } from 'react'

import { EditingState } from '@devexpress/dx-react-grid'
import { GridExporter } from '@devexpress/dx-react-grid-export';

import saveAs from 'file-saver';

import { 
    Grid, 
    Table, 
    TableHeaderRow,  
    TableEditRow,
    TableEditColumn,
    Toolbar,
    ExportPanel,
} from '@devexpress/dx-react-grid-bootstrap4';

import './../styles/editableGrid.style.css'

const onSave = (workbook) => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
    });
  };  

function EditableGrid(props) {
    const { rows, columns, commitChanges, rules } = props
    const exporterRef = useRef(null);

    const startExport = useCallback(() => {
      exporterRef.current.exportGrid();
    }, [exporterRef]);

    return (<>
        <Grid
            rows={rows}
            columns={columns}
        >  
            <EditingState onCommitChanges={commitChanges}/>
            <Table />
            <TableHeaderRow />
            <Toolbar />
            <ExportPanel startExport={startExport} />
            <TableEditRow />
            <TableEditColumn
                showAddCommand
                showDeleteCommand
            />
            
        </Grid>  
         <GridExporter
            ref={exporterRef}
            rows={props.rows}
            columns={props.columns}
            onSave={onSave}
        />
        <div className="rules">
            {rules.map(rule=> <div className="rule">{rule}</div>)}
        </div>
       </>
    )
}

export default EditableGrid;

