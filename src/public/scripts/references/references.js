
const references = {
    one(attr){
       return document.querySelector(attr)
    },
    many(){
        var elements = []
        for(var i = 0 ; i < arguments.length; i++){
            elements.push(document.querySelector(arguments[i]))
        }
        return elements
    },
    many_all(element){
        return document.querySelectorAll(element)
    },
    many_values_intern(elements_props){
            var elements = []
            for(var i = 0 ; i < elements_props.length; i++){
                elements.push(document.querySelector(elements_props[i]))
            }
            return elements
        
    },
    many_values(){
        const elements = this.many_values_intern(arguments)
        var obj = {}

        elements.forEach(element => {
           console.log(element.getAttribute('name'))
            obj = {
                ...obj,
                [element.getAttribute('name')]:element.value
            }

        })
        return obj

    }
}

export default references