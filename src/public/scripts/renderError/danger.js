function renderError(msg="Error"){

    var container = document.createElement('div')
    container.classList.add('removable')
    container.style.width = '100%'
    container.style.display = 'flex'
    container.style.alignItems = 'center'
    container.style.position = 'absolute'
    container.style.justifyContent = 'center'
    container.style.top = '0'
    container.style.paddingTop = '20px'


    var div = document.createElement('div')
    div.classList.add('danger')
    div.style.background = '#F8D7DA'
    div.style.width = '80%'
    div.style.height = '50px'
    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
    div.style.opacity = 1
    div.innerHTML = msg

    container.appendChild(div)
    document.querySelector('body').appendChild(container)

   var intervalID =  setInterval(() => {
       div.style.opacity -= 0.01
       if(div.style.opacity < 0){
        try{
            document.querySelector('body').removeChild(container)
            clearInterval(intervalID)
        }catch(e){console.log(e)}
    }
}, 60)
    
}

export default renderError