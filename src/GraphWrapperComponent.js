import React from 'react';
import BarGraphComponent from './BarGraphComponent'


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
        this.setState({lists: data, loading: false})
    }
    

    render(){
        return (
            <div className={'col-md-12 gr-div'} style={{height: 400}}>
                <h5>Top 5 Estados por Casos</h5>
                <hr></hr>
                <BarGraphComponent data={this.state.lists.sort(function(a,b){
            return a.cases - b.cases
        }).reverse().slice(0, 5)} chaves={['cases']}/>
            </div>       
        )
        
    }
}