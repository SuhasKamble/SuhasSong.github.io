let btn = document.getElementById('btn')
let name = document.getElementById('name')
let pass =document.getElementById('pass')
let help = document.getElementById('help')
btn.addEventListener('click',()=>{
    name=name.value ;
    pass= pass.value
    if(name=='suhas' & pass=='123'){
        location.href='home.html'
    }
    else{
        alert('Incorrect Username or Password')
        location.reload()
        
    }
})

help.addEventListener('click',()=>{
    alert('Username is suhas & Passwod is 123' )
})