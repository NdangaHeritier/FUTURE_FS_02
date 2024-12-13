const wrapper= document.querySelector(".sliderWrapper");


// decrale all products items

const products=[
    {
        id: 1,
        title: "Air Force",
        price: "19, 000",
        desc: "Nike Airforce 1 with with 3 available colors and all foot sizes.",
        colors:[
            {
                code:"white",
                img: "air-force.png"
            },
            {
                code: "black",
                img: "air-force-black.png"
            },
        ],

    },
    {
        id: 2,
        title: "Air Jordan",
        price: "24, 000",
        desc: "Nike Air Jordan New season with 2 available colors and all foot sizes.",
        colors:[
            {
                code:"white",
                img: "jordan.png"
            },
            {
                code: "black",
                img: "jordan-black.png"
            },
        ], 
    },
    {
        id: 3,
        title: "Crater",
        price: "28, 000",
        desc: "Nike Crater Impact, A sport and climbing Giant.",
        colors:[
            {
                code:"black",
                img: "crater.png"
            },
            {
                code: "grey",
                img: "crater-2.png"
            },
        ],
    },
    {
        id: 4,
        title: "Blazer",
        price: "23, 000",
        desc: "Nike Blazer Xhous, A Fashion and elegancy Giant.",
        colors:[
            {
                code:"white",
                img: "brazerr.png"
            },
            {
                code: "#f09610",
                img: "blazer-2.png"
            },
        ],
    },
    {
        id: 5,
        title: "Zoom X",
        price: "20, 000",
        desc: "Nike Zoom, The best choice for runners and sportifs.",
        colors:[
            {
                code:"lightblue",
                img: "zoom.png"
            },
            {
                code: "lightgreen",
                img: "zoom-2.png"
            },
        ],
    }
];

// current product..

let choosenProduct= products[0];
let currentProductImg= document.querySelector(".productImg");
let currentProductTitle= document.querySelector(".productTitle");
let currentProductDesc= document.querySelector(".productDesc");
let currentProductPrice= document.querySelector(".productPrice");

let SliderPrices= document.querySelectorAll(".sliderPrice");

let currentColors= document.querySelectorAll(".color");
let currentSizes= document.querySelectorAll(".size");


const menuItems= document.querySelectorAll(".menu-item");
document.getElementsByClassName('menu-item')[0].style.fontWeight=600;
menuItems.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        //select current product from list.
        choosenProduct=products[index];
        //make all menus non selected.
        menuItems.forEach(link=>{
            link.style.fontWeight=300;
        });
        //make selected item bolder.
        item.style.fontWeight=600;
        //change price.
        SliderPrices[index].textContent="Rwf " + choosenProduct.price;
        //show selected item section.
        wrapper.style.transform= `translateX(${-100 * index}vw)`;        

        //change product item too..

        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent="Rwf " + choosenProduct.price;
        currentProductDesc.textContent=choosenProduct.desc;
        currentProductImg.src="images/" + choosenProduct.colors[0].img;
        currentColors.forEach((color, index) => {
            color.style.backgroundColor= choosenProduct.colors[index].code;
        });
        // end of product editing
    });
});

//change current imge..
currentColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentColors.forEach(dot=>{dot.style.padding="0px";});
        color.style.padding="5px";
        currentProductImg.src= "images/" + choosenProduct.colors[index].img;
    })
})

//change sizes
currentSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentSizes.forEach(size => {
            size.style.backgroundColor= "transparent";
            size.style.color= "var(--color-subtitle)";
        })
        size.style.backgroundColor=" var(--color-pars)";
        size.style.color=" var(--bs-light)";
    });
});


//payments buttons

const form= document.querySelector(".payment");
const pay= document.querySelector(".payButton");
const checkout= document.querySelector(".payBtn");
const closeBtn= document.querySelector(".closeBtn");
const productSection= document.querySelector(".product");
pay.addEventListener("click", () => {
    form.style.display="flex";
});
checkout.addEventListener("click", () => {
    form.style.display="none";
});
closeBtn.addEventListener("click", () => {
    form.style.display="none";
});
productSection.addEventListener("click", () => {
    form.style.animation="bounce 0.1s 4";
});