import React from 'react';

export default function QuoteBreak() {
  const imageUrl = "https://images.unsplash.com/photo-1446126102442-f6b2b73257fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDI1Nnx8ZmFybXxlbnwxfHx8fDE2OTE1MzYwMjd8MA&ixlib=rb-4.0.3&q=80&w=1000"; // Replace with your image URL

  return (
<div className="h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center p-4 bg-cover bg-no-repeat bg-center" 
     style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="flex flex-col text-center space-y-4 w-3/4 tracking-wider overflow-hidden text-white " style={{ textShadow: '2px 2px 2px black' }}>
        <h1 className='text-4xl'>"They are really doing great things here."</h1>
        <p className='text-2xl'>- quote source</p>
    </div>
</div>
  );
}
