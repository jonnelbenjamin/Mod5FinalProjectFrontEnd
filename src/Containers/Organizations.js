import React from 'react'
import {fetchingOrganizations} from '../Redux/actions'
import { connect } from 'react-redux'
import OrgInfo from '../Components/OrgInfo'
import {Grid} from 'semantic-ui-react'

class Organizations extends React.Component {

  componentDidMount(){
    this.props.fetchingOrganizations()
  }

  render(){
    return(
      <div>
        <Grid
          centered
          >
    {this.props.organizations.map(organization =>

      <Grid.Column
        width={4}
        relaxed columns={6}
        >
        <OrgInfo
        id={organization.id}
        name={organization.name}
        description={organization.description}
        financialNeed={organization.financial_need}
        />
    </Grid.Column>
    )}
    </Grid>
    </div>
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
