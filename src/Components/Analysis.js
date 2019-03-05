import React from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';



class Analysis extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        pieChartData:[],
        barChartData: [],
        lineChartData: []
      }
    }

    static defaultProps = {
       displayTitle:true,
       displayLegend: true,
       legendPosition:'right',
       location:'City'
     }

     componentWillMount(){
       this.getPieData();
       this.getBarData();
       this.getLineData();
     }

     getPieData(){
       // Ajax calls here
       this.setState({
         pieChartData:{
           labels: ['Iran', 'China', 'India', 'Japan', 'Philippines', 'Senegal', 'Venezuela', 'Mexico', 'Indonesia', 'Somalia', 'Yemen', 'Mozambique', 'Kazakhstan', 'Papua New Guinea', 'Libya'],
           datasets:[
             {
               label:'Country GDP',
               data:[
                 439510000000,
                 12240000000000,
                 2597000000000,
                 4872000000000,
                 313600000000,
                 16370000000,
                 482400000000,
                 1150000000000,
                 1016000000000,
                 7369000000,
                 18210000000,
                 12330000000,
                 159400000000,
                 21090000000,
                 50980000000
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
               ]}]}});}

      getBarData(){
        this.setState({
          barChartData:{
            labels: ['Oxfam International', 'American Red Cross', 'USAID', 'Direct Relief', 'International Rescue Committee', "Samaritan's Purse", 'World Food Programme'],
            datasets:[
              {
                label:'Financial Need',
                data:[
                  465438293,
                  675295265,
                  584928572,
                  456827590,
                  527412852,
                  554579236,
                  393827646
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]}]}});
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
               data={this.state.pieChartData}
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
           data={this.state.barChartData}
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

export default Analysis;
