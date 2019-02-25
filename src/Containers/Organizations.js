import React from 'react'
import {fetchingOrganizations} from '../Redux/actions'
import { connect } from 'react-redux'

class Organizations extends React.Component {

  componentDidMount(){
    this.props.fetchingOrganizations()
  }

  render(){
    return(
    <div>afhia</div>
  )
  }
}

const mapStateToProps = state => {
  return {
    organizations: state.organizations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingOrganizations: () => {dispatch(fetchingOrganizations())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Organizations);
