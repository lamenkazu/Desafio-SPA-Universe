export class Router{
    routes = {}

    add(pathName, link){
        this.routes[pathName] = link
    }

    route(e){
        e = e || window.event
        e.preventDefault()

        window.history.pushState({}, "", e.target.href)

        /*history.pushState coloca no historico do
        window todas as mudanças de pagina*/
        this.handle()
    }

    handle(){
        const {pathname} = window.location

        const route = this.routes[pathname] || this.routes[404]
        const navLinks = document.querySelectorAll('a')
        navLinks.forEach(a => {
            
            if(a.getAttribute('href') === pathname){
                a.classList.add('active')
            }else{
                a.classList.remove('active')
            }
        })

        if(route == this.routes["/universe"]){
            document.body.style.backgroundImage = "url('/assets/2.jpg')"
        }else if(route == this.routes["/exploration"]){
            document.body.style.backgroundImage = "url('/assets/3.jpg')"
        }else{
            document.body.style.backgroundImage = "url('/assets/1.jpg')"
        }

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app')
            .innerHTML = html
        })

        
    }
}