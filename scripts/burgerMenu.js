export const toggleBurgerMenu = () => {
    const header = document.querySelector('.header')
    const navbar = header.querySelector('.navbar')
    const burgerMenuBtn = header.querySelector('.burger-menu')
    const burgerMenuBtnIcon = burgerMenuBtn.querySelector('img')

    burgerMenuBtn.addEventListener('click', () => {
        header.classList.toggle('active')
        navbar.classList.toggle('active')

        if(header.classList.contains('active')) {
            burgerMenuBtnIcon.setAttribute('src', '/svg/icon-burger-menu-close.svg')
        } else {
            burgerMenuBtnIcon.setAttribute('src', '/svg/icon-burger-menu.svg')
        }
    })
}