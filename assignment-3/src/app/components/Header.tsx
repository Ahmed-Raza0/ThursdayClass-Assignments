import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-black text-white p-4 md:p-5 w-full fixed top-0 z-50 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Header</h1>
      <div className="flex space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/" className="hover:underline">
          About
        </Link>
        <Link href="/" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
