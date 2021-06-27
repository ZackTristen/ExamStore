import React from 'react';
import Item from '../item/item'


export default class ListItem extends React.Component {

    
    render() {

        return(
            <div>
            <Item/>
            <Item/>
            <Item/>
            </div>
        )
    }
}