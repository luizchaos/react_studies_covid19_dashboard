import React from 'react';
import { ResponsivePie } from '@nivo/pie'


export default class GraphWrapperComponent extends React.Component{
    state = {lists: [], loading: true}
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        // config.headers['Authorization'] = 'Token '+ localStorage.getItem('token')

        var url = 'http://localhost:8000/corona/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        const options = data.map(function(row) {
            return { value : row.cases, label : row.state, id: row.uf }
         })
        this.setState({lists: options, loading: false})
    }
    

    render(){
        return (
            <div className={'col-md-12 gr-div'} style={{height: 400}}>
                <h5>Casos de Corona por Estado</h5>
                <hr></hr>
                <ResponsivePie
                    data={this.state.lists}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'nivo' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    
                />
            </div>       
        )
        
    }
}