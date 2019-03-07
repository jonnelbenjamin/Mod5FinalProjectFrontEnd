import React from 'react'
import {fetchingOrganizations} from '../Redux/actions'
import { connect } from 'react-redux'
import OrgInfo from '../Components/OrgInfo'

class Organizations extends React.Component {

  componentDidMount(){
    this.props.fetchingOrganizations()
  }

  render(){
    return(
      <div className="orgCards">

    {this.props.organizations.map(organization =>


        <OrgInfo
        image={organization.image}
        id={organization.id}
        name={organization.name}
        description={organization.description}
        financialNeed={organization.financial_need}
        />

    )}
    </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    organizations: state.organizations,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingOrganizations: () => {dispatch(fetchingOrganizations())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Organizations);
