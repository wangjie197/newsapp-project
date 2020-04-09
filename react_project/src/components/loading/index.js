import React,{Component} from "react";
import styles from './loading.module.css'

//组件
// export default class Loading extends Component{
//     render() {
//         return(
//             <div className={styles.spinner}>
//                 <div className={styles.rect1}></div>
//                 <div className={styles.rect2}></div>
//                 <div className={styles.rect3}></div>
//                 <div className={styles.rect4}></div>
//                 <div className={styles.rect5}></div>
//             </div>
//         )
//     }
// }

//函数式组件
let Loading=()=>{
    return(
        <div className={styles.spinner}>
            <div className={styles.rect1}></div>
            <div className={styles.rect2}></div>
            <div className={styles.rect3}></div>
            <div className={styles.rect4}></div>
            <div className={styles.rect5}></div>
        </div>
    )
}
export default Loading