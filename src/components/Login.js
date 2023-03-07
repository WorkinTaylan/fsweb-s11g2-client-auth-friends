import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
const LoginForm=()=>{

const history=useHistory();


const [user, setUserInfo]=useState({
    username:'workintech',
    password:'wecandoit'
})

const handleChange=(e)=>{
    setUserInfo({
        ...user,
        [e.target.name]:e.target.value
    })
}

const handleSubmit=(e)=>{

e.preventDefault();

axios
    .post("http://localhost:9000/api/login", user)
    .then((res) => { 
    if(res.data.token){
    localStorage.setItem('token', res.data.token)
    history.push('/FriendsList')
    }
    console.log(res.data);
    
})
    .catch((error) => console.log(error));

}


return (
<div className="font-abc">
    <form onClick={handleSubmit}>
    <label>
        USERNAME
        <input 
        type="text" 
        name="username"
        onChange={handleChange}
        value={user.username}
        className="border  border-zinc-400 w-56"
        >
            
        </input>
    </label>
    <label>
        PASSWORD
        <input 
        type="password" 
        name="password"
        onChange={handleChange}
        value={user.password}
        className="border  border-zinc-400 w-56"
        >
            
        </input>
    </label>
    <button type="submit" className="bg-yellow-600 px-3 py-2">SUBMIT</button>    
    </form>
</div>
)

}

export default LoginForm;