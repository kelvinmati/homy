
import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import chetifyBg from "../assets/screenshotbg.png";
const New = () => {
    const COUNTDOWN_DAYS = 21;
    
  
      const targetDateRef = useRef(
        new Date(Date.now() + COUNTDOWN_DAYS * 24 * 60 * 60 * 1000)
      );
    
      const calculateTimeLeft = () => {
        const diff = targetDateRef.current - new Date();
        if (diff <= 0)
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
        return {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        };
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(
          () => setTimeLeft(calculateTimeLeft()),
          1000
        );
        return () => clearInterval(timer);
      }, []);
    
      const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border-b-4 border-b-[#87ac2c] border-white/20 px-4 py-3 rounded-xl min-w-[70px] sm:min-w-[90px]">
          <span className="text-2xl sm:text-3xl font-bold">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#7DA33F] font-bold">
            {label}
          </span>
        </div>
      );
    
  return (
    <div>
           <header className= "text-white relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-32 pt-6 gap-4 bg-[#b2b2b2] " >
             <img
               src={logo}
               alt="Chetify Logo"
               className="w-[120px] sm:w-[150px] lg:w-[170px] h-[200px]"
             />
     
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider animate-bounce text-center">
               Launching <span className="text-[#86ac3c]">Soon</span>
             </h2>
           </header>

           {/* Hero */}
    <div
      className="relative min-h-screen flex flex-col bg-cover md:bg-contain bg-no-repeat bg-center text-white"
      style={{
        backgroundImage: `url(${chetifyBg})`,
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
          
           </div>
                 {/* <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-4">
        <div className="flex gap-3 sm:gap-5 mt-10 sm:mt-0
                        sm:absolute sm:right-10 sm:top-24
                        flex-row sm:flex-col">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </main> */}


    </div>
  )
}

export default New