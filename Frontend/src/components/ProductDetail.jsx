import axios from '../uitls/axios.js'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetail() {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/products/${id}/`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
    }, [])
    // console.log(product)

    return (
        <>
            <div className="flex justify-center items-center bg-gray-100 px-30 py-8 ">
                <div className="w-full   bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Product Image */}
                    <img
                        src={product.imageUrl}
                        alt="Product"
                        className="w-full h-100 object-contain"
                    />

                    {/* Content */}
                    <div className="p-6">
                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>

                        {/* Description */}
                        <p className="text-gray-600 mt-2">
                            {product.description}
                        </p>

                        {/* Price */}
                        <div className="mt-4 flex items-center ">
                            <span className="text-2xl font-semibold text-green-600">price: ${product.price}</span>
                            <span className="text-sm text-gray-500 line-through">$3,999</span>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex space-x-4">
                            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                                Add to Cart
                            </button>
                            <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition cursor-pointer">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail