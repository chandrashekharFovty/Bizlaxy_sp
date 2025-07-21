import react from 'react';

function Highlights(){

    return (

    <div className="dark:bg-gray-800 dark:text-white flex w-[390px] max-w-full items-center gap-5 text-sm text-[#050505] font-normal whitespace-nowrap text-center tracking-[-0.14px] mt-[19px] z-10">
          {highlightsData.map((item) => (
            <div
              key={item.id}
              className="self-stretch flex flex-col items-center w-[82px] my-auto"
            >
              <img
                src={item.HighlightImg}
                alt={item.title}
                className="aspect-[1] object-contain w-[83px]"
              />
              <div className="text-[#050505] mt-1">{item.title}</div>
            </div>
          ))}
        </div>
        )
}


export default Highlights;