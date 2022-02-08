import refereces from '../scripts/references/references.js'
import validate from '../scripts/validate/validate.js'
import renderError from '../scripts/renderError/danger.js'
import routes from '../scripts/router.js'
(function(){

    async function create_question(data){
        console.log(data)
        const response = await axios.post('http://localhost:5000/questions/create',data)

        if(response.data.main){
            routes.push('jogo.html')
        }else{
            renderError('Algo deu errado')
        }
    }


    
    var radio = document.querySelectorAll('.radio')
    radio.forEach(el => el.addEventListener('click', (e) => {
        radio.forEach(el => {
            el.classList.remove('cheked')
        })
        e.target.classList.add('cheked')
    }))

    
    const btn_create_question = refereces.one('#criarquestao')

    btn_create_question.addEventListener('click', function() {
        var inputs = refereces.many_values('#tituloquestao', '#resposta1', '#resposta2','#resposta3')
        radio.forEach(el => {
            if (el.classList.contains('cheked')){
                inputs.correct = parseInt(el.getAttribute('id').replace(/\D/g,''))
            }
        })
        const can_go = validate.inputs(inputs)
        if( can_go && inputs.correct){
            inputs.code = localStorage.getItem('code')
            create_question(inputs)
        }else{
            renderError('Preencah todos os campos')
        }
    })
})()