import React from 'react'

class InfoWindowInfo extends React.Component {

  hitButton = (e) => {
    e.stopPropagation()
    console.log('hit the button')
  }
  render () {
    return (
      <div>
      <button id="infoWindowButton" onClick={console.log('button component hit')}>Button</button>
      </div>
    )
  }
}
export default InfoWindowInfo;
