import List from "../../components/list"
import { TextField, Button } from '@mui/material'
import { useUsers } from "../../hooks/users.hooks"
import { useSearch } from "../../hooks/search.hooks"
import { useRouter } from 'next/navigation';

const Users = () => {
  const { data, loading, error } = useUsers()
  const { search, searchData } = useSearch(['name', 'username'])

  const router = useRouter();

  const handleSearch = (event) => {
    const query = event.target.value
    search(query, data)
  }

  const handleUserArticles = (row) => {
    router.push('users/articles/'+row.id)
  }

  const columns = [
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'username',
      headerName: 'Username',
      width: 160
    },
    {
      field: 'address', headerName: 'Address', width: 300, valueGetter: (params) =>
        `${params.row.address.street || ''} ${params.row.address.suit || ''} ${params.row.address.city || ''} ${params.row.address.zipcode || ''}`,
    },
    {
      field: "User Articles",
      headerName: "articles",
      sortable: false,
      renderCell: ({ row }) =>
        <Button onClick={() => handleUserArticles(row)}>
          Artciles
        </Button>,
    },
  ]

  return (
    <div className="container" >
      <header className="header">
        <h1>Users list</h1>
      </header>
      <section>
        <TextField id="outlined-search" label="Search field" type="search" onChange={handleSearch} />
      </section>
      <List rows={searchData || data} columns={columns} />
    </div>
  )

}

export default Users