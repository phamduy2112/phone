document.querySelectorAll('.nav-link').forEach((nav)=>{
    nav.onclick=()=>{
        document.querySelector('.nav-link__active').classList.remove('nav-link__active')
        nav.classList.add('nav-link__active');
        
    }
})