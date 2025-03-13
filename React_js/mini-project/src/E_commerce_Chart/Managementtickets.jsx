import { Component } from "react";
import axios from "axios"

export default class Ecommerse extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                name: "",
                price: "",
                quantity: "",
                totalprice: ""
            },
            Ecart: [],
            editindex: null,
        }
    }


    getEcartFromServer = () => {
        axios.get("http://localhost:3000/Ecart").then((response) => {
            this.setState({ Ecart: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Ecart", this.state.person).then(() => {
            this.getEcartFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Ecart/" + val.id).then(() => {
            this.getEcartFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Ecart/" + this.state.Ecart[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getEcartFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
clearForm = () => {
    this.setState({
        person: {
            id: "",
            name: "",
            price: "",
            quantity: "",
            totalprice: ""
        }
    })}
render() {
    return <div>
        <form >
            <label htmlFor="">id</label>
            <input type="text"
                name="id"
                value={this.state.person.id}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">name:</label>
            <input type="text"
                name="name"
                value={this.state.person.name}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">price:</label>
            <input type="text"
                name="price"
                value={this.state.person.price}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">quantity</label>
            <input type="text"
                name="quantity"
                value={this.state.person.quantity}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">totalprice:</label>
            <input type="text"
                name="totalprice"
                value={this.state.person.totalprice}
                onChange={this.handlechange} />

            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                (<button type="button" onClick={this.updateUser}> update user</button>)}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>totalprice</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.Ecart.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                        <td>{val.quantity}</td>
                        <td>{val.totalprice}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
componentDidMount() {
    this.getEcartFromServer();
}
}