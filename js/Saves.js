//navbar mentése
function SaveHandler(){
    var navbarsave = document.getElementById('navbarsave').innerHTML;
    navbarsave = navbarsave.replace(/href="egyeb.html"/g, 'href="htmls/egyeb.html"')
    navbarsave = navbarsave.replace(/href="index.html"/g, 'href="..\/index.html"')


    localStorage.setItem('element',navbarsave)


    console.log('Sikeresen elmentette a navbart')
}

