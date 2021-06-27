import React from 'react';
import Item from '../item/item'
import ServiceGame from '../../services/service';

export default class ListItem extends React.Component {

    componentDidMount() {
    const service = new ServiceGame;
     console.log(service.getResource('http://localhost:3000/games'))
    }
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