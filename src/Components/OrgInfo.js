import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {AddingToFollowOrganization, deletingFromFollowedOrganizations} from '../Redux/actions'

class OrgInfo extends React.Component {



  followOrganizations = (idOrg) => {
    let userId = this.props.currentUser.id
    let orgId = idOrg

    this.props.addingToFollowOrganization(userId, orgId)

    console.log(userId)
    console.log(orgId)
  }

  handleDelete = (orgId) => {
    this.props.deletingFromFollowedOrganizations(orgId)
  }

  render(){
    return(
      <div>
        <Card
          id={this.props.id}
          centered
          column={2}
          raised
          >
          <h1>{this.props.name}</h1>
          <h2>{this.props.description}</h2>
          <h3>{"Financial Need: $" + this.props.financialNeed}</h3>
          <div class="ui buttons">
          <button className="ui green button" onClick={() => this.followOrganizations(this.props.idOrg)}>Follow</button>
          <div class="or"></div>
          <button className="ui toggle button" onClick={() => this.handleDelete(this.props.idOrg)}>Unfollow</button>
          </div>
        </Card>
      </div>

    )
  }
  }

  const mapStateToProps = (state,ownProps) => {
    return {
      followOrganizations: state.AddingToFollowOrganization,
      currentUser: state.currentUser,
      idOrg: ownProps.id
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      addingToFollowOrganization: (userId, orgId) => {dispatch(AddingToFollowOrganization(userId, orgId))},
      deletingFromFollowedOrganizations: (orgId) => {dispatch(deletingFromFollowedOrganizations(orgId))}
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(OrgInfo);
