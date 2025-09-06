const sampleProducts = [
    {
        name: "Classic Fit Trouser",
        brand: "Raymond",
        price: 2499,
        description: "A classic-fit formal trouser made with premium fabric for all-day comfort.",
        imageUrl: "https://myraymond.com/cdn/shop/products/RMTS05209-G3_20_281_29.webp?v=1709254764"
    },
    {
        name: "Slim Fit Chinos",
        brand: "Levi's",
        price: 3199,
        description: "Stylish slim-fit chinos, perfect for both casual and semi-formal wear.",
        imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPcjNpG-LEEP_q5wPlq0iv-NX28pD_6x5991AkqYAvXOtp5O5rteJgCCZb4qxQagALxzbrUte6Jna1W7i8Cp90YM6T-sa0N2OiThs1MNL3KdYZyJrFGeP0"
    },
    {
        name: "Cotton Crew Neck T-Shirt",
        brand: "Hanes",
        price: 799,
        description: "Soft cotton crew neck t-shirt, available in a variety of colors.",
        imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7QXceNZ7P3l0n7fkZIY7vGXUKNgGvfwF186N-AylCqyAXeImpgiVV5Qff8nTFcZLxOdxKsENGzWaBdoZKOX4mxD5WYTXCBI5hMdddsrspJN-ybfgqlRgL"
    },
    {
        name: "Graphic Printed T-Shirt",
        brand: "Adidas",
        price: 1499,
        description: "Trendy graphic t-shirt with a comfortable fit, ideal for casual outings.",
        imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQrTy4vLwPvYPVSchAPwljgAbPacv2EC60DpoMb3mrdSJYvDX198y311TvxguKE-g-1fo2aWyoGg1GXOsvWZFDH_zybrGX0HCB-arYZhQWvIBiUMh4pXDc3gQ"
    },
    {
        name: "Linen Blend Casual Shirt",
        brand: "Van Heusen",
        price: 1799,
        description: "Casual linen blend shirt for summer comfort and style.",
        imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMMmSbqDjHEzCEkSv-ucb8I82Hgn9YYrizltXnKJe3fUP8wfdn7FV0ZH-rRtR6et6hLFN5tsFRI9ZiK8WU5RRJS8nss00jNj_sxxtcho0"
    },
    {
        name: "Formal Dress Pants",
        brand: "Peter England",
        price: 2899,
        description: "Elegant formal pants perfect for professional attire.",
        imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKYIRuTesGM31JzigRvWYABG3E7IZ0ywzU7fZTy5PJX_kRKKK8VyxRtEAbdO__QtWNiPxRFlmPUzno-1Xhta-GsT7CGyIZLTbjHo0QgeI"
    },
    {
        name: "Basic Black T-Shirt",
        brand: "Nike",
        price: 999,
        description: "A simple and comfortable black t-shirt for everyday wear.",
        imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRC-dJ-viXHJyA53YEByogTOI0RuZxSPmQR9Erb0GaUgAipUetXkiKK3QI_IJ9C41sNR8RKK8w9DqSgzrsxYpbVG9e6to_2YZUk0YLaElx6e-wIZ0aiFQBVBg"
    },
    {
        name: "Polo Shirt with Embroidery",
        brand: "Tommy Hilfiger",
        price: 2499,
        description: "Smart polo shirt with stylish embroidery and breathable fabric.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSabUonYTZykeO7VrmU6hv8egIxUDA4-qjBOkiPq4hZJzU8oUdCXaBK57yKkBaT9tGLoKHlPzlNGMBtKUqj_a4uwNjOAbd33hHvTu1nORO9gaIICygppqTl"
    },
    {
        name: "Chino Shorts",
        brand: "H&M",
        price: 1299,
        description: "Comfortable chino shorts, perfect for casual summer days.",
        imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRMKpQmRFG83qe58bsKJfByvg53atgACF5KNsacY9Oy5bdP2sP0aNR2PBu-Zv3T9LhuWjqYX_HT_LFBZDyBA5o613Tn6ypp-78Wyiua7Q"
    },
    {
        name: "Cotton Sweatshirt",
        brand: "Puma",
        price: 1699,
        description: "Cozy cotton sweatshirt, ideal for casual outings or lounging.",
        imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQpfIydT_jC0YuUTAZp6DH5bAKuCrU_86ui211zA5gzal5HVTjJkiSwxZK8y3mGtS67iTqS4408Oc-ZBAFBh7D-Ja-o8J-4oeVsQ7rhUoXOrp8Qed6rZHiG5k"
    },
    {
        name: "Denim Jacket",
        brand: "Wrangler",
        price: 2299,
        description: "Classic denim jacket for a timeless look.",
        imageUrl: "https://i.pinimg.com/736x/ac/cc/78/accc78eb63b5e62ffd68f5b40b7749a7.jpg"
    },
    {
        name: "Khaki Trousers",
        brand: "Dockers",
        price: 1999,
        description: "Comfortable khaki trousers suitable for both casual and formal wear.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FH-dRq3lrZk5VjB8_5-RYtYk3JvbxFWzTg&s"
    },
];

export default { data: sampleProducts };