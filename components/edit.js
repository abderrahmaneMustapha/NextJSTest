import { TextField, Box, Button } from '@mui/material'
import { useState } from 'react'

const Edit = ({ title, body, save}) => {
  const [currentTitle, setCurrentTitle] = useState()
  const [currentBody, setCurrentBody] = useState()

  const handleSave = () => {
    save(currentTitle, currentBody)
  }
  return (
    <Box display={"flex"} flexDirection={"column"}>
       <TextField
          id="article-title"
          label="Article title"
          defaultValue={title}
          variant="outlined"
          margin={"normal"}
          onChange={(event) => {
            setCurrentTitle(event.target.value)
          }}
        />
        <TextField
          id="article-body"
          label="Article content"
          defaultValue={body}
          multiline
          variant="outlined"
          margin={"normal"}
          onChange={(event) => {
            setCurrentBody(event.target.value)
          }}
        />
        <Button onClick={() => handleSave()}>
          Save
        </Button>
    </Box>
  )
}

export default Edit