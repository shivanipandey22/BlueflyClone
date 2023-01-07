var beautyArr=[
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111200945_RLLZ_1_large.jpg?v=1671675910",
        brand:"Dr. Barbara Strum",
        name:"DR.BARBARA STRUM FACE CREAM",
        price:169.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111584950_RLLZ_1_affb86eb-d147-42b7-86f4-da2f5db60a5b_large.jpg?v=1671118390",
        brand:"Gucci",
        name:"GUCCI SKINCARE KIT",
        price:10.99
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/91643772_large.jpg?v=1663072193",
        brand:"Valentino",
        name:"ROCK'N ROSE PERFUME",
        price:28.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111119445_RLLZ_1_381425de-a987-4b6f-97b7-2a453994cd5c_large.jpg?v=1671298265",
        brand:"Valentino",
        name:"VALENTINO BAUME NOIR FACE",
        price:149.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111079709_RLLZ_1_f21bbcd9-07c4-4602-9e27-e6707ce2b282_large.jpg?v=1671755922",
        brand:"Oskia",
        name:"OSKIA EYE CREAM",
        price:29.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111824533_RLLZ_1_62bce042-ee30-42a0-9e67-e100c6fd5b17_large.jpg?v=1671714521",
        brand:"Oskia",
        name:"OSKIA RESTORATION OIL",
        price:69.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/92068927_large.jpg?v=1663072592",
        brand:"Gucci",
        name:"GUCCI BLOOM PERFUME",
        price:212.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111836724_RLLZ_1_3e364a17-2bc6-4c4d-91ae-8d3e5546a873_large.jpg?v=1671151471",
        brand:"Christophe Robin",
        name:"CHRISTOPHE ROBIN TRAVEL HAIRBRUSH",
        price:69.00
    },
]
let count=document.getElementById("beauty1").innerText=` Total Products-${beautyArr.length}`
let gucci_brand=document.getElementById("gucci");
let oskia_brand=document.getElementById("oskia");
let valentino_brand=document.getElementById("valentino");

gucci_brand.addEventListener("change", ()=>{
    let gucciValue=document.getElementById("gucci").value;
    let gucciFilter=beautyArr.filter((elem)=>elem.brand==gucciValue);
    display(gucciFilter)
})

oskia_brand.addEventListener("change", ()=>{
    let oskiaValue=document.getElementById("oskia").value;
    let oskiaFilter=beautyArr.filter((elem)=>elem.brand==oskiaValue);
    display(oskiaFilter)
})

valentino_brand.addEventListener("change", ()=>{
    let valentinoValue=document.getElementById("valentino").value;
    let valentinoFilter=beautyArr.filter((elem)=>elem.brand==valentinoValue);
    display(valentinoFilter)
})

function display(beautyArr){

    let prod=document.getElementById("products");
    prod.innerHTML="";

    beautyArr.map((elem)=>{

       
        var box =document.createElement("div");

        var img=document.createElement("img");
        img.setAttribute("src",elem.img);

        var brand=document.createElement("p");
        brand.innerText=elem.brand;

        var name=document.createElement("p");
        name.innerText=elem.name;

        var price=document.createElement("p");
        price.innerText=`$ ${elem.price}`;

        box.append(img,brand,name,price);
        document.getElementById("products").append(box)
    })
}
 display (beautyArr);