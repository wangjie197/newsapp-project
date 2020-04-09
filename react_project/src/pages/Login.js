import React,{Component} from "react";
import styles from '../assets/css/login.module.css'
import UcNav from "../components/uc-nav";
import UcButton from "../components/uc-button";
import UcInput from "../components/uc-input";
import qs from 'qs'

import {Link} from "react-router-dom";

export default class Login extends Component{
    state={
        username:'',
        password:'',
        messErr:''
    }

    changeIpt=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })

    }
    login=async ()=>{

        let params = new URLSearchParams();

        params.append("username",this.state.username);
        params.append("password",this.state.password);

        let res=await axios({url:'/api/login',method:'post',data:params})
        if(res.data.err===0){
            //更新同步localStrage
            window.localStorage.setItem("user",qs.stringify(res.data))
            //跳转到之前

            let path=qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path

            if(path && !path.includes('/login')){
                this.props.history.push({
                    pathname:qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path
                })
            }else {
                this.props.history.push('/user')
            }


        }else {
            this.setState({messErr:res.data.msg})
        }
    }

    render() {
        let {username,password,messErr}=this.state
        return(
            <div className={styles.content}>
                <UcNav borderWidth={0} arrow='gray' bgColor='transparent'/>
                <h1></h1>
                <div className={styles.loginBox}>
                    <p className={styles.lsolid}></p>
                    <div className={styles.login}>
                        <Link to='/login'>登录</Link>
                        <span></span>
                        <Link to='/reg'>注册</Link>
                    </div>
                    <p className={styles.rsolid}></p>
                </div>
                <ul>
                        <UcInput type="text" label='用户' model={{name:'username',value:username,onChange:this.changeIpt}}/>
                        <UcInput type='password' label='密码' model={{name:'password',value:password,onChange:this.changeIpt}}/>
                    {messErr}
                </ul>

                <div className={styles.footbox}>
                    <UcButton style={{marginTop:'0.5rem'}} clickHandler={this.login}>登录</UcButton>
                <a className={styles.tishi}>忘记密码？</a>
                </div>
            </div>
        )
    }
}