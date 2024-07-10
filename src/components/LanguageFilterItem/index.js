import './index.css'

const LanguageFilterItem = props => {
  const {language, isActive, updateActiveLanguageFilter, id} = props

  const onClickLanguageFilter = () => {
    updateActiveLanguageFilter(id)
  }

  const activeButtonClassName = isActive
    ? 'active-language-button'
    : 'language-button'

  return (
    <li>
      <button
        type="button"
        className={activeButtonClassName}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
