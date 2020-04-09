import React,{Component} from "react";
import {withRouter} from 'react-router-dom'
import styles from './style.module.css'
import propTypes from "prop-types"

//函数式组件
function Cell({index,data,children,to,history}) {
    let to1=(_id)=>{
        if (!to) return;
        let {pathname,apiname}=to;
        history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`})
    }
    return(
        <div className={styles['uc-cell']} onClick={()=>to1(data._id)}>
            {
                children
            }
            <h2>
                {index+1 ? <span>{index+1+"."}</span> : null}
                {data.title}
            </h2>
            <p>{data.des}</p>
        </div>
    )
}
Cell.defaultProps={
    index:undefined,
    to:null
}
Cell.propTypes={
    index:propTypes.number,
    data:propTypes.shape({
        _id:propTypes.string.isRequired,
        title:propTypes.string,
        des:propTypes.string
    }),
    to:propTypes.shape({
        apiname:propTypes.string.isRequired,
        pathname:propTypes.string.isRequired
    })
}

//Cell组件
// class Cell extends Component{
//     /*
// * index     number    1
// * data      {_id,title,des}
// * to        {pathname:'',apiname:''}
// * */
//     static defaultProps={
//         index:undefined,
//         to:null
//     }
//     static propTypes={
//         index:propTypes.number,
//         data:propTypes.shape({
//             _id:propTypes.string.isRequired,
//             title:propTypes.string,
//             des:propTypes.string
//         }),
//         to:propTypes.shape({
//             apiname:propTypes.string.isRequired,
//             pathname:propTypes.string.isRequired
//         })
//     }
//     to=(_id)=>{
//         if (!this.props.to) return;
//         let {history,to:{pathname,apiname}}=this.props;
//         history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`})
//     }
//     render() {
//         let {index,data,children} =this.props
//         return(
//             <div className={styles['uc-cell']} onClick={()=>this.to(data._id)}>
//                 {
//                     children
//                 }
//                 <h2>
//                     {index+1 ? <span>{index+1+"."}</span> : null}
//                     {data.title}
//                 </h2>
//                 <p>{data.des}</p>
//             </div>
//         )
//     }
// }
export default withRouter(Cell)