window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activeteMenuAtCurrentSection(home)
  activeteMenuAtCurrentSection(services)
  activeteMenuAtCurrentSection(about)
  activeteMenuAtCurrentSection(contact)
}

function activeteMenuAtCurrentSection(section){  
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  // o topo da seção
  const sectionTop = section.offsetTop
  // a alturada seção
  const sectionHeight = section.offsetHeight

  // 
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // informaçoes dos dados
  //console.log('O topo da seção chegou ou passo da linha?', sectionTopReachOrPassedTargetline)

  //  verificar se a base esta a baixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  //console.log('o fundo da seção passou da linha?', sectionEndPassedTargetline)

  // limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
  //console.log(sectionBoundaries)

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}


function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
  #home img,
  home .stats,
  #services,
  #services header,
  #services .cards¨,
  #about,
  #about header,
  #about .content,
  #contact,
  footer`)
