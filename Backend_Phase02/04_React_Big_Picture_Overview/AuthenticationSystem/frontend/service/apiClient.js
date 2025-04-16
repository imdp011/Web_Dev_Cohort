
class ApiClient{
    constructor(){
        this.BaseURL="https://localhost:8000/api/v1";
        this.defaultHeaders={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }

    async customFetch(endpoint,options={}){
        try {
            const url=`${this.BaseURL}${endpoint}`;
            const headers={...this.defaultHeaders,...options.headers}


            const config={
                ...options,
                headers,
                Credentials:'inlcude'
            }

            console.log(`Fetching ${url}`);
            const response=await fetch(url,config)
            if(!response){
                console.log("response not found");
            }

            const data =await response.json()
            return data

        } catch (error) {
            console.log('Api Error',error)
        }
    }

    //Auth  endpoints

     async signup(name,email,password){
     return this.customFetch("/users/register",{
            method:"POST",
            body:JSON.stringify({name,email,password})
        })
    }
 
    async login(email,password){
    return  this.customFetch("/users/login",{
            method:"POST",
            body:JSON.stringify({email,password})
        })
    }

    async logout(){
        return this.customFetch("/users/logout")
    }

    async getprofile(){
        return this.customFetch("/users/me")
    }
} 


const apiClient=new ApiClient()

export default apiClient

//here we make it single-ton only this "apiClient" is export
//ek hi object h -->>> apiClient
