import React from 'react';
import {Menu, Divider} from 'semantic-ui-react';

class Navbar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left'
      className='side-nav'>
      <Divider/>
      </Menu>
    )
  }
}

export default Navbar;
