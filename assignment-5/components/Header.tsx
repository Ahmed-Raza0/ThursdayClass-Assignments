import { Rye } from 'next/font/google'

const rye = Rye({ weight: '400', subsets: ['latin'] });

const Header = () => {
  return (
    <div className="bg-[#A29875] w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[80px] 2xl:h-[134px]">
      <h1
        className={`font-bold text-[24px] pt-3 sm:text-[30px] md:text-[35px] lg:text-[40px] 2xl:text-[75px] text-white pl-4 sm:pl-6 md:pl-8 lg:pl-[20px] 2xl:pl-[36px] ${rye.className}`}
      >
        MANZZARI
      </h1>
    </div>
  );
};

export default Header;
