import React from 'react';
import Items from './Items'

    function Display(props){
        
        const elms = props.items.map(elm => {
            return <Items delete={props.delete} update={props.update} key={elm.id} data={elm} />
        })
        return <div className="item-list-container">{elms}</div>
    }

export default Display