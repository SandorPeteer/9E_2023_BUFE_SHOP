function SaveHandlerIndex(){
    //navbar mentése
    let navbarsave = document.getElementById('navbarsave').innerHTML;
    localStorage.setItem('navbar',navbarsave)
    console.log('Sikeresen elmentette a navbart')
    //footer mentése
    let footersave = document.getElementById('footersave').innerHTML;
    localStorage.setItem('footer', footersave)
    console.log('Sikeresen elmentette a footert')
    //Cart számláló
    
}
const Basket = {}
var listitems = [0,0,0,0,0,0,0,0,0,0]
function ToBasket(element) {
    let ids = document.getElementById(element.id);
    if (document.getElementById('mentesviz') == ids) {
      listitems[0]++;
      Basket.mentesviz = listitems[0];
      localStorage.setItem('OnBasket', JSON.stringify(Basket));
      ParseOnBasket = JSON.parse(localStorage.getItem('OnBasket')); // Frissítsük a ParseOnBasket változót
      CartSpanHandler(); // A kosár ikon frissítése
    }
}

let ParseOnBasket = JSON.parse(localStorage.getItem('OnBasket'))
function FromBasket(){
    //meghívjuk a Container divet
    let container = document.getElementById('CartContainer')
    //létrehozzuk a divet amely a reszponzivitásért felel
    let Litag = document.createElement('li')
    //beálítjuk a Div classt
    Litag.classList.add('list-group-item', 'd-flex', 'justify-content-between' ,'lh-sm')
    //Clone diveket hozunk létre, amelyek tulajdonsága meg egyezik az előző tulajdonságaival.
    let CloneLiNo = Litag.cloneNode(true);
    let CloneLi1 = Litag.cloneNode(true);
    var sumBasket = 0
    for (const key in ParseOnBasket){
        if(ParseOnBasket.hasOwnProperty(key)){
            sumBasket += ParseOnBasket[key]
        }
    }
    if (sumBasket == 0){
        container.appendChild(CloneLiNo)
        CloneLiNo.innerHTML = '<p>Nem található a kosárban termék</p>'
    }
    if (ParseOnBasket.mentesviz > 0){
        container.appendChild(CloneLi1)
        CloneLi1.innerHTML ='<p>Mentes Víz(250ft):</p>' + ParseOnBasket.mentesviz 
    }
}


function CartSpanHandler() {
    let Cartspan = document.getElementById('ViewBI');
    let existingBadge = Cartspan.querySelector('span.badge');
    var sumBasket = 0;
    for (const key in ParseOnBasket) {
      if (ParseOnBasket.hasOwnProperty(key)) {
        sumBasket += ParseOnBasket[key];
      }
    }
  
    if (sumBasket > 0) {
      if (existingBadge) {
        existingBadge.querySelector('output').value = sumBasket;
      } else {
        let Spantag = document.createElement('span');
        Spantag.classList.add('top-0', 'start-100', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger');
        Cartspan.appendChild(Spantag);
        var outputSpan = document.createElement('output');
        Spantag.appendChild(outputSpan);
        outputSpan.value = sumBasket;
      }
    } else {
      if (existingBadge) {
        Cartspan.removeChild(existingBadge);
      }
    }
  }
  
  