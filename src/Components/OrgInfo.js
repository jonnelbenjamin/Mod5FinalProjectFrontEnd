import React from 'react'
import { connect } from 'react-redux'
import {AddingToFollowOrganization, deletingFromFollowedOrganizations} from '../Redux/actions'

class OrgInfo extends React.Component {


  followOrganizations = (idOrg) => {
    // let userId = this.props.currentUser.id
    // Need to fix this problem above as is found on MyOrgs.js
    let userId = 1
    let orgId = idOrg

    this.props.addingToFollowOrganization(userId, orgId)

    console.log(userId)
    console.log(orgId)
  }

  handleDelete = (e, orgId) => {
    this.props.deletingFromFollowedOrganizations(orgId)

    e.target.parentElement.parentElement.parentElement.innerHTML = ""
  }

  render(){
    return(
      <div className="cardInfo">
        <div
          id={this.props.id}
          >
          <img src={this.props.image}></img>
          <div className="cardStuff">
          <h1 className="orgHeaderName">{this.props.name}</h1>
          <h4>{this.props.description}</h4>
          <h3>{"Financial Need: $" + this.props.financialNeed}</h3>
          <div class="ui buttons">
          <button className="ui green button" onClick={() => this.followOrganizations(this.props.idOrg)}>Follow</button>
          <div class="or"></div>
          <button className="ui toggle button" onClick={(e) => this.handleDelete(e, this.props.idOrg)}>Unfollow</button>
          </div>
        </div>
        </div>
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
