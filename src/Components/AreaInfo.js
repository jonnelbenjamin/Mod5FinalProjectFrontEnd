import React from 'react'
import {fetchingDisasters, fetchingLocations, AddingToFollowOrganization, AddingToFollowLocation, deletingFromFollowedLocations, givingToOrganization} from '../Redux/actions'
import { connect } from 'react-redux'
import {Modal, Header} from 'semantic-ui-react'



class AreaInfo extends React.Component {

  state = {
    areaInfo: {},
    locationInfo: {},
    orgInfo: {},
    amount: ""

  }

  findAreaInfo = () => {
    let locationName = this.props.selectedPlace.name
    this.props.disasters.find((disaster) => {
      if (disaster.location.name === locationName) {
        this.setState({
          areaInfo: disaster,
          locationInfo: disaster.location,
          orgInfo: disaster.organizations[0]
        })
      }
    })
  }

  followOrganizations = (idOrg) => {
    // let userId = this.props.currentUser.id
    // Need to fix this problem above as is found on MyOrgs.js
    let userId = 1
    let orgId = idOrg

    this.props.addingToFollowOrganization(userId, orgId)

    console.log(userId)
    console.log(orgId)
  }

  followLocations = (locationId) => {
    // userId needs a fix as referenced in #followOrganizations function above
    let userId = 1
    this.props.addingToFollowLocation(userId, locationId)
  }

  componentDidMount(){
    this.props.fetchingDisasters()
    this.props.fetchingLocations()
    this.findAreaInfo()
    }

  unfollowLocation = (locationId) => {
    this.props.deletingFromFollowedLocations(locationId)
  }

  changeAmount = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitPayment = () => {
    let amount = this.state.amount
    let orgId = this.state.orgInfo.id
    console.log('hit submit')
    this.props.givingToOrganization(amount, orgId)
    let newAmount = parseInt(document.getElementById('financialNeed').innerText.split('$')[1]) - amount
    document.getElementById('financialNeed').innerText = `Financial Need: $${newAmount}`


  }

  render(){
    return (
      <div>
      <h1>{this.state.areaInfo.active == false ? this.state.areaInfo.description + " hit the area" : "Warning: " + this.state.areaInfo.description + " in the area"}</h1>
      <h2>Location Information:</h2>
      <h3>Name: {this.state.locationInfo.name} <button onClick={() => this.followLocations(this.state.locationInfo.id)}>Follow</button>
      <button onClick={() => this.unfollowLocation(this.state.locationInfo.id)}>Unfollow</button>
      <button>Go</button></h3>
      <h3>Country GDP: ${this.state.locationInfo.country_gdp}</h3>
      <h3>Description: {this.state.locationInfo.description}</h3>
      <h2>Organizations Information</h2>
      <h3>Name: {this.state.orgInfo.name} <button onClick={() => this.followOrganizations(this.state.orgInfo.id)}>Follow</button></h3>
      <h3 id="financialNeed">Financial Need: ${this.state.orgInfo.financial_need}</h3>
      <Modal trigger={<button>Give</button>} centered={false} closeIcon={true}>
      <Modal.Header>How Much Would You Like To Give?</Modal.Header>
      <Modal.Content>
      <Modal.Header>Your donation is tax-deductible</Modal.Header>

      <div class="fields">
    <div class="seven wide field">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxlength="16" placeholder="Card #"/>
    </div>
    <div class="three wide field">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC"/>
    </div>
      <div class="six wide field">
      <label>Expiration</label>
      <div class="two fields">
        <div class="field">
          <select class="ui fluid search dropdown" name="card[expire-month]">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div class="field">
          <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year" id="givingAmount"/>
        </div>
      </div>
    </div>
    </div>
      <div class="ui segment">
      <input type="text" name="amount" placeholder="Amount" onChange={this.changeAmount}/>
  </div>
  <div class="ui button" tabindex="0" onClick={this.submitPayment}>Submit Payment</div>
      </Modal.Content>
      </Modal>
      <h3>Description: {this.state.orgInfo.description}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    disasters: state.disasters,
    locations: state.locations,
    currentUser: state.currentUser,
    followOrganizations: state.AddingToFollowOrganization,
    followLocations: state.AddingToFollowLocation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingDisasters: () => {dispatch(fetchingDisasters())},
    fetchingLocations: () => {dispatch(fetchingLocations())},
    addingToFollowOrganization: (userId, orgId) => {dispatch(AddingToFollowOrganization(userId, orgId))},
    addingToFollowLocation: (userId, locationId) => {dispatch(AddingToFollowLocation(userId, locationId))},
    deletingFromFollowedLocations: (locationId) => {dispatch(deletingFromFollowedLocations(locationId))},
    givingToOrganization: (amount, orgId) => {dispatch(givingToOrganization(amount, orgId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaInfo);
