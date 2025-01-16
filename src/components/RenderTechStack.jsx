import React from "react";

const RenderTechStack = ({ title, data }) => {
  return (
 <section className="md:py-4 space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="h-0.5 w-3/5 bg-secondary"></div>
      </div>
      <div id="tech-stack-wrapper" className="grid grid-cols-3 md:grid-cols-5 gap-2 w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full bg-opacity-50 bg-tertiary p-2 rounded-md h-fit"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full aspect-square object-contain"
              draggable="false"
      
              width="100"  
              height="100"

              style={{ objectFit: "contain" }}
            />
            <p className="text-xs text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RenderTechStack;
