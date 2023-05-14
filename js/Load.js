function NavfooterLoad(){
  //navbar betöltése
  let navbarHTML = localStorage.getItem('navbar')
  document.getElementById('navbarload').innerHTML = navbarHTML
  //footer betöltése
  let footerHTML = localStorage.getItem('footer')
  document.getElementById('footerload').innerHTML = footerHTML
}