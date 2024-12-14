const closeCartBodyButton= document.querySelector(".close-cart-body");
const cartButton= document.querySelectorAll(".open-cart");
const cartBody= document.querySelector(".cart-body");
cartButton.forEach(btn=>{
    btn.addEventListener("click", () => {
        cartBody.style.display="block";
    });
})
closeCartBodyButton.addEventListener("click", () => {
    cartBody.style.display="none";
});



// Adding items to the cart



const cartEmpty=
`
<div class="no-items-in-cart fw-3">
        <span class="fa fa-cart-shopping no-items-in-cart-icon"></span>
        <span class="line-to"></span>
        No items shown in cart! try adding some items.
    </div>
`;

//check for cart existance and show element or return message.

let cartItems= [];
cartItems= JSON.parse(localStorage.getItem("cart-items"));
let cartLength=0;

let cartItemsPlacement= document.querySelector(".cart-body-list");
let cartLengthIcon= document.getElementsByClassName("cart-length")[0];
if(cartItems== null){
    cartItemsPlacement.innerHTML=cartEmpty;
    cartLengthIcon.style.display="none";
}else{

    cartLength=cartItems.length;
    cartLengthIcon.innerHTML=cartLength;
    cartItemsPlacement.innerHTML="";
    let loopedItems=[];
    cartItems.forEach((item, index) =>{
                
        if (loopedItems.includes(item.title, 0)){
            let id=loopedItems.indexOf(item.title);
            document.getElementById("item-"+id).innerHTML+=
            `<span class="indexes-${index}">${index}</span>`;
            document.querySelectorAll(".size-value")[id].textContent=parseInt(document.querySelectorAll(".size-value")[id].textContent)+1;
        }
        if(!loopedItems.includes(item.title, 0)){
            cartItemsPlacement.innerHTML+=
        `
            <div class="cart-item">
                    <div id="item-${index}" class="hidden">
                        <span class="indexes-${index}">${index}</span>
                    </div>
                    <img src="${item.img}" alt="" class="cart-item-image">
                    <div class="cart-item-content">
                        <div class="cart-item-title">
                            ${item.title}
                        </div>
                        <p class="cart-item-desc">
                            ${item.desc}
                        </p>
                        <div class="cart-item-details">
                            <span>Size: ${item.size}</span>
                            <div class="cart-item-price">
                                <span class="reduced-price"><strike>25, 000</strike></span>
                                ${item.price}                                
                            </div>
                            <div class="checkout-item">
                                <div class="cart-item-count">
                                    <button class="decrement-item fas fa-minus"></button>
                                     <span class="size-value" id='cart-item-size'>${item.counts}</span>
                                     <button class="increment-item fas fa-add"></button>
                                </div>
                                <button class="checkout-items-button">
                                    <span class="fas fa-arrow-right"></span>
                                    CHECKOUT
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="remove-item">
                        <span class="remove-label">remove item</span>
                        <button class="remove-button" onclick="removeItem(${index})">
                            <span class="far fa-trash-can fa-lg"></span>
                        </button>
                    </div>                    
                </div>
        `;
        if(loopedItems.length==0){
            loopedItems=[item.title];
        }
        else{
            loopedItems.push(item.title);
        }
        }
        
    });
}
// add item to cart by clicking add button...


const productSizes1= document.querySelectorAll(".explore-size-01");
const productSizes2= document.querySelectorAll(".explore-size-02");
const productSizes3= document.querySelectorAll(".explore-size-03");

productSizes1.forEach(size => {
    size.addEventListener("click", ()=>{
        productSizes1.forEach((sizeValue, index) =>{
            sizeValue.classList.remove("selected-size");
        });
        size.classList.add("selected-size");
    });
});

productSizes2.forEach(size => {
    size.addEventListener("click", ()=>{
        productSizes2.forEach((sizeValue, index) =>{
            sizeValue.classList.remove("selected-size");
        });
        size.classList.add("selected-size");
    });
});

productSizes3.forEach(size => {
    size.addEventListener("click", ()=>{
        productSizes3.forEach((sizeValue, index) =>{
            sizeValue.classList.remove("selected-size");
        });
        size.classList.add("selected-size");
    });
});


let exploreButtons= document.querySelectorAll(".item-button");
let exploreTitles= document.querySelectorAll(".item-title");
let explorePrices= document.querySelectorAll(".real-price");
let exploreImgs= document.querySelectorAll(".explore-img");
let exploreDescs= document.querySelectorAll(".item-desc");
let exploreSizes= document.querySelectorAll(".selected-size");


// checking if each item is in cart
let cartAddedIcon= document.querySelectorAll(".add-to-cart");

let addedTitle= '';
let addedImg= '';
let addedPrice= '';
let addedDesc= '';
let addedSize= '';
let addedItem=Object;   
const addItemToCart= (id)=>{
    addedTitle= exploreTitles[id].textContent;
    addedImg= exploreImgs[id].src;
    addedPrice= explorePrices[id].textContent;
    addedDesc= exploreDescs[id].textContent;
    addedSize= exploreSizes[id].textContent;
    addedItem={
        title: addedTitle,
        img: addedImg,
        price: addedPrice,
        size: addedSize,
        desc: addedDesc,
        id: cartLength+1,
        counts: 1,
    };

    if(cartItems != null){        
        cartItems.push(addedItem);
        localStorage.setItem("cart-items", JSON.stringify(cartItems));
        cartAddedIcon[id].style.color="var(--color-spec)";

        //trying to rerender data in cart body..
        cartLength=cartItems.length;
        cartLengthIcon.innerHTML=cartLength;    
        cartItemsPlacement.innerHTML="";
        let loopedItems=[];
        cartItems.forEach((item, index) =>{
                    
            if (loopedItems.includes(item.title, 0)){
                let id=loopedItems.indexOf(item.title);
                document.getElementById("item-"+id).innerHTML+=
                `<span class="indexes-${index}">${index}</span>`;
                document.querySelectorAll(".size-value")[id].textContent=parseInt(document.querySelectorAll(".size-value")[id].textContent)+1;
            }
            if(!loopedItems.includes(item.title, 0)){
                cartItemsPlacement.innerHTML+=
            `
                <div class="cart-item">
                        <div id="item-${index}" class="hidden">
                            <span class="indexes-${index}">${index}</span>
                        </div>
                        <img src="${item.img}" alt="" class="cart-item-image">
                        <div class="cart-item-content">
                            <div class="cart-item-title">
                                ${item.title}
                            </div>
                            <p class="cart-item-desc">
                                ${item.desc}
                            </p>
                            <div class="cart-item-details">
                                <span>Size: ${item.size}</span>
                                <div class="cart-item-price">
                                    <span class="reduced-price"><strike>25, 000</strike></span>
                                    ${item.price}                                
                                </div>
                                <div class="checkout-item">
                                    <div class="cart-item-count">
                                        <button class="decrement-item fas fa-minus"></button>
                                        <span class="size-value" id='cart-item-size'>${item.counts}</span>
                                        <button class="increment-item fas fa-add"></button>
                                    </div>
                                    <button class="checkout-items-button">
                                        <span class="fas fa-arrow-right"></span>
                                        CHECKOUT
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="remove-item">
                            <span class="remove-label">remove item</span>
                            <button class="remove-button" onclick="removeItem(${index})">
                                <span class="far fa-trash-can fa-lg"></span>
                            </button>
                        </div>                    
                    </div>
            `;
            if(loopedItems.length==0){
                loopedItems=[item.title];
            }
            else{
                loopedItems.push(item.title);
            }
            }
            
        });
    }
    else{
        cartItems=[addedItem];
        localStorage.setItem("cart-items", JSON.stringify(cartItems));
        cartAddedIcon[id].style.color="var(--color-spec)";

        //trying to rerender data in cart body..
        cartLength=cartItems.length;
        cartLengthIcon.innerHTML=cartLength;   
        cartItemsPlacement.innerHTML="";
        let loopedItems=[];
        cartItems.forEach((item, index) =>{
                    
            if (loopedItems.includes(item.title, 0)){
                let id=loopedItems.indexOf(item.title);
                document.getElementById("item-"+id).innerHTML+=
                `<span class="indexes-${index}">${index}</span>`;
                document.querySelectorAll(".size-value")[id].textContent=parseInt(document.querySelectorAll(".size-value")[id].textContent)+1;
            }
            if(!loopedItems.includes(item.title, 0)){
                cartItemsPlacement.innerHTML+=
            `
                <div class="cart-item">
                        <div id="item-${index}" class="hidden">
                            <span class="indexes-${index}">${index}</span>
                        </div>
                        <img src="${item.img}" alt="" class="cart-item-image">
                        <div class="cart-item-content">
                            <div class="cart-item-title">
                                ${item.title}
                            </div>
                            <p class="cart-item-desc">
                                ${item.desc}
                            </p>
                            <div class="cart-item-details">
                                <span>Size: ${item.size}</span>
                                <div class="cart-item-price">
                                    <span class="reduced-price"><strike>25, 000</strike></span>
                                    ${item.price}                                
                                </div>
                                <div class="checkout-item">
                                    <div class="cart-item-count">
                                        <button class="decrement-item fas fa-minus"></button>
                                        <span class="size-value" id='cart-item-size'>${item.counts}</span>
                                        <button class="increment-item fas fa-add"></button>
                                    </div>
                                    <button class="checkout-items-button">
                                        <span class="fas fa-arrow-right"></span>
                                        CHECKOUT
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="remove-item">
                            <span class="remove-label">remove item</span>
                            <button class="remove-button" onclick="removeItem(${index})">
                                <span class="far fa-trash-can fa-lg"></span>
                            </button>
                        </div>                    
                    </div>
            `;
            if(loopedItems.length==0){
                loopedItems=[item.title];
            }
            else{
                loopedItems.push(item.title);
            }
            }
            
        });
    }
};



// remove item from a cart...



    const removeItem = (index) => {
        const indexes= document.querySelectorAll(`.indexes-${index}`);
        console.log(`button clicked! on ${index}`);
        indexes.forEach(index=>{            
            delete cartItems[parseInt(index.textContent)];
        })
        let newArray=[];
        cartItems.forEach(item=>{
            if(item!=null){
                newArray.push(item);
            }
        })

        //update local storage..
        if(newArray.length>0){
            localStorage.setItem("cart-items", JSON.stringify(newArray));

            //reset data in cart..
            cartItems=newArray;

            //trying to rerender data in cart body..
            cartLength=cartItems.length;
            cartLengthIcon.innerHTML=cartLength;    
            cartItemsPlacement.innerHTML="";
            let loopedItems=[];
            cartItems.forEach((item, index) =>{
                        
                if (loopedItems.includes(item.title, 0)){
                    let id=loopedItems.indexOf(item.title);
                    document.getElementById("item-"+id).innerHTML+=
                    `<span class="indexes-${index}">${index}</span>`;
                    document.querySelectorAll(".size-value")[id].textContent=parseInt(document.querySelectorAll(".size-value")[id].textContent)+1;
                }
                if(!loopedItems.includes(item.title, 0)){
                    cartItemsPlacement.innerHTML+=
                `
                    <div class="cart-item">
                            <div id="item-${index}" class="hidden">
                                <span class="indexes-${index}">${index}</span>
                            </div>
                            <img src="${item.img}" alt="" class="cart-item-image">
                            <div class="cart-item-content">
                                <div class="cart-item-title">
                                    ${item.title}
                                </div>
                                <p class="cart-item-desc">
                                    ${item.desc}
                                </p>
                                <div class="cart-item-details">
                                    <span>Size: ${item.size}</span>
                                    <div class="cart-item-price">
                                        <span class="reduced-price"><strike>25, 000</strike></span>
                                        ${item.price}                                
                                    </div>
                                    <div class="checkout-item">
                                        <div class="cart-item-count">
                                            <button class="decrement-item fas fa-minus"></button>
                                            <span class="size-value" id='cart-item-size'>${item.counts}</span>
                                            <button class="increment-item fas fa-add"></button>
                                        </div>
                                        <button class="checkout-items-button">
                                            <span class="fas fa-arrow-right"></span>
                                            CHECKOUT
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="remove-item">
                                <span class="remove-label">remove item</span>
                                <button class="remove-button" onclick="removeItem(${index})">
                                    <span class="far fa-trash-can fa-lg"></span>
                                </button>
                            </div>                    
                        </div>
                `;
                if(loopedItems.length==0){
                    loopedItems=[item.title];
                }
                else{
                    loopedItems.push(item.title);
                }
                }
                
            });
        }
        else{
            localStorage.removeItem("cart-items");
            cartLengthIcon.style.display="none";
            cartItemsPlacement.innerHTML=cartEmpty;
        }        
    }

// after fetching cart items then edit items..


// edit counts of item...

const incrementBtns= document.querySelectorAll(".increment-item");
const decrementBtns= document.querySelectorAll(".decrement-item");
let currentItemsCounts=document.querySelectorAll(".size-value");

incrementBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let current=parseInt(currentItemsCounts[index].textContent);
        if(current==9){
            btn.disabled=true;
        }
        if(current>1){
            decrementBtns[index].disabled=false;
        }
        currentItemsCounts[index].textContent= current+1;
    });
});

decrementBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let current=parseInt(currentItemsCounts[index].textContent);
        if(current<=2){
            btn.disabled=true;
        }
        if(current<10){
            incrementBtns[index].disabled=false;
        }
        currentItemsCounts[index].textContent= current-1;
    });
});