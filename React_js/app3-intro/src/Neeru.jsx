import { Component } from "react";

export class Neeru extends Component{
    
    constructor(){
        super()
        this.state={
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: 92998 - 3874,
                geo: {
                    lat: -37.3159,
                    lng: 81.1496
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        }
    }

    render(){
        return <div>
            <h2>{this.state.id}</h2>
            <h2>{this.state.name}</h2>
            <h2>{this.state.username}</h2>
            <h2>{this.state.email}</h2>
            <h2>{this.state.address.street}</h2>
            <h2>{this.state.address.suite}</h2>
            <h2>{this.state.address.city}</h2>
            <h2>{this.state.address.zipcode}</h2>
            <h2>{this.state.address.geo.lat}</h2>
            <h2>{this.state.address.geo.lng}</h2>
            <h2>{this.state.phone}</h2>
            <h2>{this.state.website.name}</h2>
            <h2>{this.state.company.catchPhrase}</h2>
            <h2>{this.state.company.bs}</h2>
        </div>
    }
}