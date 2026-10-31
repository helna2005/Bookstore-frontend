import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://bookstore-backend-n6mu.onrender.com/",
    timeout:5000
})

//request interceptor : Handling token append to headers
axiosInstance.interceptors.request.use(
    (config)=>{
        const token=sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)


//response interceptors : handle global error
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response recevied!!");
        return response
    },
    (error)=>{
        if(error.response){
            const status=error.response.status
            if(status==401){
                console.log("Unauthorized Acess- Response recevied");
            }else if(status==404){
                console.log("API no found");
            }else if(status==500){
                console.log("server error");
            }else if(error.request){
                console.log("No response from server");
                return error.request.response
            }else{
                console.log(`error:${error.message}`);
            }
            return Promise.reject(error)
        }
    }
)
export default axiosInstance