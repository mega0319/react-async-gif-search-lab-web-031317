import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = { gifs: []}
  }

  results(term){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&limit=3`, {mode: "cors"})
    .then( (res) => res.json() )
    .then( (data) => this.setState({
      gifs: data.data
    }))

  }

  render(){
    console.log(this.state.gifs)
    return (
      <div className="row">
        <GifSearch result={this.results.bind(this)} />
        {this.state.gifs.length > 0 ? <GifList list={this.state.gifs}/> : null }
      </div>
    )
  }
}
