class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        
        <header>
        <a href= index.html>
        
        </a>
        <nav>
        <ul>
        
        <li><a href=index.html>Home</a>
        <li><a href=about.html>About</a>
   
        </ul>
        
        </nav>
        </header>
        
        
        
        
        `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        
        <footer>

        @2023
        My Name
      
        </footer>
        
        
        
        
        `
    }
}

customElements.define('my-footer', MyFooter)