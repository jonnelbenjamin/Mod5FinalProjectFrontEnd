import React from 'react'
import {Divider, Icon, Header} from 'semantic-ui-react'

class MyLocations extends React.Component {
  render(){
    return (
      <div>
      <React.Fragment>
      <Divider horizontal>
      <Header as='h4'>
        <Icon name='globe' />
        My Locations
        </Header>
        </Divider>

        

        </React.Fragment>
        </div>
    )
  }
}
export default MyLocations;
