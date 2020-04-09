import  React,{Component} from 'react'
import Cell from "../components/cell";
import '../components/cell/style.module.css'
import UcSwiper from "../components/uc-swiper";
import UcButton from "../components/uc-button";

export default class Follow  extends Component{
    state={
        follow:[]
    }
    async componentDidMount() {
        let res=await axios({url:'/api/goods/follow',params:{_page:1,_limit:5}})
        this.setState({follow:res.data.data})
    }

    render() {
        let {follow}=this.state
        return(
            <div className="Follow" style={{marginTop:'0.5rem'}}>
                {follow.map((item,index)=>(
                    <Cell
                        key={item._id}
                        index={index}
                        data={item}
                        to={{pathname:'/detail',apiname:'follow'}}
                    >
                        <UcButton style={{float:'right'}} size="mini" clickHandler={this.show}>+</UcButton>
                    </Cell>
                ))}
            </div>
        )
    }
}
