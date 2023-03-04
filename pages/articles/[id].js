import Edit from "../../components/edit"
import { useArticle, useEditArticle } from "../../hooks/articles.hooks"
import { useRouter } from "next/router"

const EditArticle = ({ title, body}) => {
  const {data, loading}= useArticle()
  const router = useRouter()
  const {editArticle, isSuccess} = useEditArticle()
  
  const save = (_title, _body) => {
    editArticle(_title, _body)
  }

  const handleEdit = () => {
    if(isSuccess) {
      alert("Article updated successfully")
      router.push("/articles")
    } else if (isSuccess === false) {
      alert("Article could not be updated")
    } 
  }

  if (loading) return <div>data is loading please wait</div>

  return (
    <div className="container" >
    {handleEdit()}
    <header className="header">
      <h1>Edit an article</h1>
    </header>
    <Edit title={data.title} body={data.body} save={save}/>
    </div>
  )
}

export default EditArticle