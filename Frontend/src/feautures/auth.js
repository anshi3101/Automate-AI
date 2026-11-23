import api from "@/api"


export const login = async (token)=>{
    try{
        const {data}=await api.post("/api/auth/login",{token})
    } catch(error) {
        console.log(error)
    }
}

export const logout = async ()=>{
    try{
        const {data}=await api.get("/api/auth/login")
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}

export const me = async ()=>{
    try{
        const {data}=await api.get("/api/auth/me")
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}