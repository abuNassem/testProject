import mongoose from "mongoose";
import Products from "../models/productModel.js"
export const connectDB = () => {
    mongoose.connect(process.env.URL_DB)
        .then(async (res) => {
            await Products.insertMany([
                {
                    "img": "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
                    "brand": "Nike",
                    "title": "Men Running Shoes",
                    "rating": 4.6,
                    "reviews": 320,
                    "sellPrice": 85,
                    "orders": 120,
                    "mrp": 100,
                    "discount": 15,
                    "category": "men"
                },
                {
                    "img": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
                    "brand": "Adidas",
                    "title": "Men Casual T-Shirt",
                    "rating": 4.4,
                    "reviews": 210,
                    "sellPrice": 30,
                    "orders": 90,
                    "mrp": 40,
                    "discount": 25,
                    "category": "men"
                },
                {
                    "img": "https://images.unsplash.com/photo-1509631179647-0177331693ae",
                    "brand": "Zara",
                    "title": "Women Summer Dress",
                    "rating": 4.7,
                    "reviews": 450,
                    "sellPrice": 60,
                    "orders": 150,
                    "mrp": 80,
                    "discount": 25,
                    "category": "women"
                },
                {
                    "img": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
                    "brand": "H&M",
                    "title": "Women Denim Jacket",
                    "rating": 4.5,
                    "reviews": 300,
                    "sellPrice": 70,
                    "orders": 110,
                    "mrp": 95,
                    "discount": 26,
                    "category": "women"
                },
                {
                    "img": "https://images.unsplash.com/photo-1519741497674-611481863552",
                    "brand": "Puma",
                    "title": "Kids Sports Shoes",
                    "rating": 4.3,
                    "reviews": 180,
                    "sellPrice": 40,
                    "orders": 75,
                    "mrp": 55,
                    "discount": 27,
                    "category": "kids"
                },
                {
                    "img": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
                    "brand": "Gap",
                    "title": "Kids Hoodie",
                    "rating": 4.2,
                    "reviews": 140,
                    "sellPrice": 35,
                    "orders": 60,
                    "mrp": 50,
                    "discount": 30,
                    "category": "kids"
                },
                {
                    "img": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
                    "brand": "Levi's",
                    "title": "Men Denim Jeans",
                    "rating": 4.6,
                    "reviews": 390,
                    "sellPrice": 75,
                    "orders": 140,
                    "mrp": 95,
                    "discount": 21,
                    "category": "men"
                },
                {
                    "img": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
                    "brand": "Forever 21",
                    "title": "Women Casual Blouse",
                    "rating": 4.4,
                    "reviews": 260,
                    "sellPrice": 28,
                    "orders": 95,
                    "mrp": 40,
                    "discount": 30,
                    "category": "women"
                },
                {
                    "img": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7",
                    "brand": "Carter's",
                    "title": "Kids Cotton T-Shirt",
                    "rating": 4.3,
                    "reviews": 170,
                    "sellPrice": 18,
                    "orders": 70,
                    "mrp": 25,
                    "discount": 28,
                    "category": "kids"
                },
                {
                    "img": "https://images.unsplash.com/photo-1516822003754-cca485356ecb",
                    "brand": "Under Armour",
                    "title": "Men Training Shorts",
                    "rating": 4.5,
                    "reviews": 230,
                    "sellPrice": 35,
                    "orders": 100,
                    "mrp": 50,
                    "discount": 30,
                    "category": "men"
                }
            ])

            console.log('successfully conection')

        })
        .catch(error => {
            console.log('faild connect db' + error)
        })
}
