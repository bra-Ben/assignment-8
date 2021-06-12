import Inputfield from '../components/inputfield';
import '../pages/signup.css';
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup() {
    let history = useHistory();

    const [values, setValues] = useState({})

    const updatevalues = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const [cookiePopover,setCookiePopover]  =useState(true)
    const [ cookieReqType, setCookieReqType]= useState()

    function acceptCookies(){
        setCookieReqType('Accept')
        let jsonObject = {cookieReqType:cookieReqType}

        fetch('http://localhost:4000/api/v1/cookies', {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCookiePopover(false)
            })

    }

    function clearCookies(){
        fetch('http://localhost:4000/api/v1/clearCookies', {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCookiePopover(false)
            })

    }


    function submit(e) {


        e.preventDefault();
        console.log(values)
        // setIsLoading(true)
        // let  user={username:user_name, password:userpass}
        let object = { values }
        console.log(object)
        let json_object = JSON.stringify(object)
        // object here can be replaced with the values as above

        fetch('http://localhost:4000/api/v1/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: json_object,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.message) {
                    history.push('/Dashboard')
                }
                else {
                    alert('error')
                }
            })




    }


    return (
        <div className="wholepage" >

{
    cookiePopover == true ?
<div style={{
                display: 'flex', backgroundColor: 'white',
                width: '25%', height: '15%', position: 'absolute',
                zIndex: 1, top: 0, boxShadow:'0px 0px 5px 1px gray',
                flexDirection:'column',alignItems:'center',justifyContent:'center'
            }}>
                <div style={{display:'flex'}}>
                        <p>Do you want to accept cookies on this page?</p>
                        </div>
                        <div style={{display:'flex'}}>        
                            <button onClick={acceptCookies} >Yes</button><button onClick={()=>{setCookiePopover(false)}}>Cancel</button>
                         </div>

                         <div>
                             <button onClick={clearCookies}>clear cookies</button>
                         </div>

            </div>
    :

    null
}
                      

            <form className="content">
                <div className="inputarena">
                    <Inputfield name="email" type="email" onChange={updatevalues} placeholder='Email' />
                    <Inputfield name="password" type="password" onChange={updatevalues} placeholder='Password' />
                    <Inputfield name="confirm password" type="password" onChange={updatevalues} placeholder='Confirm Password' />
                </div>

                <div className="buttonarena">
                    <button onClick={submit}>Submit</button>
                </div>

            </form>

        </div>
    )

}
export default Signup;
