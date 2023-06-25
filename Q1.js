const { log } = require('console');
const http = require('http');
const PORT = 3000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        return res.end("Welcome to Men & Women Dummy Data");
    }
    if (req.url == '/men') {
        let men_data = JSON.stringify([
          {
            "id": 1,
            "name": "Men's T-Shirt",
            "brand": "ABC Apparel",
            "price": 19.99,
            "color": "Blue",
            "size": "L"
          },
          {
            "id": 2,
            "name": "Men's Jeans",
            "brand": "XYZ Denim",
            "price": 49.99,
            "color": "Black",
            "size": "32x32"
          },
          {
            "id": 3,
            "name": "Men's Sneakers",
            "brand": "DEF Footwear",
            "price": 79.99,
            "color": "White",
            "size": "10"
          },
          {
            "id": 4,
            "name": "Men's Watch",
            "brand": "GHI Timepieces",
            "price": 149.99,
            "color": "Silver",
            "size": "One Size"
          },
          {
            "id": 5,
            "name": "Men's Polo Shirt",
            "brand": "JKL Fashion",
            "price": 29.99,
            "color": "Red",
            "size": "M"
          },
          {
            "id": 6,
            "name": "Men's Dress Shoes",
            "brand": "MNO Footwear",
            "price": 99.99,
            "color": "Brown",
            "size": "11"
          },
          {
            "id": 7,
            "name": "Men's Hoodie",
            "brand": "PQR Apparel",
            "price": 39.99,
            "color": "Gray",
            "size": "XL"
          },
          {
            "id": 8,
            "name": "Men's Shorts",
            "brand": "STU Sportswear",
            "price": 24.99,
            "color": "Navy",
            "size": "L"
          },
          {
            "id": 9,
            "name": "Men's Backpack",
            "brand": "VWX Bags",
            "price": 59.99,
            "color": "Black",
            "size": "One Size"
          },
          {
            "id": 10,
            "name": "Men's Cologne",
            "brand": "YZ Fragrances",
            "price": 69.99,
            "color": "N/A",
            "size": "100ml"
          }
        ])
          
        return res.end(men_data)
    }
    if (req.url == 'women') {
        let women_data = JSON.stringify([
          {
            "id": 1,
            "name": "Women's Dress",
            "brand": "ABC Fashion",
            "price": 59.99,
            "color": "Red",
            "size": "S"
          },
          {
            "id": 2,
            "name": "Women's Handbag",
            "brand": "XYZ Accessories",
            "price": 79.99,
            "color": "Black",
            "size": "Medium"
          },
          {
            "id": 3,
            "name": "Women's Sneakers",
            "brand": "DEF Footwear",
            "price": 89.99,
            "color": "White",
            "size": "8"
          },
          {
            "id": 4,
            "name": "Women's Watch",
            "brand": "GHI Timepieces",
            "price": 199.99,
            "color": "Gold",
            "size": "One Size"
          },
          {
            "id": 5,
            "name": "Women's Blouse",
            "brand": "JKL Apparel",
            "price": 39.99,
            "color": "Blue",
            "size": "M"
          },
          {
            "id": 6,
            "name": "Women's Jeans",
            "brand": "MNO Denim",
            "price": 69.99,
            "color": "Black",
            "size": "30x32"
          },
          {
            "id": 7,
            "name": "Women's Cardigan",
            "brand": "PQR Fashion",
            "price": 49.99,
            "color": "Gray",
            "size": "L"
          },
          {
            "id": 8,
            "name": "Women's Sandals",
            "brand": "STU Footwear",
            "price": 59.99,
            "color": "Brown",
            "size": "9"
          },
          {
            "id": 9,
            "name": "Women's Earrings",
            "brand": "VWX Jewelry",
            "price": 29.99,
            "color": "Silver",
            "size": "One Size"
          },
          {
            "id": 10,
            "name": "Women's Perfume",
            "brand": "YZ Fragrances",
            "price": 89.99,
            "color": "N/A",
            "size": "50ml"
          }
        ]
        )

    }
    return res.end("404 Not Found");

}

)

server.listen(PORT, ()=>{
    console.log(`Server is listeneing to connections at ${HOSTNAME}:${PORT}`);
})