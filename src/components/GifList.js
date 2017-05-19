import React from 'react'

function GifList(props){

  // componentWillMount(){
  //   props.list.length > 0
  // }

  let images = props.list.map( image =>  (<li> <img src={image.images.fixed_height.url} /> </li>))
  if (images.length === 0){
    return (
      <div>
        <strong>NO RESULTS</strong>
      </div>
    )
  }else{
    return (
      <ul>
        {images}
      </ul>
    )
  }

}

export default GifList
