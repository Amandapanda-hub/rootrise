import React from 'react'

export default function AboutGrid() {
  const boxContents = [
    { title: "Seed it.", description: "Every revolution starts from the ground up. Maybe you envision a world with sustainable farms. Perhaps you want to transition traditional farming into something more eco-friendly. Or you have innovations to ensure food security for all. How you share your mission with the world can inspire change." },
    { title: "Till it.", description: "Every plot of land has potential. Whether you aim to introduce a new farming method, adopt organic practices, or innovate agricultural technology, the narrative you craft can enlighten many." },
    { title: "Nourish it.", description: "Growth is a journey, not a destination. Perhaps you're exploring ways to boost crop yields sustainably, or maybe you're researching drought-resistant plants. No matter the quest, your online story can galvanize a community." },
    { title: "Harvest it.", description: "Reaping the benefits requires commitment. Whether you're sharing successful case studies, promoting sustainable products, or introducing farm-to-table concepts, the way you communicate can foster trust and support." },
    { title: "Green it.", description: "Style isn't just about aesthetics; it's about values. Maybe you're designing sustainable farm layouts, or perhaps you're promoting eco-friendly farm wear. How you present your initiatives online can resonate with like-minded individuals." },
    { title: "Spread it.", description: "Change becomes powerful when it's collective. Perhaps you're launching a campaign to reduce food waste, or you're initiating community farming workshops. The impact of your message is magnified when you share it with the world." },
  ];

  return (
    <div className="text-left px-4 py-20 md:px-8 lg:px-60 lg:py-40">
      <h1 className="mb-20 text-5xl">Cultivate Change.</h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 tracking-widest">
        {boxContents.map((box, index) => (
          <div key={index} className="p-4">
            <h2 className='mb-10 font-bold text-xl'>{box.title}</h2>
            <p className='leading-8'>{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
