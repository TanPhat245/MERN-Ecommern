
import { v2 as cloudinary } from 'cloudinary'
import productModel from "../models/productModel.js"

//add
const addProduct = async (req,res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller} = req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)
        let imageUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imageUrl,
            date: Date.now(),
            status
        }

        console.log(productData);
        const product = new productModel(productData);
        await product.save()
        res.json({success:true,message:"Đã thêm"})   
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//list
const listProduct = async (req,res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true,products})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//xia
const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Đã xóa"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//thong tin
const singleProduct = async (req,res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
// tình tạng
const updateProductStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        await productModel.findByIdAndUpdate(id, { status });
        res.json({ success: true, message: "Cập nhật trạng thái thành công" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


export {listProduct,addProduct,removeProduct,singleProduct, updateProductStatus};