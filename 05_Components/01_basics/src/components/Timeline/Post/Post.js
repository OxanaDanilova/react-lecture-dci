import './Post.scss'

function Post(props) {

  return (
    <div>
        <p><b>{props.post.user}</b></p>
        <p>{props.post.content}</p>
        <p>{props.post.date}</p>
    </div>
  )
}

export default Post