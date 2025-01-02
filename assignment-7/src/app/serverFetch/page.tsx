import Link from "next/link";

interface Product {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

async function fetchProductList() {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
      <div className="relative"></div>
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900 truncate mb-2">
          {product.name}
        </h2>
        <p className="text-gray-700 text-sm mb-4">{product.type}</p>
        <p className="text-gray-700 text-sm mb-4">
          {product.available ? "Available" : "Out of Stock"}
        </p>
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

export default async function ProductList() {
  let products: Product[] = [];
  try {
    products = await fetchProductList();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <div className="container bg-gray-50 mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        Explore Our Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-2xl text-red-500">
            No books found.
          </div>
        )}
      </div>
    </div>
  );
}
