import React,{Component} from  'react'
import { Link,Route} from 'react-router-dom'
import Detail from './Detail'




export default class App extends Component{
    constructor(props){
        super();
        this.state={
            arr:[1,2,3,4]

        }
        console.log(props)

    }
    render(){
        let {arr}=this.state;
        return(
            <div>
            <div className="page">
                {
                    arr.map((item,index)=>{
                        return (
                            <Link  to='/Detail' className='One-item' key={index} onClick={this.goDetail.bind(this,item,index)}>{item}</Link>
                        )
                    })
                }

            
            </div>
           
          



            </div>
        )
    }
    goDetail(item,index){
       // this.props.history.push({pathName:'/Detail'})
        console.log(1);
        
    }
}