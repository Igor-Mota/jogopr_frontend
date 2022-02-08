const session = {
    create_session(value){
        value
        localStorage.setItem('token', value)
    },
    veryfy_session(){
    const token = localStorage.getItem('token')
    if(token){
        return true
    } else{
        return false
    }
    },
    destroy_session(){
        return''
    }
}

export default session