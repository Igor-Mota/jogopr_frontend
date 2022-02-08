import auth from '../scripts/auth/sing_in.js'
import references from '../scripts/references/references.js'
import validate from '../scripts/validate/validate.js'
import router from '../scripts/router.js'
import session from '../scripts/auth/session.js'
import renderError from '../scripts/renderError/danger.js'

const btn_for_fetch = references.one("#cadastro")
const btn_for_login = references.one('#login')

async function authenticate(inputs){
    const is_auth = await auth.register(inputs)
    if(is_auth.data.token){
        session.create_session(is_auth.data.token)
        router.push('menu.html')
    }else{
        renderError(is_auth.data)
    }
}  

async function login(inputs){
    const is_login = await auth.login(inputs)
    if(is_login.data.token){
        session.create_session(is_login.data.token)
        router.push('menu.html')
    }else{
        renderError(is_login.data)
    }
}

btn_for_fetch.addEventListener('click', () => {

    const inputs = references.many_values('#nome', '#email','#senha','#confirmasenha')
    const can_go = validate.inputs(inputs)

    if(can_go){
        authenticate(inputs)
    }   else{
        renderError('preencha todos os campos')
    }
})


btn_for_login.addEventListener('click', () => {
    
    const inputs = references.many_values('#email-login','#senha-login')
    const can_go = validate.inputs(inputs)

    if(can_go){
    login(inputs)
    }else{
        renderError('preencha todos os campos')
    }
})
