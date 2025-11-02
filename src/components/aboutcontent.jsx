import { useState, useEffect } from 'react';

const data = [
    {id:1, title:"Location", info:"35-36/1, A.B. Road, Pigdamber, 15km from Indore, Madhya Pradesh’s trade capital", svg:<svg xmlns="http://www.w3.org/2000/svg" width="23.333" height="33.333" fill="none" overflow="visible"><g><path d="M 11.667 28.333 C 7.75 25.444 4.826 22.639 2.896 19.917 C 0.965 17.194 0 14.528 0 11.917 C 0 8.444 1.083 5.59 3.25 3.354 C 5.417 1.118 8.222 0 11.667 0 C 15.111 0 17.917 1.118 20.083 3.354 C 22.25 5.59 23.333 8.444 23.333 11.917 C 23.333 14.528 22.368 17.194 20.438 19.917 C 18.507 22.639 15.583 25.444 11.667 28.333 Z M 11.667 15 C 12.583 15 13.368 14.674 14.021 14.021 C 14.674 13.368 15 12.583 15 11.667 C 15 10.75 14.674 9.965 14.021 9.313 C 13.368 8.66 12.583 8.333 11.667 8.333 C 10.75 8.333 9.965 8.66 9.313 9.313 C 8.66 9.965 8.333 10.75 8.333 11.667 C 8.333 12.583 8.66 13.368 9.313 14.021 C 9.965 14.674 10.75 15 11.667 15 Z M 0 33.333 L 0 30 L 23.333 30 L 23.333 33.333 Z" fill="rgb(65,135,12)"></path></g></svg>},
    {id:2, title:"Environmental Focus", info:"Pollution-free environment, designed to prevent contamination from external sources", svg:<svg xmlns="http://www.w3.org/2000/svg" width="33.333" height="31.667" fill="none" overflow="visible"><g><path d="M 4.167 13.333 C 3.444 13.333 2.847 13.097 2.375 12.625 C 1.903 12.153 1.667 11.556 1.667 10.833 C 1.667 10.111 1.903 9.514 2.375 9.042 C 2.847 8.569 3.444 8.333 4.167 8.333 C 4.889 8.333 5.486 8.569 5.958 9.042 C 6.431 9.514 6.667 10.111 6.667 10.833 C 6.667 11.556 6.431 12.153 5.958 12.625 C 5.486 13.097 4.889 13.333 4.167 13.333 Z M 1.667 31.667 L 1.667 23.333 L 0 23.333 L 0 16.667 C 0 16.194 0.16 15.799 0.479 15.479 C 0.799 15.16 1.194 15 1.667 15 L 6.667 15 C 7.139 15 7.535 15.16 7.854 15.479 C 8.174 15.799 8.333 16.194 8.333 16.667 L 8.333 23.333 L 6.667 23.333 L 6.667 28.333 L 20 28.333 L 20 20 L 17.083 20 C 15.111 20 13.438 19.313 12.063 17.938 C 10.688 16.563 10 14.889 10 12.917 C 10 11.444 10.396 10.132 11.188 8.979 C 11.979 7.826 13 6.972 14.25 6.417 C 14.556 4.611 15.396 3.09 16.771 1.854 C 18.146 0.618 19.778 0 21.667 0 C 23.556 0 25.188 0.618 26.563 1.854 C 27.938 3.09 28.778 4.611 29.083 6.417 C 30.333 6.972 31.354 7.826 32.146 8.979 C 32.938 10.132 33.333 11.444 33.333 12.917 C 33.333 14.889 32.646 16.563 31.271 17.938 C 29.896 19.313 28.222 20 26.25 20 L 23.333 20 L 23.333 28.333 L 31.667 28.333 L 31.667 31.667 Z" fill="rgb(65,135,12)"></path></g></svg>},
    {id:3, title:"Segregated Storage Units", info:"Dedicated sections for Raw Materials, Packing Materials, and Finished Goods", svg:<svg xmlns="http://www.w3.org/2000/svg" width="33.333" height="30" fill="none" overflow="visible"><g><path d="M 0 30 L 0 6.667 L 16.667 0 L 33.333 6.667 L 33.333 30 L 23.333 30 L 23.333 16.667 L 10 16.667 L 10 30 Z M 11.667 30 L 11.667 26.667 L 15 26.667 L 15 30 Z M 15 25 L 15 21.667 L 18.333 21.667 L 18.333 25 Z M 18.333 30 L 18.333 26.667 L 21.667 26.667 L 21.667 30 Z" fill="rgb(65,135,12)"></path></g></svg>},
    {id:4, title:"Engineering Support", info:"Supported by a specialized engineering department for comprehensive manufacturing support", svg:<svg xmlns="http://www.w3.org/2000/svg" width="33.25" height="35" fill="none" overflow="visible"><g><path d="M 28.083 34.958 C 27.861 34.958 27.653 34.924 27.458 34.854 C 27.264 34.785 27.083 34.667 26.917 34.5 L 18.417 26 C 18.25 25.833 18.132 25.653 18.063 25.458 C 17.993 25.264 17.958 25.056 17.958 24.833 C 17.958 24.611 17.993 24.403 18.063 24.208 C 18.132 24.014 18.25 23.833 18.417 23.667 L 21.958 20.125 C 22.125 19.958 22.306 19.84 22.5 19.771 C 22.694 19.701 22.903 19.667 23.125 19.667 C 23.347 19.667 23.556 19.701 23.75 19.771 C 23.944 19.84 24.125 19.958 24.292 20.125 L 32.792 28.625 C 32.958 28.792 33.076 28.972 33.146 29.167 C 33.215 29.361 33.25 29.569 33.25 29.792 C 33.25 30.014 33.215 30.222 33.146 30.417 C 33.076 30.611 32.958 30.792 32.792 30.958 L 29.25 34.5 C 29.083 34.667 28.903 34.785 28.708 34.854 C 28.514 34.924 28.306 34.958 28.083 34.958 Z M 5.208 35 C 4.986 35 4.771 34.958 4.563 34.875 C 4.354 34.792 4.167 34.667 4 34.5 L 0.5 31 C 0.333 30.833 0.208 30.646 0.125 30.437 C 0.042 30.229 0 30.014 0 29.792 C 0 29.569 0.042 29.361 0.125 29.167 C 0.208 28.972 0.333 28.792 0.5 28.625 L 9.333 19.792 L 12.875 19.792 L 14.292 18.375 L 7.417 11.5 L 5.042 11.5 L 0 6.458 L 4.708 1.75 L 9.75 6.792 L 9.75 9.167 L 16.625 16.042 L 21.458 11.208 L 19.667 9.417 L 22 7.083 L 17.292 7.083 L 16.125 5.917 L 22.042 0 L 23.208 1.167 L 23.208 5.875 L 25.542 3.542 L 31.458 9.458 C 31.931 9.931 32.292 10.465 32.542 11.062 C 32.792 11.66 32.917 12.292 32.917 12.958 C 32.917 13.625 32.792 14.264 32.542 14.875 C 32.292 15.486 31.931 16.028 31.458 16.5 L 27.917 12.958 L 25.583 15.292 L 23.833 13.542 L 15.208 22.167 L 15.208 25.667 L 6.375 34.5 C 6.208 34.667 6.028 34.792 5.833 34.875 C 5.639 34.958 5.431 35 5.208 35 Z" fill="rgb(65,135,12)"></path></g></svg>}
];


export default function AboutContent(){
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Close menu when switching to desktop
            if (!mobile) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <div className={isMobile?"flex flex-col gap-[100px] mt-[60px]":"flex gap-[100px] mx-[40px] mt-[60px]"}>
      {/* Left column */}
      <div className={isMobile?"flex flex-col gap-[20px] w-[100%]":"flex flex-col gap-[20px] w-[45%]"}>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-start  gap-[10px] bg-[#f5fbf1] px-[20px] py-[20px] rounded-[10px] border border-transparent hover:border-[#3c8c4f]"
          >
            <div className="mr-[10px]">{item.svg}</div>
            <div>
              <div className="font-[600] mb-[14px] text-[18px] text-[#0e0e0e]">{item.title}</div>
              <div className="text-[#444] text-[14px]">{item.info}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Right column */}
      <div className={isMobile?"bg-[#f5fbf1] py-[20px] rounded-[10px] w-[100%]":"bg-[#f5fbf1] px-[40px] py-[40px] rounded-[10px] w-[55%]"}>
        <div className={isMobile?"flex flex-col items-center gap-3 mb-4":"flex items-center gap-3 mb-4"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="66.667" height="66.667" fill="none" overflow="visible"><path d="M 0 66.667 L 0 26.583 L 23.333 16.667 L 23.333 23.333 L 40 16.667 L 40 26.667 L 66.667 26.667 L 66.667 66.667 Z M 30 53.333 L 36.667 53.333 L 36.667 40 L 30 40 Z M 16.667 53.333 L 23.333 53.333 L 23.333 40 L 16.667 40 Z M 43.333 53.333 L 50 53.333 L 50 40 L 43.333 40 Z M 66 21.667 L 50.583 21.667 L 53.417 0 L 63.333 0 Z" fill="rgb(65,135,12)"></path></svg>
          <div className={isMobile?"text-[30px] font-[700] pl-[30px] text-[#0e0e0e]":"text-[40px] font-[700] pl-[30px] text-[#0e0e0e]"}>Advanced Facility Systems</div>
        </div>
        <ul className="list-disc list-inside text-[#444] leading-[1.8] text-[18px]">
          <li>Transformer Power–Station for reliable power supply</li>
          <li>Water Storage and Treatment Facility with SS recirculation</li>
          <li>Loop Line System for streamlined processes</li>
          <li>Advanced machinery for precision manufacturing</li>
          <li>Air-handling Units with built-in cooling for temperature and humidity control</li>
          <li>Effluent Treatment Plant for environmental responsibility</li>
        </ul>
      </div>
    </div>
    );
}