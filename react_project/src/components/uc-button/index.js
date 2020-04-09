import React,{Component} from "react";
import styles from './style.module.css'
import propTypes from 'prop-types'


//函数式组件
const UcButton=({clickHandler,type,children,style,size})=>(
    <button
        type="button"
        className={styles['login-button'] + ' ' + styles[`login-button--${size}`]}
        style={style}
        onClick={(ev)=>clickHandler(ev)}
    >
        {children ? children :"按钮"}
    </button>
)
UcButton.defaultProps={
    clickHandler:()=>{},
    size:'default',
    style:{}
}
UcButton.propTypes={
    clickHandler:propTypes.func,
    type:propTypes.string,
    style:propTypes.object
}
export default UcButton
// export default class UcButton extends Component{
//     //类型  回调  样式
//     static defaultProps={
//         clickHandler:()=>{},
//         size:'default',
//         style:{}
//     }
//     static propTypes={
//         clickHandler:propTypes.func,
//         type:propTypes.string,
//         style:propTypes.object
//     }
//     render() {
//         let {clickHandler,type,children,style,size} =this.props
//         return(
//             <button
//                 type="button"
//                 className={styles['login-button'] + ' ' + styles[`login-button--${size}`]}
//                 style={style}
//                 onClick={(ev)=>clickHandler(ev)}
//             >
//                 {children ? children :"按钮"}
//             </button>
//         )
//     }
//
// }