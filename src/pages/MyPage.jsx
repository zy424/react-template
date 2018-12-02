import React from 'react'
import PropTypes from 'prop-types'

class MyPage extends React.Component {
  render () {
    const {onChange, onClick, searchName} = this.props
    return (
      <React.Fragment>
        <h2 id="heading">Search Github Users</h2>
        <input onChange={onChange} name="search-name" value={searchName}/>
        <button onClick={onClick}>Search</button>
      </React.Fragment>
    )
  }
}

MyPage.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  searchName: PropTypes.string,
}

export default MyPage
