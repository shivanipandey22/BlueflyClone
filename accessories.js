var accArr=[
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2f35b188-ce65-4312-93c7-5ede15de489f_large.jpg?v=1657161453",
        brand:"Givenchy",
        name:"GIVENCHY BLUE SUNGLASSES",
        price: 92.99,
        gender:"Men"
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/507185-w8187-1000__2_large.jpg?v=1671927477",
        brand:"Stella McCartney",
        name:"STELLA MCCARTNEY WOMENS",
        price: 349.00,
        gender:"Women"
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gv3518-j4249-1__2_large.jpg?v=1671710751",
        brand:"Givenchy",
        name:"GIVENCHY SCARF",
        price: 129.00,
        gender:"Men"
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/570660_201275-2_large.png?v=1671062707",
        brand:"Gucci",
        name:"GUCCI ZUMI WOMEN'S WALLET",
        price: 620.00,
        gender:"Women"
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gv3518-j4181-1__2_large.jpg?v=1671731586",
        brand:"Givenchy",
        name:"GIVENCHY LOGO WOOL SCARF",
        price: 129.00,
        gender:"Women"
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gg0252s-30002481-001__2_large.jpg?v=1670259619",
        brand:"Fendi",
        name:"FENDI ROUND PEARL EYEGLASS",
        price: 129.00,
        gender:"Men"
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Main_0bace028-3d73-4452-91a3-ed01f40879bc_large.jpg?v=1627280413",
        brand:"Gucci",
        name:"AVIATOR SUNGLASSES",
        price: 138.00,
        gender:"Women"
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gv3518-j4172-1__2_large.jpg?v=1671738820",
        brand:"Givenchy",
        name:"GIVENCHY LOGO CHAIN SCARF",
        price: 245.00,
        gender:"Men"
    },  
]
let count=document.getElementById("acc1").innerText=` Total Accessories-${accArr.length}`
let women=document.getElementById("women");
let men=document.getElementById("men");
let gucci=document.getElementById("gucci");
let givenchy=document.getElementById("givenchy");



women.addEventListener("change", ()=>{
    womenValue= document.getElementById("women").value;
    AccFilterWomen= accArr.filter((elem)=>elem.gender==womenValue);
    display(AccFilterWomen);
    
})
men.addEventListener("change", ()=>{
    menValue= document.getElementById("men").value;
    AccFilterMen= accArr.filter((elem)=>elem.gender==menValue);
    display(AccFilterMen);
    
})

gucci.addEventListener("change",()=>{
    let gucciValue=document.getElementById("gucci").value;
    gucciFilter=accArr.filter((elem)=>elem.brand==gucciValue);
    display(gucciFilter)
})

givenchy.addEventListener("change",()=>{
    let givenchyValue=document.getElementById("givenchy").value;
    givenchyFilter=accArr.filter((elem)=>elem.brand==givenchyValue);
    display(givenchyFilter)
})

function display(accArr){
    let prod=document.getElementById("products");
    prod.innerHTML="";
    accArr.map((elem)=>{

        var box= document.createElement("div");
        
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
display(accArr);
    