var clothingArr = [
    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/nlEWmj5HqwWESIxkKDhVceuTWZQPptDY-25_large.jpg?v=1670890443",
        brand: "BALENCIAGA",
        name: " BALENCIAGA MEN MID-RISE FIT 3 STRAIGHT LEG JEANS",
        gender: "Men",
        price: "33.00-41.00"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411193082_RLLZ_2_large.jpg?v=1671297917",
        brand: "LEVI'S",
        name: "501 WOMEN BUTTON FLY DISTRESSED STRAIGHT LEG JEANS",
        gender: "Women",
        price: "32.99-42.99"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010885217_RLLZ_2_large.jpg?v=1671105511",
        brand: "BALENCIAGA",
        name: "BALENCIAGA JEANS ACE CALEB SKINNY JEAN",
        gender: "Men",
        price: "55.99"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411758982_RLLZ_2_large.jpg?v=1671721232",
        gender: "Women",
        brand: "7 FOR ALL MANKIND",
        name: "7 FOR ALL MANKIND KIMMIE HORIZON DARK INDIGO STRAIGHT JEAN",
        price: "78.99"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050174628_RLLZ_2_large.jpg?v=1670875754",
        brand: "KAY UNGER",
        name: "KAY UNGER GINA JUMPSUIT",
        gender: "Women",
        price: "179.99"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050113466_RLLZ_2_large.jpg?v=1671692146",
        brand: "HALSTON",
        name: "HALSTON KATHRYN TWIST JUMPSUIT",
        gender: "Women",
        price: "224.44"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050304778_RLLZ_2_large.jpg?v=1671347234",
        brand: "HALSTON",
        name: "HALSTON ZORA JUMPSUIT",
        gender: "Women",
        price: "169.99"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1050174630_RLLZ_2_large.jpg?v=1669916283",
        brand: "KAY UNGER",
        name: "KAY UNGER GINA WALK THRU JUMPSUIT",
        gender: "Women",
        price: "172.99"
    }
]
let count=document.getElementById("clothing1").innerText=` Total dresses-${clothingArr.length}`

let women = document.getElementById("women");
let men = document.getElementById("men");
let kay_brand=document.getElementById("kay");
let halston_brand=document.getElementById("halston");
let balenciaga_brand=document.getElementById("balenciaga");

women.addEventListener("change", ()=>{
    
    let womenValue = document.getElementById("women").value;
   
   let clothFilterWomen= clothingArr.filter((elem) =>elem.gender==womenValue)
   
display(clothFilterWomen)
})
men.addEventListener("change",()=>{
    let menValue=document.getElementById("men").value;
    let clothFilterMen= clothingArr.filter((elem) =>elem.gender==menValue)
    
 display(clothFilterMen)
})
kay_brand.addEventListener("change", ()=>{
  let  kayValue=document.getElementById("kay").value;
  let kayFilter=clothingArr.filter((elem)=>elem.brand==kayValue)
  display(kayFilter)
})
halston_brand.addEventListener("change",()=>{
let halstonValue=document.getElementById("halston").value;
let halstonFilter=clothingArr.filter((elem)=>elem.brand==halstonValue)
display(halstonFilter)

})
balenciaga_brand.addEventListener("change", ()=>{
    let balenciagaValue=document.getElementById("balenciaga").value;
    let balenciagaFilter=clothingArr.filter((elem)=>elem.brand==balenciagaValue)
    display(balenciagaFilter)
})

function display(clothingArr) {
    // filter
    let prod=  document.getElementById("products")  
   prod.innerHTML="";

//    filter
   
    clothingArr.map((elem) => {

        var box = document.createElement("div");

        var box = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src", elem.img);

        var brand = document.createElement("p");
        brand.innerText = elem.brand;

        var name = document.createElement("p");
        name.innerText = elem.name;

        var price = document.createElement("p");
        price.innerText = `$ ${elem.price}`;

        box.append(img, brand, name, price);
        document.getElementById("products").append(box)
    })
}
display(clothingArr);
