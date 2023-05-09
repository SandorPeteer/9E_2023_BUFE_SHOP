//navbar betöltése
window.onload = function(){
    var navbarHTML = localStorage.getItem('element')
    document.getElementById('navbarload').innerHTML = navbarHTML
    .replace(/href="htmls\/egyeb.html"/g, 'href="egyeb.html"')
    .replace(/href="index.html"/g, 'href="index.html"')
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