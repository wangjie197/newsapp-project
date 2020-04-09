import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class Nopage extends Component{
    render() {
        return(
            <div style={{marginTop:"50px"}}>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <Link to='/home' style={{color:'red',fontSize:"20px"}}>回到首页</Link>
            </div>
        )
    }
}