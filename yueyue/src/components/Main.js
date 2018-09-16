import React,{Component} from 'react';
import{BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import PageA from './PageA';
import PageB from './PageB';
import Home from './Home';

class Main extends  Component{
    render(){
        return(
            <div>
                main 主页面
                <Router>
                    <div>
                        <Link to="/">首页</Link>
                        <br/>
                        <Link to="/a/5">跳转A</Link>
                        <br/>
                        <Link to="/b">跳转B</Link>
                        {/*/!*<Switch>*!/*/}
                            {/*<Route path="/a" component={PageA}></Route>*/}
                            {/*<Route path="/b" component={PageB}></Route>*/}
                            {/*<Route path="/" component={Home}></Route>*/}
                        {/*</Switch>*/}
                        {/*switch匹配第一个*/}
                        <Route exact path="/" component={Home}></Route>
                        {/*exact 严格匹配*/}
                        <Route path="/a/:id" component={PageA}></Route>
                        <Route path="/b" component={PageB}></Route>


                    </div>
                </Router>
            </div>
        );
    }
}
export default Main;