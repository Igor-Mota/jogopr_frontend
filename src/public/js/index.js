import auth from '../scripts/auth/sing_in.js'
import references from '../scripts/references/references.js'

const btn_for_fetch = references.one("#cadastro")
const btn_for_login = references.one('#login')

btn_for_fetch.addEventListener('click', () => {
    const inputs = references.many_values('#nome', '#email','#senha','#confirmasenha')

    if(inputs[2] !== inputs[3]){
        return 'as senhas devem ser iguais'``
    }else{
        auth.register(inputs)
    
    }   
})
btn_for_login.addEventListener('click', () => {
    const inputs = references.many_values('#email-login','#senha-login')
    
    auth.login(inputs)

})
