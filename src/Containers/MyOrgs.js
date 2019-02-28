import React from 'react'
import { connect } from 'react-redux'
import OrgInfo from '../Components/OrgInfo'
import {fetchingMyOrganizations} from '../Redux/actions'

class MyOrgs extends React.Component {

  componentDidMount() {
    let userId = this.props.currentUser.id
    this.props.fetchingMyOrganizations(userId)
  }
  render() {
    return (
      <div>
        {this.props.followedOrganizations.map(organization =>
          <OrgInfo
          id={organization.organizationId}
          name={organization.organizationName}
          description={organization.organizationDescription}
          financialNeed={organization.organizationFinancialNeed}
          />)
        }
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    followedOrganizations: state.myOrganization,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingMyOrganizations: (userId) => {dispatch(fetchingMyOrganizations(userId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrgs);
