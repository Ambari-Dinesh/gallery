// Write your code here.
import './index.css'

const Thumbnail = props => {
  const {details, deleteUser, active} = props
  const {thumbnailUrl, thumbnailAltText, id} = details
  const classalt = active ? 'activebtn' : ''
  const change = () => {
    deleteUser(id, details)
  }
  return (
    <li className={`li-bg ${classalt}`}>
      <button>
        <img
          src={thumbnailUrl}
          alt="nature river thumbnail"
          className={thumbnailAltText}
          onClick={change}
        />
      </button>
    </li>
  )
}
export default Thumbnail
