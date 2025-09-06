import React, { useEffect, useState } from 'react'
import axios from "../uitls/axios.js";
import { Link } from 'react-router-dom';
import Category from './Category';

export default function ProductList({ query }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("/products")
            .then((res) => (setProducts(res.data)))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`/products/search?query=${query}`)
            .then((res) => (setProducts(res.data)))
            .catch(err => console.log(err))
    }, [query])



    // console.log(products);

    return (
        <>
            <Category />
            <div className='px-10 m-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                    {products.map((product) => (
                        <div key={product._id} className=" p-6 ">
                            <Link to={`/products/${product._id}`} >
                                <div className=" cursor-pointer hover:scale-110 max-w-sm bg-gray-50 rounded-xl  overflow-hidden">
                                    {/* Image */}
                                    <img
                                        src={product.imageUrl}
                                        alt="Card"
                                        className="w-full h-48 object-contain"
                                    />

                                    {/* Content */}
                                    <div className="p-5">
                                        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                                        <h3 className="text-gray-800">Price: {product.price}$</h3>
                                        <p className="text-gray-600 mt-2">
                                            {product.description}
                                        </p>

                                        {/* Button */}
                                        {/* <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                                        Learn More
                                    </button> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
