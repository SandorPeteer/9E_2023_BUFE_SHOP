function SaveHandlerIndex(){
    //navbar mentése
    let navbarsave = document.getElementById('navbarsave').innerHTML;
    localStorage.setItem('navbar',navbarsave)
    console.log('Sikeresen elmentette a navbart')
    //footer mentése
    let footersave = document.getElementById('footersave').innerHTML;
    localStorage.setItem('footer', footersave)
    console.log('Sikeresen elmentette a footert')
}
const Basket = {}
var listitems = [0,0,0,0,0,0,0,0,0]

function ToBasket(element){
    var ids = document.getElementById(element.id)
    
    if(document.getElementById('mogyiModalItem') == ids){
        listitems[0] = document.getElementById('mogyi').innerHTML
        Basket.mogyi = listitems[0]
        localStorage.setItem('OnBasket', Basket.mogyi)

        var container = document.getElementById('Cart')
        var doll = document.createElement('div')
        doll.classList.add('col-sm-4', 'mb-3', 'd-flex', 'align-items-stretch')
        container.appendChild(doll)
        doll.innerHTML = localStorage.getItem('OnBasket')
    }
}





