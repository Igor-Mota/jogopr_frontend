const validate = {
    inputs(object){
        var validate = true
        for(var key in object){
                if(object[key].trim() === ''){
                 validate = false
            }
        }
        return validate
    }
}

export default validate