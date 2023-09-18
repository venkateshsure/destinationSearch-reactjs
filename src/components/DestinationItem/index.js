// Write your code here
import './index.css'

const DestinationItem = props => {
  const {each} = props
  const {name, imgUrl} = each
  return (
    <li className="list-con">
      <img className="img" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
