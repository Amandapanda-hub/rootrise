import React from 'react'

export default function AboutHero() {
  return (
    <div className="relative h-[60vh] bg-center bg-cover z-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586268290052-b424b6c9994e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDIwMXx8ZmFybXxlbnwxfHx8fDE2OTE1MzUzNjh8MA&ixlib=rb-4.0.3&q=80&w=1000)' }}>
      {/* Large centered container with space around */}
      <div className="absolute inset-10 md:inset-20 lg:inset-32 flex items-end mb-24 md:mb-12 lg:mb-8 xl:mb-4">
        {/* Container for content that will adjust its left-padding */}
        <div className="pl-0 md:pl-24 lg:pl-48 xl:pl-72">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4 w-3/4 break-words" style={{ textShadow: '2px 2px 2px black' }}>Since 1965, we've been at the forefront of every major sustainable farming breakthrough.</h1>
        </div>
      </div>
    </div>
  )
}
