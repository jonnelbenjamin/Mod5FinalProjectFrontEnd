import React from 'react'
import { Card, Button } from 'semantic-ui-react'

class OrgInfo extends React.Component {
  render(){
    return(
      <div>
        <Card
          header={this.props.name}
          meta={"Financial Need: $" + this.props.financialNeed}
          description={this.props.description}
          id={this.props.id}
          centered
          column={2}
          raised
          >


        </Card>
      </div>

    )
  }
  }


export default OrgInfo;
