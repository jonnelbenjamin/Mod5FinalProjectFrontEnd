import React from 'react'
import { connect } from 'react-redux'
import OrgInfo from '../Components/OrgInfo'
import {fetchingMyOrganizations} from '../Redux/actions'
import {Divider, Icon, Header} from 'semantic-ui-react'

class MyOrgs extends React.Component {

  componentDidMount() {

    // let userId = this.props.currentUser.user.id
    // the above code for userId breaks for some reason! Fix it tomorrow! Also found in AreaInfo.js
    this.props.fetchingMyOrganizations(1)

  }
  render() {
    return (
      <div>
      <React.Fragment>
      <Divider horizontal>
      <Header as='h4'>
      <Icon name='tag' />
      My Organizations
      </Header>
        </Divider>
        <div className="orgCards">

        {this.props.followedOrganizations.map(organization =>
          <OrgInfo
          image={organization.organizationImage}
          id={organization.organizationId}
          name={organization.organizationName}
          description={organization.organizationDescription}
          financialNeed={organization.organizationFinancialNeed}
          />)
        }
        </div>
        </React.Fragment>
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
