import Link from "next/link";
import Image from "next/image";
import { client } from "../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source);
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

async function fetchProductList() {
  const products = await client.fetch(`*[_type == "products"]`);
  return products;
}

export default async function ProductList() {
  let products: Product[] = [];
  try {
    products = await fetchProductList();
  } catch (error) {
    console.error("Failed to fetch products", error);
  }

  return (
    <div className="container bg-gray-50 mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-2xl text-red-500">
            please add product.
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const maxDescriptionLength = 120;
  const description =
    product.description.length > maxDescriptionLength
      ? product.description.substring(0, maxDescriptionLength) + "..."
      : product.description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
      <div className="relative">
        <Image
          src={urlFor(product.image).width(1920).height(1280).url()}
          alt={product.title}
          width={200}
          height={200}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-lg font-bold">{product.title}</p>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900 truncate mb-2">
          {product.title}
        </h2>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-green-600">
            ${product.price.toFixed(2)}
          </p>
          <div className="text-yellow-500 flex items-center">
            <span className="text-sm font-medium mr-1">{product.rating}</span>
            <span>&#9733;</span>
          </div>
        </div>
      </div>
      <Link
        href={`#`}
        className="block w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-3 mt-2 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
      >
        View Details
      </Link>
    </div>
  );
}
