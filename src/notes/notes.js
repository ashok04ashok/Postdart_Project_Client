
//Logout
/*
import { Link, useHistory } from "react-router-dom";
function home(){
    const history=useHistory()
    const logout=()=>{ window.localStorage.clear();
        history.push("/login")
            }
        return(
            <button onClick={logout} ></button>
        )    
}   
*/





//Logout and  authToken page render time come but push time log button not come
/*
import { Link, useHistory } from "react-router-dom";
function home(){
    const history=useHistory()
    const logout=()=>{ window.localStorage.clear();
        history.push("/login")
            }
            const isToken = window.localStorage.getItem("authToken");
        return(
           { isToken && (
            <button onClick={logout} >logout</button> 
            )}
        )}

*/
        

/*
//Logout and  authToken page render time come but push time log button not come
/// here one assiign giving -we wiil check method ...do not work this method
import { Link, useHistory } from "react-router-dom";
function home(){
    const history=useHistory()
    const logout=()=>{ window.localStorage.clear();
        history.push("/login")
            }
            const ShowToken = window.localStorage.getItem("authToken");
        return(
           {ShowToken && (
            <button onClick={logout} >logout</button> 
            )}
        )}*/