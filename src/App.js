import React from 'react';
import GraphWrapperComponent from './GraphWrapperComponent'
import PieGraphComponent from './PieGraphComponent'
import TableComponent from './TableComponent'

function App() {
  return (
    <div class="col-md-12">

      {/* <div class="row">
        <div class="col-md-12">
            <TitleComponent name={'Casos Confirmados'}/>
        </div>
      </div> */}
      <div class="row">
        <div class="col-md-6">
            <GraphWrapperComponent />
        </div>
        <div class="col-md-6">
            <PieGraphComponent />
        </div>
      </div>
      <hr></hr>
      <div class="row">
        <div class="col-md-12">
            <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
