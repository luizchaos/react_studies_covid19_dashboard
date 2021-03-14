import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});

export default class GraphWrapperComponent extends React.Component{
    state = {data: [], loading: true}
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
        this.setState({data: data, loading: false})
    }
     columns = [
         {
             name: 'UF',
             id: 'id',
             selector: 'uf',
             sortable: true
         },
         {
            name: 'State',
            id: 'id',
            selector: 'state',
            sortable: true
        },
        {
            name: 'Casos Confirmados',
            id: 'id',
            selector: 'cases',
            sortable: true
        },
        {
            name: 'Mortes',
            id: 'id',
            selector: 'deaths',
            sortable: true
        }
     ]

    render(){
        return(
            <div className={'col-md-12 gr-div'}>
                <DataTable
                    title="Dados por Estado"
                    columns={this.columns}
                    data={this.state.data}
                    striped={true}
                    pagination={true}
                />
            </div>
        )
    }
}