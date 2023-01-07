let dnmArr = [
    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/nlEWmj5HqwWESIxkKDhVceuTWZQPptDY-25_large.jpg?v=1670890443",
        brand: "RAG & BONE",
        name: "MENS MID-RISE FIT 3 STRAIGHT LEG JEANS",
        gender: "Men",
        price: 33.00
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411193082_RLLZ_2_large.jpg?v=1671297917",
        brand: "LEVI'S",
        name: "501 WOMEN BUTTON FLY DISTRESSED STRAIGHT LEG JEANS",
        gender: "Women",
        price: 32.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010885217_RLLZ_2_large.jpg?v=1671105511",
        brand: "HUDSON ",
        name: "HUDSON JEANS ACE CALEB SKINNY JEAN",
        gender: "Women",
        price: 55.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411758982_RLLZ_2_large.jpg?v=1671721232",
        brand: "7 FOR ALL MANKIND",
        name: "7 FOR ALL MANKIND KIMMIE HORIZON DARK INDIGO STRAIGHT JEAN",
        gender: "Women",
        price: 78.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411193082_RLLZ_2_large.jpg?v=1671297917",
        brand: "HUDSON ",
        name: "HUDSON JEANS BLAIR DOWNBEAT HIGH-RISE SUPER SKINNY ANKLE JEAN",
        gender: "Women",
        price: 54.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/0nx7CZutpeoXndbnXID7T7kBMFoSKIxi-25_large.jpg?v=1671672931",
        brand: "RAG & BONE",
        name: "NINA WOMEN ANKLE HIGH RISE FLARE JEANS",
        gender: "Women",
        price: 72.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411925809_RLLZ_2_large.jpg?v=1671340191",
        brand: "7 FOR ALL MANKIND",
        name: "7 FOR ALL MANKIND COATED PEWTER HIGH-RISE STRAIGHT JEAN",
        gender: "Women",
        price: 74.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411383968_RLLZ_2_large.jpg?v=1670876036",
        brand: "7 FOR ALL MANKIND",
        name: "7 FOR ALL MANKIND JOSEFINA DARK INDIGO SKINNY CROP JEAN",
        gender: "Women",
        price: 124.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/UIWeivQcMFl4wgpB7Ly8pfNy9mqi2znE-25_large.jpg?v=1671583532",
        brand: "JOE'S JEANS",
        name: "JOE'S JEANS WOMEN HIGH RISE ANKLE SKINNY JEANS",
        gender: "Women",
        price: 19.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/srj6CamSxgm4xMWPNuFf4NY49RozUPPV-25_large.jpg?v=1671588454",
        brand: "JOE'S JEANS",
        name: "WOMEN MID-RISE FLAWLESS SKINNY JEANS",
        gender: "Women",
        price: 17.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/hIL7sRCh4ERW0Y8a8AFbPWOHYXoCXw8h-25_50da9c74-a4c5-4f8c-ba41-a1d11660f28a_large.jpg?v=1671569448",
        brand: "HUDSON",
        name: "FARROW WOMEN SKINNY STRETCH ANKLE JEANS",
        gender: "Women",
        price: 19.99 - 24.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/jU0x1Ty34fSMF5KQoBNFkwtqveVv8PF5-25_large.jpg?v=1671470762",
        brand: "RAG & BONE",
        name: "BELLA WOMEN DENIM DISTRESSED FLARE JEANS",
        gender: "Women",
        price: 52.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/BscxNPWq4fGmr6wRSOxFOWqJENACkPV6-25_large.jpg?v=1671618127",
        brand: "RAG & BONE",
        name: "FIT 1 MEN LOW RISE BUTTON FLY SLIM JEANS",
        gender: "Men",
        price: 39.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1fw32TZdXTeK54B3k8epy1XkfsXHwgQ3-25_large.jpg?v=1671608752",
        brand: "RAG & BONE",
        name: "MEN LOW RISE FIT 1 SLIM JEANS",
        gender: "Men",
        price: 47.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/6pN8f4WpFUNeldcrVe9efP3dXXaebRBT-25_large.jpg?v=1671570020",
        brand: "JUST BLACK",
        name: "WOMEN HIGH RISE SLIM SKINNY JEANS",
        gender: "Women",
        price: 19.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/UQCvhHx0aYpKy3Ti6IREo0BBPxservMm-25_large.jpg?v=1671455277",
        brand: "HUDSON",
        name: "WOMEN HIGH RISE SLIM SKINNY JEANS",
        gender: "Women",
        price: 19.99 - 23.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/MU4QlQtlNVE7hp6AOJJ1EmLqqyL2yF10-25_large.jpg?v=1671402164",
        brand: "MAVI",
        name: "ALEXA WOMEN SATEEN MID-RISE SKINNY JEANS",
        gender: "Women",
        price: 35.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/fo1Ikvue52myd8k6YOkDQk2iHmKSqGjr-25_large.jpg?v=1671397431",
        brand: "HUDSON",
        name: "TESS WOMEN HIGH DISTRESSED SKINNY JEANS",
        gender: "Women",
        price: 52.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/LoMXyMZZTmHLVLEBLiWnww1tD3EFk27Z-25_large.jpg?v=1671604013",
        brand: "RAG & BONE",
        name: "MEN MID-RISE FIT 2 SLIM JEANS",
        gender: "Men",
        price: 44.99
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/bQtBXfhU4YQ4bghd59wBCziCXHDU7UU5-25_large.jpg?v=1671651798",
        brand: "RAG & BONE",
        name: "CATE WOMEN MID-RISE ANKLE SKINNY JEANS",
        gender: "Women",
        price: 44.99
    },
];
let count=document.getElementById("denim1").innerText=` Total Products-${dnmArr.length}`
let women = document.getElementById("women");
let men = document.getElementById("men");
let joe_brand = document.getElementById("joe");
let rag_brand = document.getElementById("rag");
let hudson_brand = document.getElementById("hudson");


women.addEventListener("change", () => {

    let womenValue = document.getElementById("women").value;

    let denimFilterWomen = dnmArr.filter((elem) => elem.gender == womenValue)

    display(denimFilterWomen)
})
men.addEventListener("change", () => {
    let menValue = document.getElementById("men").value;
    let denimFilterMen = dnmArr.filter((elem) => elem.gender == menValue)

    display(denimFilterMen)
})
hudson_brand.addEventListener("change", () => {
    let hudsonValue = document.getElementById("hudson").value;
    let hudsonFilter = dnmArr.filter((elem) => elem.brand == hudsonValue)
    display(hudsonFilter)

})
rag_brand.addEventListener("change", () => {
    let ragValue = document.getElementById("rag").value;
    let ragFilter =dnmArr.filter((elem) => elem.brand == ragValue)
    display(ragFilter)

})
joe_brand.addEventListener("change", () => {
    let joeValue = document.getElementById("joe").value;
    let joeFilter = dnmArr.filter((elem) => elem.brand == joeValue)
    display(joeFilter)

})




function display(dnmArr) {
    // filter
    let prod = document.getElementById("products")
    prod.innerHTML = "";

    //    filter
    dnmArr.map((elem) => {

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
display(dnmArr);


