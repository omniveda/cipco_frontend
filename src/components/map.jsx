import map from '../assets/images/map.png';

export default function Map(){
    return(
        <div className='px-[100px]'> 
                <img src={map} className='opacity-[0.5] w-[100%] h-[100%] ' alt="" />
            </div>
    );
}