export default function WordBreak() {
    return (
      <div className="h-[400px] md:h-[500px] lg:h-[300px] flex justify-center items-center p-4 bg-[#A2998C]">
        {/* Container wrapping the two boxes */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-20 w-3/4 tracking-wider overflow-hidden">
          
          {/* Box 1 */}
          <div className="flex-grow p-4 md:p-10 break-words">
            <p className="text-left text-xl md:text-4xl leading-tight">
              Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Accumsan tortor posuere ac ut.
            </p>
          </div>
  
          {/* Box 2 */}
          <div className="flex-grow p-4 md:p-10 break-words">
            <p className="text-left text-lg md:text-2xl leading-tight">
              Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec, nisi est sit amet facilisis magna etiam tempor.
            </p>
          </div>
        </div>
      </div>
    );
}
