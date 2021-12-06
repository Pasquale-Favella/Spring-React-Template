import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { NotFound } from './pages/NotFound/index';

export const Routes = ()=>{
    return (
        
        <Switch>
            <Route path="/" component={Home} exact key="home"/>
            <Route component={NotFound}  key="notfound"/>  
        </Switch>
    
    )
}