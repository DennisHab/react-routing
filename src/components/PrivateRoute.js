import  React from  "react";
import { Route, Redirect } from  "react-router-dom";

function  PrivateRoute( {path, component, logState}) {

    return  !logState ? <Route  exact path= {path}> {component} </Route> :
            <Redirect  to="/"/>
}
export  default  PrivateRoute;