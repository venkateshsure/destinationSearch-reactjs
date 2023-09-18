// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    input: '',
  }

  onChangeEvent = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input} = this.state

    const {destinationsList} = this.props
    const searchedResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(input.toLowerCase()),
    )
    return (
      <div className="cg-con">
        <h1>Destination Search</h1>
        <input type="search" onChange={this.onChangeEvent} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul className="ul-con">
          {searchedResults.map(each => (
            <DestinationItem each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
