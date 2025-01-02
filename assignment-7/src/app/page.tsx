import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center h-screen gap-4"> 
    <Link  className="bg-blue-500 text-white px-4 py-2 rounded-md flex" href="/serverFetch">Server Fetch</Link>
    <Link className="bg-blue-500 text-white px-4 py-2 rounded-md flex" href="/clientFetch">Client Fetch</Link>
    </div>
  );
}
