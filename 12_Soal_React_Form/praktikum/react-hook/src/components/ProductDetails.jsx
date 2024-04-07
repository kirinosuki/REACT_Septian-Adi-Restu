import { React, useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Image from "../assets/img.png";

const ProductDetails = () => {

    // State for change Language
    const [language, setLanguage] = useState("en");

    // State for Detail Product
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [productFreshness, setProductFreshness] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productPrice, setProductPrice] = useState("");

    // State for Delete Popup Modals
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    // State for Edit Product
    const [editingProduct, setEditingProduct] = useState(null);

    // Regex Validation
    const priceRegex = /^[1-9]\d*(\.\d+)?$/;
    const nameRegex = /^[A-Za-z0-9\s\-']+$/;

    
    // Random Number Func
    const randomNumber = () => {
        const number = Math.floor(Math.random() * 100);
        console.log(number);
    };

    // Article Object
    const article = {
        title: {
            id: "Buat Akun",
            en: "Create Account",
        },
        description: {
            id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
            en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
        },
    };

    // Handle Language
    const handleLanguage = () => {
        const newLanguage = language === 'en' ? 'id' : 'en';
        setLanguage(newLanguage);
    };

    // Handle Image File
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const allowedExtensions = /(\.PNG)$/i;
        if (!allowedExtensions.exec(file.name)) {
            alert('File harus berupa gambar dengan ekstensi .PNG');
            return;
        }
        setProductImage(file);
    };

    // Handle Submit Form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Alert if input product is not fill
        if (!productName || !productCategory || !productImage || !productFreshness || !productDesc || !productPrice) {
            alert('Input not Fill');
            return;
        }

        // Validation Product Name
        const isValidName = nameRegex.test(productName)
        if (!isValidName) {
            alert('Masukan Nama Dengan Benar!');
            return;
        }

        // Validation Product Price
        const isValidPrice = priceRegex.test(productPrice);
        if (!isValidPrice) {
            alert('Price is more than 0');
            return;
        } 

        // Add Product
        const newProduct = {
            id: editingProduct ? editingProduct.id : products.length + 1,
            name: productName,
            category: productCategory,
            image: productImage,
            freshness: productFreshness,
            description: productDesc,
            price: productPrice,
        };

        // Edit Product
        if (editingProduct !== null) {
            const editedProductIndex = products.findIndex((product) => product.id === editingProduct.id);
            const updatedProducts = [...products];
            updatedProducts[editedProductIndex] = newProduct;
            setProducts(updatedProducts);
            setEditingProduct(null);
            // localStorage.setItem('products', JSON.stringify(updatedProducts));
        } else {
            setProducts([...products, newProduct]);
            // localStorage.setItem('products', JSON.stringify([...products, newProduct]));
        }

        setProductName("");
        setProductCategory("");
        setProductImage(null)
        setProductFreshness("");
        setProductDesc("");
        setProductPrice("");
    };

    // Handle Edit Product
    const handleEdit = (product) => {

        setProductName(product.name);
        setProductCategory(product.category);
        setProductFreshness(product.freshness);
        setProductDesc(product.description);
        setProductPrice(product.price);
        setProductImage(product.image);

        setEditingProduct(product);
    };

    // Handle Delete Product
    const handleDelete = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        // localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    // Show Modal
    const showDeleteModal = (product) => {
        setProductToDelete(product);
        setIsDeleteModalVisible(true);
    };

    // Cancel Confirmation on Modal
    const cancelDeleteModal = () => {
        setIsDeleteModalVisible(false);
        setProductToDelete(null);
    };

    // Delete Confirmation on Modal
    const confirmDeletion = () => {
        if (productToDelete) {
            handleDelete(productToDelete.id);
            cancelDeleteModal();
        }
    };

    return (
        <section className="pt-10">
        <div className="container mx-auto">
            <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
                <div className="col-start-2 col-end-6 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10">
                    {/* Image & Title */}
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <img src={Image} alt="image" />
                        <h1 className="font-bold text-4xl leading-10">
                            {language === 'en' ? article.title.en : article.title.id}
                        </h1>
                    </div>

                    {/* Desc */}
                    <div className="text-center mt-4 md:mt-8">
                        <p className="mx-auto text-sm lg:text-base lg:leading-8">
                            {language === 'en' ? article.description.en : article.description.id}
                        </p>
                    </div>

                    {/* Change Language */}
                    <div className="mt-4 md:mt-8">
                        <button
                            onClick={handleLanguage}
                            type="button"
                            className="text-white bg-[#0D6EFD] hover:bg-blue-800 focus:ring-4 focus:ring-[#0D6EFD] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        >
                            Change to {language === 'en' ? 'Indonesia' : 'English'}
                        </button>
                    </div>

                    {/* Form */}
                    <div className="mt-2 md:mt-6">
                        <h2 className="text-2xl font-medium leading-7">Detail Product</h2>
                        <form className="mt-4 md:mt-6" noValidate onSubmit={handleSubmit}>
                            {/* Product Name */}
                            <div className="mb-4">
                                <label
                                    for="product-name"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Product Name
                                </label>
                                <input
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    id="product-name"
                                    type="text"
                                    name="product-name"
                                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${productName.length > 25 ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {productName.length > 25 && <p className="text-red-500 text-sm">Last Name must not exceed 25 characters.</p>}
                            </div>

                            {/* Product Category */}
                            <div className="mb-4">
                                <label
                                    for="product-category"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Product Category
                                </label>
                                <select
                                    value={productCategory}
                                    onChange={(e) => setProductCategory(e.target.value)}
                                    id="product-category"
                                    name="product-category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5"
                                >
                                    <option selected>Choose</option>
                                    <option value="shirt">Shirt</option>
                                    <option value="jacket">Jacket</option>
                                </select>
                            </div>

                            {/* Product Image */}
                            <div className="mb-4">
                                <label
                                    for="product-image"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Product Image
                                </label>
                                <input
                                    onChange={handleImageChange}
                                    id="product-image"
                                    type="file"
                                    name="product-image"
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                />
                            </div>

                            {/* Product Freshness */}
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    Product Freshness
                                </label>
                                <div className="flex items-center">
                                    <input
                                        value="Brand New"
                                        onChange={(e) => setProductFreshness(e.target.value)}
                                        type="radio"
                                        name="product-freshness"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]"
                                    />
                                    <label
                                        for="brand-new"
                                        className="ml-2 text-sm font-medium text-gray-900"
                                    >
                                        Brand New
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        value="Second Hank"
                                        onChange={(e) => setProductFreshness(e.target.value)}
                                        type="radio"
                                        name="product-freshness"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]"
                                    />
                                    <label
                                        for="second-hank"
                                        className="ml-2 text-sm font-medium text-gray-900"
                                    >
                                        Second Hank
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        value="Refurbished"
                                        onChange={(e) => setProductFreshness(e.target.value)}
                                        type="radio"
                                        name="product-freshness"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]"
                                    />
                                    <label
                                        for="refurbished"
                                        className="ml-2 text-sm font-medium text-gray-900"
                                    >
                                        Refurbished
                                    </label>
                                </div>
                            </div>

                            {/* Product Description */}
                            <div className="mb-4">
                                <label
                                    for="product-description"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Product Description
                                </label>
                                <textarea
                                    value={productDesc}
                                    onChange={(e) => setProductDesc(e.target.value)}
                                    id="product-description"
                                    name="product-description"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#0D6EFD] focus:border-[#0D6EFD]"
                                ></textarea>
                            </div>

                            {/* Product Price */}
                            <div className="mb-4">
                                <label
                                    for="product-price"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Product Price
                                </label>
                                <input
                                    value={productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}
                                    id="product-price"
                                    type="number"
                                    placeholder="$ 100"
                                    min="1"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5"
                                />
                            </div>

                            {/* Button Submit */}
                            <div className="mb-4">
                                <button
                                    id="btn-submit"
                                    type="submit"
                                    className="w-full text-white bg-[#0D6EFD] hover:bg-blue-800 focus:ring-4 focus:ring-[#0D6EFD] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="my-8 w-full md:w-4/5 mx-auto">
                <h2 className="text-2xl font-medium leading-7 text-center">
                    List Product
                </h2>
                <input
                    type="text"
                    className="mt-6 block w-[90%] md:w-full mx-auto p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    id="input-search"
                    placeholder="Search by Username"
                />
                <div className="w-[90%] md:w-full mx-auto flex justify-end mt-4">
                    <button
                        onClick={randomNumber}
                        id="btn-search"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Search
                    </button>
                </div>
                <div className="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-white uppercase bg-[#0D6EFD]">
                            <tr >
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Freshness
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody id="table-product">
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-6 py-4">
                                        <Link to={`/products/${product.id}`}>{product.id}</Link>
                                    </td>
                                    <td className="px-6 py-4">{product.name}</td>
                                    <td className="px-6 py-4">{product.category}</td>
                                    <td className="px-6 py-4">
                                        <img
                                            src={URL.createObjectURL(product.image)}
                                            alt='Product'
                                            className='w-10 h-auto'
                                        />
                                    </td>
                                    <td className="px-6 py-4">{product.freshness}</td>
                                    <td className="px-6 py-4">{product.description}</td>
                                    <td className="px-6 py-4">{product.price}</td>
                                    <td className="px-8 py-4 flex items-center gap-4">
                                        <button type="" onClick={() => showDeleteModal(product)} className='px-2 py-1 bg-red-500 text-white rounded'>Delete</button>
                                        <button type="" onClick={() => handleEdit(product)} className='px-2 py-1 bg-green-500 text-white rounded'>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Modals */}
                    {isDeleteModalVisible && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="fixed inset-0 bg-black opacity-30"></div>
                            <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                                <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                                <p className="text-gray-700 mb-4">
                                    Delete This Product?
                                </p>
                                <div className="flex justify-end">
                                    <button onClick={confirmDeletion} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2">Yes</button>
                                    <button onClick={cancelDeleteModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">No</button>
                                </div>
                            </div>
                        </div>
                     )}
                </div>
            </div>
        </div>
    </section>
    );
};

export default ProductDetails;