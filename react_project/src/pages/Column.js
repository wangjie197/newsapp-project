import  React,{Component} from 'react'
import Cell from "../components/cell";
import '../components/cell/style.module.css'
import UcSwiper from "../components/uc-swiper";
import UcButton from "../components/uc-button";

export default class Column  extends Component{
    state={
        column:[]
    }
    async componentDidMount() {
        let res=await React.axios({
            url:'/api/goods/column',
            params:{_page:1,_limit:5}
        })
        // console.log(res.data.data)
        this.setState({column:res.data.data})
    }

    render() {
        let {column}=this.state
        return(
            <div className="column" style={{marginTop:'0.5rem'}}>
                {column.map(item=>(
                    <Cell
                        key={item._id}
                        data={item}
                        to={{pathname:'/detail',apiname:'column'}}
                    >
                        <UcButton style={{float:'right'}} size="mini" clickHandler={this.show}>+</UcButton>
                    </Cell>
                ))}

            </div>
        )
    }
}
