import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import facility1 from '../assets/images/facility(1).png';
import facility2 from '../assets/images/facility(2).png';
import facility3 from '../assets/images/facility(3).png';

const images = [
  facility1
, facility2, facility3
];

export default function Slider(){
    return(
        <div>
            <div className='text-[40px] font-[600]'>Our Facilities</div>
            <div className="mt-[40px]">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-[20px]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Facility ${index + 1}`}
                  className="rounded-[20px] w-full object-cover h-[400px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
          </div>
          
    );
}