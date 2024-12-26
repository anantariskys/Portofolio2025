import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';

const ExperienceCard = ({ experience, top  }) => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

    }, []);
  return (
    <div  id='experience-card' className={` ${top ? '-translate-y-1/2' : 'translate-y-1/2'} w-full max-w-full   md:max-w-lg  flex flex-col items-center`}>
      {top ? (
        <>
          <div className="p-2 ">
            <h3 className="text-sm md:text-2xl font-bold">{experience.title}</h3>
            <div className="flex md:flex-row flex-col items-center justify-between">
              <p className=' text-sm'>{experience.company}</p>
              <p className=' text-sm'>{experience.date}</p>
            </div>
            <p className='text-[0.7rem] md:text-base'>{experience.description}</p>
            <p className='text-xs md:text-sm'>{experience.location}</p>
          </div>
          <div className="w-2 h-4 md:h-8 bg-secondary" />
        </>
      ) : (
        <>
          <div className="w-2 h-4 md:h-8 bg-secondary" />
          <div className="p-2">
            <h3 className="text-sm md:text-2xl font-bold">{experience.title}</h3>
            <div className="flex md:flex-row flex-col items-center justify-between">
              <p className=' text-sm'>{experience.company}</p>
              <p className=' text-sm'>{experience.date}</p>
            </div>
            <p className='text-[0.7rem] md:text-base'>{experience.description}</p>
            <p className='text-xs md:text-sm'>{experience.location}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
