window.onload = function(){
    //navbar betöltése
    var navbarHTML = localStorage.getItem('navbar')
    document.getElementById('navbarload').innerHTML = navbarHTML
    //.replace(/href="htmls\/egyeb.html"/g, 'href="egyeb.html"')
    //.replace(/href="index.html"/g, 'href="index.html"')


    //footer betöltése
    var footerHTML = localStorage.getItem('footer')
    document.getElementById('footerload').innerHTML = footerHTML
}

//function replaceHandler(currentPage){
   // var navbarHTML = localStorage.getItem('element')
   // var Updatenavbarlinks = navbarHTML.replace(/href="([^"])"/g, 'href="'+ getAbsolutePath(currentPage) +'/$1"')
   // document.getElementById('navbarload').innerHTML = Updatenavbarlinks
//}
//function getAbsolutePath(relativePath){
  //  var Link = document.createElement('a')
 //   Link.href = relativePath;
 //   return Link.href
//}