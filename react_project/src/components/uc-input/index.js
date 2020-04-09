import React,{Component} from "react";
import styles from './uc-input.module.css'
import propTypes from 'prop-types'


export default function UcInput({type,model,style,label,multi}) {
    //标题纯渲染
    let renderSpan=(label)=>{
        return label ? <span>{label}</span> :null
    }
    //单行输入框渲染
    let renderInput=()=>{
        let inputEle=null
        //非受控元素
        if(!model){
            inputEle=(
                <div className={styles.ucInput} style={style}>
                    <input type={type} defaultValue="" style={{paddingLeft: label ? '1.24rem' : '0.24rem'}}/>
                    {renderSpan(label)}
                </div>
            )
            return inputEle
        }
        //受控元素
        let {name,value,onChange} =model

        inputEle=(
            <div className={styles.ucInput} style={style}>
                <input type={type}
                       value={value}
                       name={name}
                       onChange={onChange}
                       style={{paddingLeft: label ? '1.24rem' : '0.24rem'}}/>
                {renderSpan(label)}
            </div>
        )
        return inputEle

    }
    //多行文本输入框渲染
    let renderTextarea=()=>{
        let multiEle=mull
        //非受控元素
        if(!model){
            multiEle=(
                <div>
                    {this.renderSpan(label)}
                    <textarea></textarea>
                </div>
            )
            return multiEle
        }
        //受控元素
        let {name,value,onChange} =model

        multiEle=(
            <div>
                {this.renderSpan(label)}
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                ></textarea>
            </div>
        )

        return  multiEle
    }
    return multi ? renderTextarea() : renderInput()



}
UcInput.defaultProps={
    type:"text",
    model:null,
    multi:false,
    label:'',
    style:{}
}
UcInput.propTypes={
    type:propTypes.string,
    model:propTypes.shape({
        name:propTypes.string.isRequired,
        value:propTypes.string.isRequired,
        onChange:propTypes.func.isRequired
    }),
    multi: propTypes.bool,
    label: propTypes.string,
    style: propTypes.object
}
// export default class UcInput extends Component{
//     //单行文本  多行文本
//     /*
// * type   类型         text
// * model  双向绑定模式  null  |   {value,name,onChange}
// * multi  多行输入     false
// * label  标题         ''
// * style  行间样式     {}
// * */
//     static defaultProps={
//         type:"text",
//         model:null,
//         multi:false,
//         label:'',
//         style:{}
//     }
//     static propTypes={
//         type:propTypes.string,
//         model:propTypes.shape({
//             name:propTypes.string.isRequired,
//             value:propTypes.string.isRequired,
//             onChange:propTypes.func.isRequired
//         }),
//         multi: propTypes.bool,
//         label: propTypes.string,
//         style: propTypes.object
//     }
//     //标题纯渲染
//     renderSpan=(label)=>{
//         return label ? <span>{label}</span> :null
//     }
//     //单行输入框渲染
//     renderInput=()=>{
//        let {type,model,style,label}=this.props
//         let inputEle=null
//         //非受控元素
//         if(!model){
//             inputEle=(
//                 <div className={styles.ucInput} style={style}>
//                     <input type={type} defaultValue="" style={{paddingLeft: label ? '1.24rem' : '0.24rem'}}/>
//                     {this.renderSpan(label)}
//                 </div>
//             )
//             return inputEle
//         }
//         //受控元素
//         let {model:{name,value,onChange}} =this.props
//
//             inputEle=(
//                 <div className={styles.ucInput} style={style}>
//                     <input type={type}
//                            value={value}
//                            name={name}
//                            onChange={onChange}
//                            style={{paddingLeft: label ? '1.24rem' : '0.24rem'}}/>
//                     {this.renderSpan(label)}
//                 </div>
//             )
//             return inputEle
//
//     }
//     //多行文本输入框渲染
//     renderTextarea=()=>{
//         let {model,label} =this.props
//         let multiEle=mull
//         //非受控元素
//         if(!model){
//             multiEle=(
//                 <div>
//                     {this.renderSpan(label)}
//                     <textarea></textarea>
//                 </div>
//             )
//             return multiEle
//         }
//         //受控元素
//         let {model:{name,value,onChange}} =this.props
//
//             multiEle=(
//                 <div>
//                     {this.renderSpan(label)}
//                     <textarea
//                         name={name}
//                         value={value}
//                         onChange={onChange}
//                     ></textarea>
//                 </div>
//             )
//
//         return  multiEle
//     }
//
//
//     render() {
//         let {multi} =this.props
//         return multi ? this.renderTextarea() : this.renderInput()
//     }
// }