const validate = {
    inputs(object){
        var validate = true
        for(var key in object){
            if(typeof object[key] === String){
                if(object[key].trim() === ''){
                 validate = false
                }
            }
        }
        return validate
    }
}

export default validate