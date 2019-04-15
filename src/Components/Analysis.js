import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { connect } from 'react-redux';
import {fetchingOrganizations, fetchingLocations} from '../Redux/actions'




class Analysis extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        lineChartData: []
      }
    }

    static defaultProps = {
       displayTitle:true,
       displayLegend: true,
       legendPosition:'right',
       location:'City'
     }

     componentDidMount(){
       this.props.fetchingOrganizations();
       this.props.fetchingLocations();
       this.getLineData();
     }




      getLineData(){
        this.setState({
          lineChartData:{
            labels: ['Iran', 'China', 'India', 'Japan', 'Philippines', 'Senegal', 'Venezuela', 'Mexico', 'Indonesia', 'Somalia', 'Yemen', 'Mozambique', 'Kazakhstan', 'Papua New Guinea', 'Libya'],
            datasets:[
              {
                label:'Donations $',
                data:[
                  43951,
                  12240,
                  25970,
                  48720,
                  31360,
                  16370,
                  48240,
                  1150,
                  10160,
                  7369,
                  18210,
                  12330,
                  15940,
                  2109,
                  5098
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(185, 99, 132, 0.6)',
                  'rgba(235, 9, 162, 0.6)',
                  'rgba(252, 79, 12, 0.6)',
                  'rgba(215, 99, 132, 0.6)',
                  'rgba(155, 99, 199, 0.6)',
                  'rgba(105, 40, 82, 0.6)',
                ]}]}});
      }
render(){
  return(
    <div className="charts">
             <Pie
              id={'chart1'}
              data={{
                labels: this.props.locations.map(location => { return location.name}),
                datasets: [
                  { label:'Financial Need',
                    data: this.props.locations.map(location => { return location.country_gdp}),
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(185, 99, 132, 0.6)',
                      'rgba(235, 9, 162, 0.6)',
                      'rgba(252, 79, 12, 0.6)',
                      'rgba(215, 99, 132, 0.6)',
                      'rgba(155, 99, 199, 0.6)',
                      'rgba(105, 40, 82, 0.6)',

                    ]}
                ]
                }}
               options={{
                 title:{
                   display:this.props.displayTitle,
                   text:'Countries by Gross Domestic Product',
                   fontSize:25
                 },
                 legend:{
                   display:this.props.displayLegend,
                   position:this.props.legendPosition
                 }
               }}
             />

         <Bar
         id={'chart2'}
           data={{
             labels: this.props.organizations.map(org => { return org.name}),
             datasets: [
               { label:'Financial Need',
                 data: this.props.organizations.map(org => { return org.financial_need}),
                 backgroundColor:[
                   'rgba(255, 99, 132, 0.6)',
                   'rgba(54, 162, 235, 0.6)',
                   'rgba(255, 206, 86, 0.6)',
                   'rgba(75, 192, 192, 0.6)',
                   'rgba(153, 102, 255, 0.6)',
                   'rgba(255, 159, 64, 0.6)',
                   'rgba(114, 99, 132, 0.6)'
                 ]}
             ]
             }}
           options={{
             title:{
               display:this.props.displayTitle,
               text:'Organizational Financial Need',
               fontSize:25
             },
             legend:{
               display:this.props.displayLegend,
               position:this.props.legendPosition
             }
           }}
         />

         <Line
         id={'chart3'}
           data={this.state.lineChartData}
           options={{
             title:{
               display:this.props.displayTitle,
               text:'Distribution of Service',
               fontSize:25
             },
             legend:{
               display:this.props.displayLegend,
               position:this.props.legendPosition
             }
           }}
         />

         </div>
)
}
}

const mapStateToProps = (state) => {
  return {
    organizations: state.organizations,
    locations: state.locations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingOrganizations: () => {dispatch(fetchingOrganizations())},
    fetchingLocations: () => {dispatch(fetchingLocations())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Analysis);
