import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommenttext] = useState('')

  const [commentList, setCommentList] = useState([])

  const onChangeName = event => setName(event.target.value)

  const onChangeComment = event => setCommenttext(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()

    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentList(prevState => [...prevState, newComment])
    setName('')
    setCommenttext('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitForm}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={onChangeName}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onChangeComment}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
