//localStorage
const products = {}
//termékek
var listitems = [0,0,0,0,0,0,0,0,0] // A lista tömb számlálója
//Viewer
var ViewerProducts = document.getElementById("ViewerProducts")
var ViewNum = listitems.length
//function
function StorageHandlerAdd(element){ // function hozunk létre
    var ids = document.getElementById(element.id) // beolvassa az id-t
    
    if(document.getElementById('Item1') == ids){//feltétel: ha az element id megeggyezik
        listitems[0]++//mindig növeljük eggyel ha teljesül a feltétel
        products.item1 = listitems[0] //megadjuk azt az értéket ami növekedik
        localStorage.setItem('products', JSON.stringify(products))//Betesszük LocalStorageba
    }
    if(document.getElementById('Item2') == ids){//feltétel: ha az element id megeggyezik
        listitems[1]++//mindig növeljük eggyel ha teljesül a feltétel
        products.Item2 = listitems[1]//megadjuk azt az értéket ami növekedik
        localStorage.setItem('products', JSON.stringify(products))//Betesszük LocalStorageba
    }
    if(document.getElementById('Item3') == ids){//feltétel: ha az element id megeggyezik
        listitems[2]++//mindig növeljük eggyel ha teljesül a feltétel
        products.item3 = listitems[2] //megadjuk azt az értéket ami növekedik
        localStorage.setItem('products', JSON.stringify(products))//Betesszük LocalStorageba
    }
    if(document.getElementById('Item4') == ids){//feltétel: ha az element id megeggyezik
        listitems[3]++//mindig növeljük eggyel ha teljesül a feltétel
        products.Item4 = listitems[3]//megadjuk azt az értéket ami növekedik
        localStorage.setItem('products', JSON.stringify(products))//Betesszük LocalStorageba
    }
    if(document.getElementById('Item5') == ids){//feltétel: ha az element id megeggyezik
        listitems[4]++//mindig növeljük eggyel ha teljesül a feltétel
        products.item5 = listitems[4] //megadjuk azt az értéket ami növekedik
        localStorage.setItem('products', JSON.stringify(products))//Betesszük LocalStorageba
    }
    if(document.getElementById('Item6') == ids){//feltétel: ha az element id megeggyezik
        listitems[6]++//mindig növeljük eggyel ha teljesül a feltétel
        products.Item6 = listitems[6]//megadjuk azt az értéket ami növekedik
        localStorage.setItem('products', JSON.stringify(products))//Betesszük LocalStorageba
    }
    if(document.getElementById('Item7') == ids){//feltétel: ha az element id megeggyezik
        listitems[6]++//mindig növeljük eggyel ha teljesül a feltétel
        products.Item7 = listitems[6]//megadjuk azt az értéket ami növekedik
        localStorage.setItem('products', JSON.stringify(products))//Betesszük LocalStorageba
    }
    if(document.getElementById('Item8') == ids){//feltétel: ha az element id megeggyezik
        listitems[7]++//mindig növeljük eggyel ha teljesül a feltétel
        products.Item8 = listitems[7] //megadjuk azt az értéket ami növekedik
        localStorage.setItem('products', JSON.stringify(products))//Betesszük LocalStorageba
    }
    if(document.getElementById('Item9') == ids){//feltétel: ha az element id megeggyezik
        listitems[8]++//mindig növeljük eggyel ha teljesül a feltétel
        products.Item9 = listitems[8]//megadjuk azt az értéket ami növekedik
        localStorage.setItem('products', JSON.stringify(products))//Betesszük LocalStorageba
    }
    
    ViewNum += 1
    document.getElementById("ViewerPr").value = ViewNum;
    if (ViewNum > 0){
        ViewerProducts.style.transform = 'scale(0.7)';
    }
}