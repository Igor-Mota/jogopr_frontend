export default function(elments){
    const status = {
        0: () => 'pennding',
        1: ()  => 'reject',
        2: () => 'accept'
    }

    if(elments.length > 0){

        elments.forEach( element => {

            var li = document.createElement('li')
            li.classList.add('questions_status')
            var span = document.createElement('span')
            li.innerHTML = element.question
            li.appendChild(span)
            span.innerHTML =  status[element.aprrove_status]()
            span.classList.add(status[element.aprrove_status]())
            document.querySelector('#quetions_status').appendChild(li)
            
        });
    }
}