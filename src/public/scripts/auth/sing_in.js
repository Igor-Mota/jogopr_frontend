const auth = {
    async register(data){
        const response = await axios.post('http://localhost:5000/auth/register',data)
        return response
    },

    async login(data){
        const response = await axios.post('http://localhost:5000/auth/login',data)
        return response
    }
}
export default auth
