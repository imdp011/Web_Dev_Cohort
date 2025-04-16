import { useState } from "react"
import apiClient from "../../service/ApiClient"

function Signup(){

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loading,setLoading]=useState("")
    const [error,setError]=useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)
        setError("")

        // make an api call to backend with data
        // get response from backend 
        // take action based on response


        try {
            const data= await apiClient.signup(name,email,password)
            console.log(`Signup Response ${data}`)
        } catch (error) {
            
        }
    }

    return(
        <div>
            <h1>Welcome to Signup Page!</h1>
            <form onSubmit={handleSubmit} action="">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    name ="name" 
                    id="name"
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    required/>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    name ="email" 
                    id="email"
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    required/>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password" 
                    name ="password" 
                    id="password"
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    required/>
                </div>

        {/* //Conditional Rendering */}
        {/* {Boolean?"":""} */}

        <button
        type="submit"
        disabled={loading}
        >{loading ? "Signup.....":"Signup"}</button>

            </form>
        </div>
    )
}

export default Signup