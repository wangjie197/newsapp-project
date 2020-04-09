import React,{Component} from "react";
import styles from './style.module.css'
import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

//函数式组件
let UcNav=({bgColor,arrow,borderWidth,history})=>(
        <div className={styles.nav}
             style={{
                 background:bgColor,
                 borderWidth:borderWidth
             }}
        >
            <div className={styles.arrow}>
                <div
                    className={arrow==='gray' ? styles.gray :styles.default}
                    onClick={()=>history.go(-1)}
                >
                </div>
            </div>
        </div>
    )

UcNav.defaultProps={
    bgColor:'#fff',
    borderWidth:1,
    arrow:"default"
}
UcNav.propTypes={
    bgColor: propTypes.string,
    borderWidth: propTypes.number,
    arrow: propTypes.string
}

//组件
// class UcNav extends Component{
//     static defaultProps={
//         bgColor:'#fff',
//         borderWidth:1,
//         arrow:"default"
//     }
//     static propTypes={
//         bgColor: propTypes.string,
//         borderWidth: propTypes.number,
//         arrow: propTypes.string
//     }
//
//     render() {
//         let {bgColor,arrow,borderWidth,history}=this.props
//         return (
//             <div className={styles.nav}
//                 style={{
//                     background:bgColor,
//                     borderWidth:borderWidth
//                 }}
//             >
//                 <div className={styles.arrow}>
//                     <div
//                         className={arrow==='gray' ? styles.gray :styles.default}
//                         onClick={()=>history.go(-1)}
//                     >
//
//                     </div>
//
//                 </div>
//
//             </div>
//         );
//     }
// }
export default withRouter(UcNav)