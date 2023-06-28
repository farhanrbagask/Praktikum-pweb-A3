const menuTrigger = document.querySelector('.menu-trigger')
const menu = document.querySelector('.navbar-menu')

// console.log(menuTrigger)
// console.log(menu)

menuTrigger.addEventListener('click',() => {
    console.log('buka menu: ' + open)
    open = !open
    if (open){
        menu.classList.add('open')
    }else{
        menu.classList.remove('open')
    }
    
})