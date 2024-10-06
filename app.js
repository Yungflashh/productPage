
let price = document.getElementById("price");
let wheel = document.getElementById("wheel");
let total = document.getElementById("total")
let orderTotal = document.getElementById("orderTotal")
let spanPrice = document.getElementById("spanPrice")
let wheelCart = document.getElementById("wheelCart")
let emptywheelCart = document.getElementById("emptywheelCart")


items = [

    {
        names : "Waffle with Berries",
        type : "Waffle",
        price : 6.50
    },

    {
        names: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 8.00
    },

    {
        names: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
    },

    {
        "names": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
    },

    {
        "names": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
    },

    {
        "names": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
    },

    {
        "names": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
    },
    
    {
        "names": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
    },

    {
        "names": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
    }




]

cart = []

let li = document.createElement('li')

price = Number (0)

price = Math.round(price * 100) / 100;

function CartBtn(cartBtnId ,position, QtyBtnId, qtyId, priceNum ){

    cart.push(items[position].names)
    QtyBtnId = document.getElementById(QtyBtnId)
    cartBtnId = document.getElementById(cartBtnId)
    qtyId = document.getElementById(qtyId)

    cartBtnId.style.visibility = "hidden"
    QtyBtnId.style.visibility = "visible"

    qtyId.innerText =  1

    price += priceNum

    orderTotal.innerHTML = `Order Total   <span id = "result"> $${price} </span>`

    total.innerText = cart.length
    showCartList(0)

}

function acceptAdd(numbPassed, qtyPassed, priceValue, numb){
    varNum = document.getElementById(numbPassed)
    QtyNum = document.getElementById(qtyPassed)

    QtyNum.innerText = Number(QtyNum.innerText )+ 1
    cart.push(items[numb].names)
    console.log(priceValue);

    price += priceValue
    console.log(price);
    
    showCartList(0)
       
    total.innerText = Number( cart.length);
    orderTotal.innerHTML = `Order Total   <span id = "result"> $${price} </span>`

    showCartList(0)

}


function acceptMinus(numbPassed, qtyPassed,itemprice, num, cartBtnId, QtyBtnId){
    varNum = document.getElementById(numbPassed)
    QtyNum = document.getElementById(qtyPassed)
    cartBtnId = document.getElementById(cartBtnId)
    QtyBtnId = document.getElementById(QtyBtnId)

    if(QtyNum.innerText <= 1){
        let element = cart.findIndex(element => element == items[num].names)
        cart.splice(element, 1)
        cartBtnId.style.visibility = "visible"
        QtyBtnId.style.visibility = "hidden"
        showCartList()
        total.innerText --
        price = price - itemprice
           orderTotal.innerHTML = `Order Total   <span id = "result"> $${price} </span>`
    }

    else{
        QtyNum.innerText = QtyNum.innerText - 1
        if (price === 0){
            price -= itemprice
        }

        else{
        price = price - itemprice
        console.log(price);
        console.log(cart);
        let element = cart.findIndex(element => element == items[num].names)
        cart.splice(element, 1)
    
        console.log(cart);
        wheel.textContent = ""
        showCartList()
           total.innerText --
           orderTotal.innerHTML = `Order Total   <span id = "result"> $${price} </span>`
        }

    }
        
}

function showCartList(numb) {
    
    console.log(total.innerText);
    console.log(cart);
    

    if (cart.length<= 0){
        emptywheelCart.style.display = "block"
        wheelCart.style.visibility = "hidden"
    }
   

    else{
        emptywheelCart.style.display = "none"
        wheelCart.style.visibility = "visible"
       
    const cartList = document.getElementById('wheel'); 
    cartList.innerHTML = '';

    cart.forEach((element) => {
       
        
       
        const li = document.createElement('li'); 
        li.innerHTML = element 
        cartList.appendChild(li);   
    
                   
    });
}

}



