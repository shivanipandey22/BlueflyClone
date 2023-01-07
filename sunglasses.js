var sunArr=[
{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gg0595s-30008116-009__2_large.jpg?v=1671731934",
    brand:"GUCCI",
    name:"GUCCI WOMEN'BROWN FRAMES",
    gender:"Women",
    price:149.00
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gg0592s-30008109-001__2_large.jpg?v=1671894990",
    brand:"GUCCI",
    name:"GUCCI WOMEN'S SQUARE BLACK SUNGLASSES",
    gender:"Women",
    price:149.00
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gg0541s-30007825-001__2_large.jpg?v=1671894988",
    brand:"DIOR",
    name:"AVIATOR SUNGLASSES",
    gender:"Men",
    price:138.99
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gg0252s-30002481-001__2_large.jpg?v=1670259619",
    brand:"DIOR",
    name:"DIOR RECTANGULAR SUNGLASSES",
    gender:"Men",
    price:169.00
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/slm13-30001925-005__2_d62f3355-2013-4f97-a1ee-7e2943b16ec2_large.jpg?v=1670259551",
    brand:"SALVATORE FERRAGAMO",
    name:"SALVATORE FERRAGAMO ROUND SUNGLASSES",
    gender:"Men",
    price:79.00
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/slm25k-30002244-005__2_large.jpg?v=1671895008",
    brand:"SAINT LAURENT",
    name:"SAINT LAURENT WOMEN'S ROUND SUNGLASSES",
    gender:"Women",
    price:123.00
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gg0829sa-30009522-003__2_large.jpg?v=1671895516",
    brand:"TOM FORD",
    name:"TOM FORD IVORY BARDOT SUNGLASSES ",
    gender:"Men",
    price:99.99
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/ch0030sa-30009913-002__2_large.jpg?v=1671859972",
    brand:"TOM FORD",
    name:"TOM WOMEN'S FASHION EYEWEAR",
    gender:"Women",
    price:139.00
},
]
let count=document.getElementById("sun1").innerText=` Total Sunglasses-${sunArr.length}`
let women=document.getElementById("women");
let gucci=document.getElementById("gucci");
let dior=document.getElementById("dior");
let tom=document.getElementById("tom");



women.addEventListener("change", ()=>{
    womenValue= document.getElementById("women").value;
    sunFilterWomen= sunArr.filter((elem)=>elem.gender==womenValue);
    display(sunFilterWomen);
    
})

gucci.addEventListener("change",()=>{
    let gucciValue=document.getElementById("gucci").value;
    gucciFilter=sunArr.filter((elem)=>elem.brand==gucciValue);
    display(gucciFilter)
})

dior.addEventListener("change",()=>{
    let diorValue=document.getElementById("dior").value;
    diorFilter=sunArr.filter((elem)=>elem.brand==diorValue);
    display(diorFilter)
})

tom.addEventListener("change",()=>{
    let tomValue=document.getElementById("tom").value;
    tomFilter=sunArr.filter((elem)=>elem.brand==tomValue);
    display(tomFilter)
})

function display(sunArr){
    let prod=document.getElementById("products");
    prod.innerHTML="";
    sunArr.map((elem)=>{

       
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
 display (sunArr);