const router = {
    location(){
        return window.location.href.replace(/\d+/g, '')
            .replace(/\/+/g,'')
            .replace(/\.+/g,'')
            .replace(/http/,'')
            .replace(/:+/,'')
    },
    push(argument){
      if(argument === 'index.html'){
        window.location.href =  this.location().replace(this.location(), argument)
      }else{
        
        window.location.href = window.location.href.replace(/(.+\d+:\d+\/).+/,`$1/src/views/${argument}`)
  
      }
    }
}

export default router