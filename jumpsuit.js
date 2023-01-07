var jumpArr=[
{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050174628_RLLZ_2_large.jpg?v=1670875754",
    brand:"KAY UNGER",
    name:"KAY UNGER GINA JUMPSUIT",
    price:179.99
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050113466_RLLZ_2_large.jpg?v=1671692146",
    brand:"HALSTON",
    name:"HALSTON KATHRYN TWIST JUMPSUIT",
    price:224.44
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050304778_RLLZ_2_large.jpg?v=1671347234",
    brand:"HUTCH",
    name:"HUTCH ZORA JUMPSUIT",
    price: 169.99
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050174630_RLLZ_2_large.jpg?v=1669916283",
    brand:"KAY UNGER",
    name:"KAY UNGER GINA WALK THRU JUMPSUIT",
    price: 172.99
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411487976_RLLZ_2_large.jpg?v=1671361570",
    brand:"HUTCH",
    name:"HUTCH CROPPED WIDE JUMPSUIT",
    price: 129.99
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050113497_RLLZ_2_large.jpg?v=1671367869",
    brand:"HALSTON",
    name:"HALSTON RAEGAN JUMPSUIT",
    price: 142.99
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411450351_RLLZ_2_large.jpg?v=1671464783",
    brand:"HUTCH",
    name:"HUTCH JUMPSUIT",
    price: 229.99
},

{
    img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050101045_RLLZ_2_large.jpg?v=1671695173",
    brand:"KAY UNGER",
    name:"KAY UNGER DAPHNE WALK THRU JUMPSUIT",
    price: 149.99
},
]
let jumpCount=document.getElementById("count").innerText=`Total Dresses-${jumpArr.length}`;

let halston_brand = document.getElementById("halston");

let unger_brand = document.getElementById("unger");
let hutch_brand = document.getElementById("hutch");

halston_brand.addEventListener("change", () => {
    let halstonValue = document.getElementById("halston").value;
    let halstonFilter = jumpArr.filter((elem) => elem.brand == halstonValue)
    display(halstonFilter)

})
unger_brand.addEventListener("change", () => {
    let ungerValue = document.getElementById("unger").value;
    let ungerFilter =jumpArr.filter((elem) => elem.brand == ungerValue)
    display(ungerFilter)

})
hutch_brand.addEventListener("change", () => {
    let hutchValue = document.getElementById("hutch").value;
    let hutchFilter = jumpArr.filter((elem) => elem.brand == hutchValue)
    display(hutchFilter)

})


    function display(jumpArr){
            // filter
    let prod = document.getElementById("products")
    prod.innerHTML = "";

    //    filter
        jumpArr.map((elem)=>{

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
    display(jumpArr);
