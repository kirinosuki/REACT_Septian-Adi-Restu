import React from 'react';
import Image from '../assets/img.png';

const Home = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-start-2 col-end-6 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10">
            <div className="flex flex-col gap-2 justify-center items-center">
              <img src={Image} alt="image" style={{ width: '100px', height: '100px' }} />
              <h1 className="font-bold text-4xl leading-10">Create Product</h1>
            </div>

            <div className="text-center mt-4 md:mt-8">
              <p className="mx-auto text-sm lg:text-base lg:leading-8">
                Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
              </p>
            </div>

            <div className="mt-4 md:mt-8">
              <h2 className="text-2xl font-medium leading-7">Detail Product</h2>
              <form className="mt-4 md:mt-6" novalidate>
                <div className="mb-4">
                  <label for="product-name" className="block mb-2 text-sm font-medium text-gray-900">
                    Product Name
                  </label>
                  <input id="product-name" type="text" name="product-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5" />
                </div>

                <div className="mb-4">
                  <label for="product-category" className="block mb-2 text-sm font-medium text-gray-900">
                    Product Category
                  </label>
                  <select id="product-category" name="product-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5">
                    <option selected>Choose</option>
                    <option value="shirt">Shirt</option>
                    <option value="jacket">Jacket</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label for="product-image" className="block mb-2 text-sm font-medium text-gray-900">
                    Image of Product
                  </label>
                  <input id="product-image" type="file" name="product-image" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Product Freshness</label>
                  <div className="flex items-center">
                    <input type="radio" name="product-freshness" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]" />
                    <label for="brand-new" className="ml-2 text-sm font-medium text-gray-900">
                      Brand New
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="product-freshness" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]" />
                    <label for="second-hank" className="ml-2 text-sm font-medium text-gray-900">
                      Second Hank
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="product-freshness" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]" />
                    <label for="refurbished" className="ml-2 text-sm font-medium text-gray-900">
                      Refurbished
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label for="product-description" className="block mb-2 text-sm font-medium text-gray-900">
                    Additional Description
                  </label>
                  <textarea
                    id="product-description"
                    name="product-description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#0D6EFD] focus:border-[#0D6EFD]"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label for="product-price" className="block mb-2 text-sm font-medium text-gray-900">
                    Product Price
                  </label>
                  <input id="product-price" type="number" placeholder="$ 100" min="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5" />
                </div>

                <div className="mb-4">
                  <button id="btn-submit" type="submit" className="w-full text-white bg-[#0D6EFD] hover:bg-blue-800 focus:ring-4 focus:ring-[#0D6EFD] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
