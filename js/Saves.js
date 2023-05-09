function SaveHandlerIndex(){
    //navbar mentése
    var navbarsave = document.getElementById('navbarsave').innerHTML;
    //navbarsave = navbarsave.replace(/href="egyeb.html"/g, 'href="htmls/egyeb.html"')
    //navbarsave = navbarsave.replace(/href="index.html"/g, 'href="..\/index.html"')
    localStorage.setItem('navbar',navbarsave)
    console.log('Sikeresen elmentette a navbart')
    //footer mentése
    var footersave = document.getElementById('footersave').innerHTML;
    localStorage.setItem('footer', footersave)
}

