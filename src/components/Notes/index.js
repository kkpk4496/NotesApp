import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  H1,
  SubContainer,
  Input,
  TextArea,
  Button,
  Img,
  OutputContainer,
  UnorderList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [data, setData] = useState([])

  const updateTitle = event => setTitle(event.target.value)

  const updateDesc = event => setDesc(event.target.value)

  const updateData = event => {
    event.preventDefault()
    const newData = {id: uuidv4(), title, desc}
    setData(prevData => [...prevData, newData])
    setTitle('')
    setDesc('')
  }
  console.log(data)
  return (
    <MainContainer>
      <H1>Notes</H1>
      <SubContainer onSubmit={updateData}>
        <Input
          type="text"
          placeholder="Title"
          maxLength="100"
          onChange={updateTitle}
          value={title}
        />
        <TextArea
          type="text"
          placeholder="Take a Note..."
          onChange={updateDesc}
          value={desc}
        />
        <Button type="submit">Add</Button>
      </SubContainer>
      {data.length !== 0 ? (
        <UnorderList>
          {data.map(each => (
            <NoteItem key={each.id} data={each} />
          ))}
        </UnorderList>
      ) : (
        <OutputContainer>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png "
            alt="notes empty"
          />
          <h1>No Notes Yet</h1>
          <p>Notes you add will appear here</p>
        </OutputContainer>
      )}
    </MainContainer>
  )
}

export default Notes
