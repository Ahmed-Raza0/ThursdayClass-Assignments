import Image from "next/image";
import Link from "next/link";

export default function Assignment() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 my-4 bg-white shadow items-center justify-center h-auto w-full p-4">
            <div className="border-2 border-black border-dashed rounded w-full sm:w-1/3">
                <Link href={'https://weather-widget-hazel.vercel.app'}>
                    <Image src="/clock.png" width={300} height={300} alt="Digital Clock" className="w-full h-auto" />
                    <p className="text-center hover:text-black">Digital Clock</p>
                </Link>
            </div>
            <div className="border-2 border-black border-dotted rounded w-full sm:w-1/3">
                <Link href={"https://simple-calculator-peach-nine.vercel.app"}>
                    <Image src="/calculator.jpg" width={300} height={300} alt="Simple Calculator" className="w-full h-auto" />
                    <p className="text-center hover:text-black">Simple Calculator</p>
                </Link>
            </div>
            <div className="border-2 border-black border-double rounded w-full sm:w-1/3">
                <Link href={"https://digital-clock-beryl-psi.vercel.app"}>
                    <Image src="/weather.jpg" width={300} height={300} alt="Weather Widget" className="w-full h-auto" />
                    <p className="text-center hover:text-black">Weather Widget</p>
                </Link>
            </div>
        </div>
    );
}
