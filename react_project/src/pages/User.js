import React,{Component} from 'react';
import styles from  '../assets/css/user.module.css'
export default class User extends Component{
    state={
        user:{}
    }
    async componentDidMount() {
        let res=await axios({
            url:'/api/user'
        })
        this.setState({user:res.data.data})
    }

    logout=()=>{
        window.localStorage.removeItem("user")
        this.props.history.push('/login')
    };

    render(){
        let {user:{nikename,icon,follow,fan}}=this.state
        return (
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2><img style={{height:'50px'}} src={`${this.baseUrl}/${icon}`} alt=""/></h2>
                    <div className={styles["user-box"]}>
                        <a>{nikename}</a>&nbsp;
                        <a onClick={this.logout}>注销</a>
                    </div>
                    <ul className={styles.clear}>
                        <li>
                            <span>{follow}</span>
                            <p>关注</p>
                        </li>
                        <li>
                            <span>{fan}</span>
                            <p className={styles.end}>粉丝</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.docList}>
                    <ul>
                        <li className={styles["gk-text"]}>
                            <i></i>
                            <p>公开博文</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles["mm-text"]}>
                            <i></i>
                            <p>秘密博文</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles["cg-text"]}>
                            <i></i>
                            <p>草稿箱</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles["sc-text"]}>
                            <i></i>
                            <p>收藏夹</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles.my_cz}>
                            <i></i>
                            <p>收藏夹</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}