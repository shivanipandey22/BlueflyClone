var shoesArr=[
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2021064_large.jpg?v=1669397082",
        brand:"Nike",
        name:"NIKE RED/WHITE DUNK SNEAKERS",
        gender:"Men",
        price:221.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/565646-vje21-9093__2_c253fe07-755b-4c94-8bef-52513d82f0d2_large.jpg?v=1671928937",
        brand:"Bottega Veneta",
        name:"BOTTEGA VENETA MENS SNEAKERS",
        gender:"Men",
        price: 349.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/72ya3sw2-zs240-g89__2_large.jpg?v=1671795062",
        brand:"Versace Jeans Couture",
        name:"VERSACE JEANS COUTURE PRINTED BAROQUE",
        gender:"Women",
        price:149.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/72ya3sw3-zs016-899__2_large.jpg?v=1671852667",
        brand:"Versace Jeans Couture",
        name:"VERSACE JEANS COUTURE PRINTED LOGO STYLE SNEAKERS",
        gender:"Men",
        price:149.00
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311468939_RLLZ_2_large.jpg?v=1669961661",
        brand:"VEJA",
        name:"VEGA CAMPO LEATHER SNEAKER",
        gender:"Women",
        price:119.99
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/0HcVUwbrFBj1HDjw2Ed3LqbFc1p5gHox-25_large.jpg?v=1671840697",
        brand:"Nike",
        name:"AIR HURARACHE WOMEN'S FITNESS SHOES",
        gender:"Women",
        price:44.99
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311682009_RLLZ_2_large.jpg?v=1671751860",
        brand:"On Running",
        name:"ON RUNNING CLOUD 5 SNEAKER",
        gender:"Men",
        price:123.99
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/ow2vLTW54DWvUOtErBD9mgbMFwaWfHMl-25_large.jpg?v=1671886880",
        brand:"Calvin Klein Jeans",
        name:"SIERA WOMEN'S WORKOUT SNEAKER",
        gender:"Women",
        price:86.99
    },

]
let count=document.getElementById("shoes1").innerText=` Total Shoes-${shoesArr.length}`
let women = document.getElementById("women");
let men = document.getElementById("men");
let nike_brand=document.getElementById("nike");
let bottega_brand=document.getElementById("bottega");
let veja_brand=document.getElementById("veja");

women.addEventListener("change", ()=>{
    
    let womenValue = document.getElementById("women").value;
   
   let shoesFilterWomen= shoesArr.filter((elem) =>elem.gender==womenValue)
   
display(shoesFilterWomen)
})
men.addEventListener("change",()=>{
    let menValue=document.getElementById("men").value;
    let shoesFilterMen= shoesArr.filter((elem) =>elem.gender==menValue)
    
 display(shoesFilterMen)
})

nike_brand.addEventListener("change", () => {
    let nikeValue = document.getElementById("nike").value;
    let nikeFilter = shoesArr.filter((elem) => elem.brand == nikeValue)
    display(nikeFilter)

})
veja_brand.addEventListener("change", () => {
    let vejaValue = document.getElementById("veja").value;
    let vejaFilter =shoesArr.filter((elem) => elem.brand == vejaValue)
    display(vejaFilter)

})
bottega_brand.addEventListener("change", () => {
    let bottegaValue = document.getElementById("bottega").value;
    let bottegaFilter = shoesArr.filter((elem) => elem.brand == bottegaValue)
    display(bottegaFilter)

})
function display(shoesArr){
                // filter
                let prod = document.getElementById("products")
                prod.innerHTML = "";
            
                //    filter
    shoesArr.map((elem)=>{

       
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
 display (shoesArr);