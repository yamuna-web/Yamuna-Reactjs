
import { Component } from "react";
import TitleDisplay from "./TitleDisplay";

export default class Title extends Component{
    constructor(){
        super()
       
    }
    render(){
        const title="bhavya"
        return<div>
<TitleDisplay ti={title}/>
        </div>
    }
}
