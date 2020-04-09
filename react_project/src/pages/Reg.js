import React,{Component} from "react";
import '../assets/css/reg.css'
import UcNav from "../components/uc-nav";
import UcButton from "../components/uc-button";
import UcInput from "../components/uc-input";
import {Link} from "react-router-dom";

export default class Reg extends Component{
    state={
        username:'',
        password:'',
        errorMess:'',
    }

    changeIpt=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })

    }
    reg=async ()=>{
        let {username,password}=this.state
        let fromData=new FormData()
        fromData.append('username',username)
        fromData.append('password',password)

        if(this.file.files.length>0){
            fromData.append('icon',this.file.files[0])
        }
        let res= await axios({
            url:'/api/reg',
            method:'post',
            data:fromData
        })
        // console.log(res)
        if(res.data.err===0){
            this.props.history.push('/login')
        }else {
            this.setState({errorMess:res.data.msg})
        }
    }
    render() {
        let {username,password,errorMess}=this.state
        return(
            <div className="content">
                <UcNav borderWidth={0} arrow="gray" bgColor="transparent"/>
                <h1 onClick={()=>this.file.click()}></h1>
                <input type="file" ref={el=>this.file=el} style={{visibility: "hidden"}}/>
                <div className="login-box">
                    <p className="lsolid"></p>
                    <div className="login">
                        <Link to='/login'>登录</Link>
                        <span></span>
                        <Link to='/reg'>注册</Link>
                    </div>
                    <p className="rsolid"></p>
                </div>
                <ul>
                    <li className="lifirst">
                        <UcInput type="text" label='用户' model={{name:'username',value:username,onChange:this.changeIpt}}/>
                    </li>
                    <li>
                        <UcInput type='password' label={'密码'} model={{name:'password',value:password,onChange:this.changeIpt}}/>
                    </li>
                    {errorMess}
                </ul>
                <div className="footbox">
                    <UcButton style={{marginTop:'0.5rem'}} clickHandler={this.reg}>注册</UcButton>
                </div>
            </div>
        )
    }
}