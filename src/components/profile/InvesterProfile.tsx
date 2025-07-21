import Sidebar from '../layout/Sidebar';
import React from 'react'

interface InvesterProfileProps {
  username: string;
  fullName: string;
  bio: string;
  website: string;
  postsCount: string | number;
  followersCount: string | number;
  followingCount: string | number;
  profileImage: string;
  coverImage: string;
}
 const highlightsData = [
  { id: 1, title: "Vision", HighlightImg: "/InvesterHigh1.png" },
  { id: 2, title: "Market", HighlightImg: "/InvesterHigh2.png" },
  { id: 3, title: "Products", HighlightImg: "/InvesterHigh3.png" },
  { id: 4, title: "Growth", HighlightImg: "/InvesterHigh4.png"},
  { id: 5, title: "Add", HighlightImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX///8AAAD+/v4EBAT7+/v4+Pjz8/Pt7e3h4eFZWVlRUVHw8PCBgYGbm5vn5+fKysqysrKsrKzExMS+vr6Hh4d3d3dHR0cyMjKhoaE3NzePj49xcXFiYmItLS0hISEPDw/Y2Ng+Pj4ZGRl550N3AAAJ4UlEQVR4nO1dh5ajIBRVRGOK3TSjkcz/f+QCKmAmmZViCsd3zmZndkO58jr4cJyFFlpooYUWWmihhSwnAMRfyK/g2f9+EQEycTB8vns2mgQGDICtztdB+nsRPn+JAOiffj9VfxWiIouqklEVZQUKVz77etfgE5GBjujPfpJV+3pzOF9bV6D2ej5s6n2VJf6vJp9FsJ/VNo/qw3GMYkzt9Xioo3xLvw4AfOesnxGZVZytm58Bh+d5riei8Fz+D+1Ps85i8gzePe/HtE0345l7IyiP8G3S7btnLRKEgDxcGBfr54z1F62LGJJlBfD9iwQxOQE6HehiSBNpcjihgMjO28EQQQmS8trxkAIY2uZaJsFHiM+2KLtZKUARGpbF+6RnMHdBsWvUQNxTsysCZnpfjYZyBSp/Q2Er1J7Xlyo6nbIUU5adouqyPre/vsbhlIjy7euxYHl1VtFBNB0ijnV5yhGKV4GPFQQx8/gvP1jFCOWnct0jElmTdnSIVkQ9vhgNtdvFpu1nMaZDWYQYRTcl2LvJgP5IfsCYwqK8135dN+2m4L7Ey8DgP6XXW8YRmCPWs3BATFhxEAEiDZC5lRBr8+OIOXt76pXOK6OEzkomD2TYvWE2kaBVdHvUS0Jt6GsAYWFxttEvCW6bSyIpvHjlkktz55LibqNtN8pLCKDLPZafQ4Uot09/olQtYIVYHX7u0VzClzEazA/35n4dhU7HHNPNOPt2GI3cOtLzJn/RwvjZmY7oMUQUCgB3OZgJBPpcxwDH63WK656zYJ7ZC4PjkYOq7VnM6zRZs0N6YT1pi4gj4Q2qEX+2VTCzL4B5fLVnC9I9w0seOHrBL20d5Jdhvfsl2q/mdT2hE9fccJO/bzRa1HRBANVdcXYbde3WsTOr5KzWLjeT+HONYJ+w1GMzKm4QrV2Bg3HvUlZLbkjooE0/WhcTtyff7Bj+qe2VQPesNmgm3wZ3Gq9dLqFY8nPDSS/cW94MvdOh1vE8eTXghLUr2spDYHwgoggOovV063AWRw3Ee5f5yJjFdsC4B0WNKNgNAQIdah+bBkP621YcC2axCDrG05FdhzBqRDTVlhpXc4MQxyMSNA020LO5tXgo7GIIGjOCRjmAPLCiFXj5nPrOXGlVzGl+ehZksy2MqjTcVXIUDP8t9ecLOIjg+OlNcAWOiUlXADrBTQgpmxTOGKnT7AJMB7mhbkZgyBXo5nxhvpjnXlM43QWkKo/+ACdLMdUC6XUYD9OFz0SPSNcZE3785yTTLfC7KJvkkn2JZsA5ucKgmRkPmnSSNAKWHUkvT4/Anv7yZyuSwN4JaJrECBrcg7/hWtndUyzT+8WqAu1utx3CYj19UIpmz1WOu/FN5Gwwp5+uPEgmPowMFqJnaYj/Q7T59GaEN5lng0e/nkwYTsxkQp/HULo5GuwFkpwNdgaPwlNMTHgB2x03lj+pLOcCpx6a17JgAMCLyoznzsAuAUiF1HjkS2RfeuLRiezIWMoiPnaT6q9MXPP+1qH05jBweHPJlSGiGQpJKBxFaxBJ6fmnYZ2xR1YAR1anaIChgxXcS/NOPlDfaCf+ZXzk8VilFCQLYBTIrwTtE2vEHGQXIuP6ZC2ryTrSA8MZDc8jg46yk4bXNGwYmGumphv1wGBX6jqwuduE6g4aVlwRTyrXW7WnogtmW7OVcSP1KAp7/oJmTBT3trXAkLkngm1QjwUg9Vx7uqiusKbM4FEvvIuTemAD+TNpkKrbqslmndPOpqEepOWD9SbOsmogrgsG8/bgPuOPXKUT0o9fc88oVPbANdmMDBsOPXhu7SvYGtICXZnBrNV5VRcMkd1BoWEDgRRkl4Ap+Tw0/G99MEDc2i4VMoIkp7BhXHaE710ZOBwZ8NwNlF8astPP3bJMIzViYGVoRqXns2MiL71Yh5QsgX3UcCPMgCExZ9dJW0p7AWTzkocSO51sggmZcXwW7pLtNFlPBDj5mYu//KY4JxNgAOAq4JwrzCVimXLsrGokY02wGXRC5gW0kXwPwZ5rw0An/6YPhsAJuJ3Yyx93QFxkUq2stQkwWCGlXGiQdOv8xpg00ZmFITBOwkT4Ju+fce//opUVMQUm5oHASbYtrJj5j/T2RgyBgUMKzXMriQlRYQ95uizVmoQpMA4Xmjpk0/wv0W8hth1/0xMZY2ASJsQHxKY5jfJm/BzUyRQYziuNpAaAGTOZe83TOKbArJjhazM5KRYy1jLi9ohMgYEV6yiSS61umcH1FHN/jAyBwWEAi+FLud0NvqbX9FPApFdFzudbCTfdHStjYLg6k8x6o+GEBDm/9iFgUP9Gm+fekFRT9DPkmOv4ERiSzZoUFsjuzxB3/2EkCdi2l+e26P8d8XZCOqR+yJ8YyESNAjiYiSscPImLV3WPpXtbYFpnA5huZS7Bw3ZkZUIhCWyKLuHTlQkuKmC6RFUvMzgUehBy0xTw1Al67GMKPT6LgQEK4aKMUiITHQbfP1wZPN72KDPFaUS6O24fyiIONlXAjJ/67qFsgNF2h1l6tm0hZGimn6QBIwXwBMxo18QsPdsJGoGZmsizDMz/2cz5FjYbp90fKwDnWxTALzBfrZqtMpojMM/cGWdiXvHd7gwm1LINwIeOpvM1jqZjWQhgVXBmVdhsVULDqlSTVUlAa9KzViXOrdrSoGTLZlNHNm0D2rVBa9XW+fhQg4YXYAKM7qEGm46b2HQQyK4jWjYdnrPrWKNlB04/9yiwysHmzz2krcBmn3p8Xq2b8YsNqhUA9MCYerFh/MqJ8pvSumAMvXJi1ctAdr2mdf8C3VveBjT0At2vVxuVSBeMoVcbLXvp1KLXga16UZvS+1+hH8DovULfzeadxQ2CUXEDA4V03l52ol8ZI2Un7guCyIL5pIIglpVqsamIjk3ljSwrPEU+bSkJ5lhUrI32D+/K6BVzl9Er5iujR3wYiwocwlHpSXf+0pOCVjZdepKILisKSkeZvyjoMJTpoqDdSGK5Vnfecq1D5WF3jnKtdCSrCulaVeJ4XHzana/4NKs8PF/xaUpzlgUHvlAWvOt9trLghF5VsL1bnJkLts9eSl+0ZXOX0n/BJQfM7s9+yQGl4fqJfmXc4SYNBdt2d/2E99LrJzqC+YanoF0BzhdeDIKnET65skXKwfmIK1ueXqZT5993mQ6w6ZojQmSkyRdQsd8+8AKqbmYWXQ3m2HRpGxVeMO06vewLrtOb56JD5y0XHTKy4ArKgey6HNTUta20n3eTyQt1341FpO+/6pjT70uo7w3q91xCbdX14FZd3A46c8c8S38VoiKLqpJRFWUFClc++zozvR9Of87wC+Z/R92EGR9xhvo6JJw67vsSfnpMo4n39xg++d+FFlpooYUWWmihhaykf9Q4kOldgOOjAAAAAElFTkSuQmCC" },
];

const Post=[
  { id:1, img:"/InvesterPost1.png" },
  { id:2, img:"/InvesterPost2.png" },
  { id:3, img:"/InvesterPost3.png" },
  { id:4, img:"/InvesterPost4.png" },
  { id:5, img:"/InvesterPost5.png" },
  { id:6, img:"/InvesterPost6.png" },
  { id:7, img:"/InvesterPost7.png" },
  { id:8, img:"/InvesterPost8.png" },
  { id:9, img:"/InvesterPost9.png" },



]

const InvesterProfile: React.FC<InvesterProfileProps> = ({
  username,
  fullName,
  bio,
  website,
  postsCount,
  followersCount,
  followingCount,
  profileImage,
  coverImage,
}) => {
  return (
     <>
     <Sidebar/>
    <div className='ml-[245px]'>
        <div className=" dark:bg-gray-800 dark:text-white flex items-center w-[227px] h-[42px] gap-2 text-2xl text-[#050505] font-bold whitespace-nowrap tracking-[-0.24px]  mt-2 max-md:ml-2.5 z-10">
        <div className="flex text-[#050505] self-stretch gap-2 my-auto w-[167px] font-bold">
          {/* {username} */}
        <h1>tech_nebu</h1><img src="RightMarkInvester.png" className='ml-2 h-6 w-6 object-cover'/>
        </div>
        {/* <img
          src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7eb8167ebc03b067106013d277e8da366e8ec872?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[42px] h-[42px] self-stretch shrink-0 my-auto"
        /> */}
      </div>
      <img
        src="/InvesterCover.png"
        className="w-full h-[400px] max-md:h-48 object-cover"
      />
      <div className="z-10 flex mt-[-68px] w-full flex-col items-stretch pl-[30px] pr-0.5 max-md:max-w-full max-md:pl-5">
        <div className="flex w-full max-w-[1208px] items-stretch gap-[40px_100px] flex-wrap mr-7 max-md:max-w-full max-md:mr-2.5">
          <div className="grow shrink basis-auto max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-full max-w-[10rem] max-md:w-full max-md:ml-0 rounded-xl">
                <img
                  src="/InvesterProfile.png"
                  className="aspect-[1/1] object-contain w-[168px] shadow-[0px_1px_4px_2px_rgba(0,0,0,0.25)] shrink-0 max-w-full max-md:mt-10 rounded-xl"
                />
              </div>
              <div className="w-3/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex items-center gap-[18px] text-[#050505] whitespace-nowrap mt-[88px] max-md:mt-10">
                  <div className="self-stretch flex flex-col items-center justify-center w-[61px] my-auto">
                    <div className="text-[#050505] text-[26px] font-medium tracking-[-0.26px]">
                      {postsCount}
                    </div>
                    <div className="text-[#050505] text-base font-normal tracking-[-0.16px]">
                      <p className='text-center'>106</p>
                      Post
                    </div>
                  </div>
                  <div className="self-stretch w-0 shrink-0 h-[38px] my-auto border-[rgba(178,178,178,1)] border-solid border" />
                  <div className="self-stretch flex flex-col items-center justify-center w-[61px] my-auto">
                    <div className="text-[#050505] text-[26px] font-medium tracking-[-0.26px]">
                      {followersCount}
                    </div>
                    <div className="text-[#050505] text-base font-normal tracking-[-0.16px]">
                           <p className='text-center'>122k</p>
                      Followers
                    </div>
                  </div>
                  <div className="self-stretch w-0 shrink-0 h-[38px] my-auto border-[rgba(178,178,178,1)] border-solid border" />
                  <div className="self-stretch flex flex-col items-center justify-center w-[62px] my-auto">
                    <div className="text-[#050505] text-center text-[26px] font-medium tracking-[-0.26px]">
                      {followingCount}
                    </div>
                    <div className="text-[#050505] text-base font-normal tracking-[-0.16px]">
                           <p className='text-center'>25</p>
                      Following
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="flex items-center gap-2.5 text-base text-[#050505] font-medium text-center tracking-[-0.16px] mt-[97px] max-md:max-w-full max-md:mt-10">
             <button className="text-[#ffff] self-stretch border border-[color:var(--Btn-grdt,#1C4BC4)] bg-blue-700 gap-2.5 whitespace-nowrap my-auto px-8 py-2.5 rounded-[8px] border-solid max-md:px-5">
              Follow
            </button>
            <button className="text-[#050505] self-stretch border border-[color:var(--Btn-grdt,#1C4BC4)] bg-[color:var(--Btn-grdt,#f1e9ff)] gap-2.5 whitespace-nowrap my-auto px-8 py-2.5 rounded-[8px] border-solid max-md:px-5">
              Pitch
            </button>
            <button className="text-[#050505] self-stretch border border-[color:var(--Btn-grdt,#1C4BC4)] bg-[color:var(--Btn-grdt,#f1e9ff)] gap-2.5 whitespace-nowrap my-auto px-8 py-2.5 rounded-[8px] border-solid max-md:px-5">
              Info
            </button>
          </div>
        </div>
        <div className="text-base text-[#050505] font-normal tracking-[-0.16px] mt-5 max-md:max-w-full">
          <div className="text-[#050505] w-[175px] max-w-full text-[22px] font-bold tracking-[-0.22px] rounded-[0px_0px_0px_0px]">
            <p className='font-bold text-xl'>Nebulo Tech</p>
            {fullName}
          </div>
          <div className="text-[#050505] mt-1.5 max-md:max-w-full font-semibold">
            Building cutting-edge digital solutions. Driven by innovation and future-focused technology.
            {bio}
          </div>
          <a href={website} className="text-[#1C4BC4] mt-1.5 block font-medium">
            www.nebulotech.com
            {website}
          </a>
        </div>
        <div className="flex w-[390px] max-w-full items-center gap-5 text-sm text-[#050505] font-normal whitespace-nowrap text-center tracking-[-0.14px] mt-[19px]">
          {highlightsData.map((item) => (
            <div
              key={item.id}
              className="self-stretch flex flex-col items-center w-[82px] my-auto"
            >
              <img
                src={item.HighlightImg}
                alt={item.title}
                className="aspect-[1] object-cover w-[83px] bg-gradient-to-t from-sky-600 to-blue-500 rounded-full"
              />
              <div className="text-[#050505] mt-1">{item.title}</div>
            </div>
          ))}
        </div>
 
<div className="w-full mt-10 px-6">
  <div className="flex justify-between mb-6 bg-gray-300">
  <button className="px-4 py-2 border-b-2 border-blue-700 text-blue-700 font-semibold">POST</button>
  <button className="px-4 py-2 text-gray-500">EDUVID</button>
  <button className="px-4 py-2 text-gray-500">PITCH</button>
  <button className="px-4 py-2 text-gray-500">SHOP</button>
</div>


  <div className="grid grid-cols-3 gap-4">
    {Post.map((item) => (
      <div key={item.id} className="w-full">
        <img
          src={item.img}
          alt={`Post ${item.id}`}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
    ))}
  </div>
</div>

     
      </div>
    </div>
    </>
  )
}

export default InvesterProfile
