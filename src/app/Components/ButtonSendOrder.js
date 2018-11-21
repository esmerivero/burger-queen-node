import React, { Component } from 'react';
// import {ConfigFire} from '../firebase/Firebase';


export default class ButtonLogout extends Component{
    constructor(props){
        super(props);

        this.handleSendOrder = this.handleSendOrder.bind(this);
    }

    handleSendOrder(){
        // ConfigFire.firestore().collection("burgerqueen").doc("pedidos").collection("5011218")
        // .add({
        //     name: "Los Angeles",
        //     state: "CA",
        //     country: "USA"
        // })
        // .then(function() {
        //     console.log("Document successfully written!");
        // })
        // .catch(function(error) {
        //     console.error("Error writing document: ", error);
        // });
        console.log(this.props.order);
    }
    render(){
        return(
            <button type="button" className="btn btn-warning justify-content-center" onClick={this.handleSendOrder}>Enviar a cocina</button>
        );
    }
}