import {Route, Switch, Redirect} from "react-router-dom"
import {createBrowserHistory} from 'history'
import startPage from "../src/pages/startPage";
import page1 from "../src/pages/page1";
import page2 from "../src/pages/page2";
import './App.css';

const history = createBrowserHistory()

function App() {
    return (
        <>
            <Switch>
                <Route history={history} path="/startPage" component={startPage}/>
                <Route history={history} path="/page1" component={page1}/>
                <Route history={history} path="/page2" component={page2}/>
                <Redirect from='/' to='/startPage'/>
            </Switch>
        </>
    )
}

export default App;
