import React,{Component} from "react";
import $ from 'jquery'
import Swipe from './assets/js/swipe'
import styles from './style.module.css'

import {withRouter} from 'react-router-dom'

import propTypes from 'prop-types'
class UcSwiper extends Component{

    //默认值和类型约定
    static defaultProps={}
    static propTypes={
        data:propTypes.arrayOf(propTypes.shape({
            _id:propTypes.string.isRequired,
            banner:propTypes.string.isRequired,
            title:propTypes.string,
            sub_title:propTypes.string
        })),
        to:propTypes.shape({
            apiname:propTypes.string.isRequired,
            pathname:propTypes.string.isRequired
        })
    }
    to=(_id)=>{
        if(!this.props.to) return; ///后续工作不执行

        let {history,to:{apiname,pathname}} =this.props;
        history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`});
    }


    componentDidUpdate() {
       new Swipe($(`.${styles.banner}`)[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
                $('.banner ol li').removeClass('active');
                $('.banner ol li').eq(index).addClass('active');
            }
        })
    }

    render() {
        let {data}=this.props    //[{banner:'',title:'',sub_title,_id:},{}]
        return(
            <div className={styles.banner}>
                <ul className={styles.clearfix}>
                    {
                        data.map(item=>(
                            <li key={item._id} onClick={()=>this.to(item._id)}>
                                <img src={item.banner} alt=""/>
                                <div className={styles['text-box']}>
                                    <h2>{item.title}</h2>
                                    <p>{item.sub_title}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default withRouter(UcSwiper)