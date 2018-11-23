import React,{Component} from  'react'
import './App.css'

import {BrowserRouter,Route,NavLink,Redirect,Switch } from  'react-router-dom'
import One from './page/One'
import Two from './page/Two'
import Theer from './page/Theer'
import Four from './page/Four'
import NotFind from './page/NotFind'
import Detail from './page/Detail'



export default class App extends Component{
    constructor(){
        super();
        this.state={
            age:18
        }
    }
    render(){
        return(
            <BrowserRouter>
            <div className="App">
            <nav className='item-list'>
                
                    <NavLink  to={{pathname:'/One',state:{ name:'xixi',age:this.state.age}}}className='item' >one </NavLink >
                    <NavLink  to='/Two' className='item'>Two </NavLink >
                    <NavLink  to='/Theer' className='item'>Theer </NavLink >               
                    <NavLink  to='/Four' className='item'>Four </NavLink >
                
            </nav>

            <Switch>
            <Route path='/' exact render={()=>{
               return <Redirect to="/One"/>
            }}></Route>
            <Route path='/One' exact component={One}></Route>
            <Route path='/Two'  exact component={Two}></Route>
            <Route path='/Theer' exact  component={Theer}></Route>
            <Route path='/Four'  exact  component={Four}></Route>
            <Route path='/404' component={NotFind}></Route>
            <Route path='/Detail' component={Detail}   />
            <Route render={()=>{
                        //重定向
                        return <Redirect to="/404"/>
                    }}/>
            </Switch>



           






            
            </div>
            </BrowserRouter>
        )
    }
}