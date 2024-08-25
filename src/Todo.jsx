import { useState } from "react";
import Button from "./Components/Button";



function Todo(){

    const[username, setUsername] = useState("")
    const[users, SetUsers] = useState(["Test"]);

    const AddUser = ()=>{
        SetUsers([...users, username])
        setUsername("")

    };

    const ClearUsers = ()=>{
        SetUsers([]);
    };

    return(
        <div className="flex flex-col items-center m-20">
            <h1 className="text-[50px] text-center my-3">Hello <span className="underline">{username}</span></h1>
            <div>
                <input 
                value={username}
                placeholder="Your Name"
                onChange={(e)=> setUsername(e.target.value)}
                className="border p-2"
                />

                <Button text={"Add"} onClick={AddUser}/>
                <Button text={"Clear"} onClick={ClearUsers}/>

            </div>

            {users.map((data,index)=>(
                <h1 className="text-center font-medium text-2xl my-2 px-10 py-2 bg-purple-200" key={index}>{data}</h1>
            
        ))}
        </div>

        


    );
}

export default Todo;