import { Rye } from 'next/font/google'

const rye = Rye({ weight: '400', subsets: ['latin'] })

const Header = () => {
  return (
    <div className="bg-[#A29875] w-[1920px] h-[134px]">
        <h1 className={`text-[75px] text-white pl-[36px] ${rye.className}`} >MANZZARI</h1>
    </div>
  )
}

export default Header