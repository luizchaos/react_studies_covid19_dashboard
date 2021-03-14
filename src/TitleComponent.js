import React from 'react';

export default function ListComponent(props){
    return(
        <div className={'col-md-12'}>
            <div className={'col-md-12'}>
                <h1>{props.name}</h1>
            </div>
        </div>
        
    )
}