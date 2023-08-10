export default function InfoGrid() {
  return (
    <div className="flex flex-col items-center justify-center h-fit-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-20 w-full lg:w-4/5 xl:w-3/4 h-full">

        {/* Box 1 */}
        <div className="flex flex-col justify-center items-start p-8 space-y-10 order-2 md:order-1">
          <h1 className="text-4xl">Transforming Agriculture is Possible. We're Rooted in Progress.</h1>
          <p>
            Nisi est sit amet facilisis magna etiam tempor. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eros in cursus turpis massa. Lectus urna duis convallis convallis tellus id interdum velit. 
          </p>
          <button className="bg-[#D58A29] text-white py-5 px-12 hover:bg-[#CB770B]">Learn More</button>
        </div>

        {/* Box 2 */}
        <div className="bg-blue-300 order-1 md:order-2">
          <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDcxfHxmYXJtfGVufDF8fHx8MTY5MTQzMzQyM3ww&ixlib=rb-4.0.3&q=80&w=1000" alt="Description" className="w-full h-full object-cover"/>
        </div>

        {/* Box 3 */}
        <div className="bg-blue-400 order-3 md:order-3">
          <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDI1fHxmYXJtfGVufDF8fHx8MTY9MTUxNDAxMnww&ixlib=rb-4.0.3&q=80&w=1000" alt="Description" className="w-full h-full object-cover"/>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col justify-center items-start p-8 space-y-10 order-4 md:order-4">
          <h1 className="text-4xl">Ready to sow the seeds of change?</h1>
          <p>
            Nisi est sit amet facilisis magna etiam tempor. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eros in cursus turpis massa. Lectus urna duis convallis convallis tellus id interdum velit.
          </p>
          <button className="bg-[#D58A29] text-white py-5 px-12 hover:bg-[#CB770B]">Learn More</button>
        </div>

      </div>
    </div>
  );
}
