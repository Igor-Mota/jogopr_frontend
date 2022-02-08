import router from '../router.js'

const auth = {
    register(data){
        fetch('http://localhost:5000/auth/register', {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
            
        }).then( response => {
         response.body.getReader().read().then( body => {
                try{
                    var response = new TextDecoder().decode(body.value);
                    response = JSON.parse(response)
                    console.log(response)
                    localStorage.setItem('token', response.token)
                    router.push('menu.html')
                }catch(e){
                    console.log(e)
                }
            }) 
        }).catch((e) => console.log(e))
 
    },

    login(data){
        console.log(JSON.stringify(data))
       fetch('http://localhost:5000/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          "Access-Control-Allow-Origin": "*"
        },
        
        body:JSON.stringify(data)
       }).then(response => {
       
           response.body.getReader().read().then(body => {
                console.log(typeof body)
                console.log(body)
            try{
            
                var response = new TextDecoder().decode(body.value);
          
                if(response === "user does not exist"){
                    console.log('usuario nao existe')
                }else{
                    var control = JSON.parse(response)
                    localStorage.setItem('token', control.token)
                    router.push('menu.html')
                }
            }catch(e){
                console.log(e)
            }
           })
       })
    }
}
export default auth
