import React from 'react'
import GifListContainer from '../containers/GifListContainer'

export default class GifSearch extends React.Component {
  constructor(){
    super()
    this.state = {
      search: ""
    }
  }

  searchTerm(e){
    let input = e.target.value
    this.setState({
      search: input
    })
  }

  // results(e){
  //   e.preventDefault()
  //   fetch("http://api.giphy.com/v1/gifs/search?q={this.state.search}&api_key=dc6zaTOxFJmzC")
  //   .then( (res) => res.json() )
  //   .then( (data) => console.log(data))
  // }
  handleSubmit(e){
    e.preventDefault()
    this.props.result(this.state.search)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.search} onChange={this.searchTerm.bind(this)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
