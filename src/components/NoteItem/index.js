import {Container, Name, Description} from './styledComponents'

const NoteItem = props => {
  const {data} = props
  const {title, desc} = data

  return (
    <Container>
      <Name>{title}</Name>
      <Description>{desc}</Description>
    </Container>
  )
}

export default NoteItem
