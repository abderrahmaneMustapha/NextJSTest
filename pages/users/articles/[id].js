import List from "../../../components/list"
import { TextField, Button } from '@mui/material'
import { useGetUserArticles, useDelteArticle } from "../../../hooks/articles.hooks"
import { useSearch } from "../../../hooks/search.hooks"
import { useRouter } from 'next/navigation';

const UserArticles = () => {
  const { data, loading, error } = useGetUserArticles()
  const { deleteArticle, isSuccess } = useDelteArticle()
  const { search, searchData } = useSearch(['body'])


  const handleSearch = (event) => {
    const query = event.target.value.split(' ')[0]
    search(query, data)
  }

  const handleEdit = (row) => {
    router.push('articles/'+row.id)
  }

  const handleDelete = async (row) => {
    await deleteArticle(row.id)
    if (isSuccess) {
      alert("Item deleted successfully")
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'title',
      headerName: 'Title',
      width: 600
    },
    {
      field: "Edit",
      headerName: "edit",
      sortable: false,
      renderCell: ({ row }) =>
        <Button onClick={() => handleEdit(row)}>
          Edit
        </Button>,
    },
    {
      field: "Delete",
      headerName: "delete",
      sortable: false,
      renderCell: ({ row }) =>
        <Button onClick={() => handleDelete(row)}>
          Delete
        </Button>,
    }]

  if (loading) return <div>data is loading please wait</div>
  return (
    <div className="container" >
      <header className="header">
        <h1>articles list</h1>
      </header>
      <section>
        <TextField id="outlined-search" label="Search field" type="search" onChange={handleSearch} />
      </section>
      <List rows={searchData || data} columns={columns} />
    </div>
  )
}

export default UserArticles