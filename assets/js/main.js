/*=============== SHOW SOCIAL NETWORKS ===============*/
const showSocial = (toggleCard, socialCard) =>{
    const toggle = document.getElementById(toggleCard),
          social = document.getElementById(socialCard)

    toggle.addEventListener('click', () =>{
        // in the animation class exist , we add the down animation class
        if(social.classList.contains('animation')){
            social.classList.add('down-animation')
            
            //we add the down animation class
            setTimeout(() =>{
                social.classList.remove('down-animation')
            }, 1000)

        }

        // we add th animations class to the div tag with card--social class 
        social.classList.toggle('animation')
    })
}
showSocial('card-toggle', 'card-social')


