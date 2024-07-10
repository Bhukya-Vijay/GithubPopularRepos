import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {repositoryData: [], activeLanguageFilter: 'ALL', isLoading: true}

  componentDidMount() {
    this.getRepositoryItems()
  }

  getRepositoryItems = async () => {
    const {activeLanguageFilter} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguageFilter}`
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.popular_repos.map(eachRepository => ({
      name: eachRepository.name,
      id: eachRepository.id,
      issuesCount: eachRepository.issues_count,
      forksCount: eachRepository.forks_count,
      starsCount: eachRepository.stars_count,
      avatarUrl: eachRepository.avatar_url,
    }))
    this.setState({repositoryData: updatedData, isLoading: false})
  }

  renderRepositories = () => {
    const {repositoryData} = this.state
    return (
      <ul className="repository-list">
        {repositoryData.map(repository => (
          <RepositoryItem key={repository.id} repositoryDetails={repository} />
        ))}
      </ul>
    )
  }

  updateActiveLanguageFilter = id => {
    this.setState({activeLanguageFilter: id}, this.getRepositoryItems)
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading, activeLanguageFilter} = this.state
    return (
      <div className="app-container">
        <h1 className="title">Popular</h1>
        <ul className="language-buttons-container">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              key={eachLanguage.id}
              language={eachLanguage.language}
              id={eachLanguage.id}
              isActive={eachLanguage.id === activeLanguageFilter}
              updateActiveLanguageFilter={this.updateActiveLanguageFilter}
            />
          ))}
        </ul>
        <div>{isLoading ? this.renderLoader() : this.renderRepositories()}</div>
      </div>
    )
  }
}

export default GithubPopularRepos
