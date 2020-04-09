import  React,{Component} from 'react'
import '../assets/css/index.css'
import '../utils/font'
import Home from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Loading from "../components/loading";

import {Switch,Route,Redirect} from 'react-router-dom'
import User from "../pages/User";
import Nopage from "../pages/Nopage";

import pubsub from 'pubsub-js'
export default class Default extends Component{
    state={
        bNav:false,
        bFoot:false,
        bLoading:false
    }
    constructor(props) {
        super(props);
        pubsub.subscribe('UPDATE_LOADING',(msg,data)=>{
            this.setState({bLoading:data})
        })
    }

    static getDerivedStateFromProps(nextProps,nextState){
        let path = nextProps.location.pathname;

        if (/home|follow|column/.test(path)){
            return {bNav:true,bFoot:true}
        }
        if (/detail|login|reg/.test(path)){
            return {bNav:false,bFoot:false}
        }
        if (/user/.test(path)){
            return {bNav:false,bFoot:true}
        }

    }

    render() {
        let {bNav,bFoot,bLoading} = this.state;
        return(
            <div className='default'>
                {bNav && <Header/>}
                {bLoading && <Loading/>}
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/follow' component={Follow}/>
                    <Route path='/column' component={Column}/>
                    <Route path='/detail/:_id' component={Detail}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/reg' component={Reg}/>
                    <Route path='/user' component={User}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={Nopage}/>
                </Switch>
                {bFoot ? <Footer/> : null}

            </div>
        )
    }
}