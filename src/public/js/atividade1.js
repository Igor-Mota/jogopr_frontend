import render_question from "../scripts/render/render_question.js"
(() => {


    async function get_activity(){
        
        const response = await axios.get(`http://localhost:5000/questions/get/${localStorage.getItem('activittye_id')}`,
        {headers:{"Authorization":'Bearer '+ localStorage.getItem('token')}})
        console.log(response)
        
        render_question(response.data)
    }

    get_activity()
})()