import { DataGrid } from '@mui/x-data-grid';
import { itemsPerPage } from '../utils/config';

const List = ({ rows, columns }) => {
  return (
    <DataGrid
      rows={rows}

      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: itemsPerPage,
          },
        },
      }}
      pageSizeOptions={[itemsPerPage]}
      disableRowSelectionOnClick
    />
  )
}

export default List
