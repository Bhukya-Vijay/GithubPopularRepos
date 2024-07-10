// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryDetails
  return (
    <li className="repository-item">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="name">{name}</h1>
      <div>
        <div className="counts-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="count-image"
          />
          <p className="count">{starsCount}</p>
        </div>
        <div className="counts-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="count-image"
          />
          <p className="count">{forksCount}</p>
        </div>
        <div className="counts-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
            alt="open issues"
            className="count-image"
          />
          <p className="count">{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
