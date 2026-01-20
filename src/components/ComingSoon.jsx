


// import React, { useEffect, useRef, useState } from "react";
// import { Mail, Phone, MapPin } from "lucide-react";
// import logo from "../assets/logo.png";
// import chetifyBg from "../assets/screenshotbg.png";

// const COUNTDOWN_DAYS = 21;

// const ComingSoon = () => {
//   // ✅ target date calculated ONCE
//   const targetDateRef = useRef(
//     new Date(Date.now() + COUNTDOWN_DAYS * 24 * 60 * 60 * 1000)
//   );

//   const calculateTimeLeft = () => {
//     const diff = targetDateRef.current - new Date();

//     if (diff <= 0) {
//       return {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       };
//     }

//     return {
//       days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((diff / (1000 * 60)) % 60),
//       seconds: Math.floor((diff / 1000) % 60),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const TimeUnit = ({ value, label }) => (
//     <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border-b-4  border-b-[#87ac2c] border-white/20 px-6 py-4 rounded-xl min-w-[90px]">
//       <span className="text-3xl md:text-4xl font-bold">
//         {String(value).padStart(2, "0")}
//       </span>
//       <span className="text-[10px] uppercase tracking-widest text-[#7DA33F] font-bold">
//         {label}
//       </span>
//     </div>
//   );

//   return (
//     <div
//       className="relative min-h-screen flex flex-col bg-contain bg-no-repeat bg-center text-white"
//       style={{ backgroundImage: `url(${chetifyBg})`, backgroundColor: "rgb(0,0,0,0.3)" }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}

// <div className="flex items-center justify-between  z-10 px-32">
//                   <div className="w-[170px] h-[170px] ">
//           <img src={logo} alt="Chetify Logo" />
//         </div>
//            <h2 className="text-4xl font-bold uppercase tracking-wider  animate-bounce">
//           Launching <span className="text-[#86ac3c]">Soon</span>
//         </h2>

// </div>

//       <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-4">
//         <div className="flex flex-col absolute right-30 top-10 gap-5 ">
//           <TimeUnit value={timeLeft.days} label="Days" />
//           <TimeUnit value={timeLeft.hours} label="Hours" />
//           <TimeUnit value={timeLeft.minutes} label="Minutes" />
//           <TimeUnit value={timeLeft.seconds} label="Seconds" />
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="relative z-10 bg-[#2C4464]/95 py-3 px-6">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
//           <div className="space-y-2">
//             <p className="font-semibold uppercase tracking-wide">Contact</p>
//             <p className="flex items-center gap-2">
//               <Mail size={16} /> hello@chetify.app
//             </p>
//             <p className="flex items-center gap-2">
//               <Phone size={16} /> +254 722 978 504
//             </p>
//             <p className="flex items-center gap-2">
//               <Phone size={16} /> +254 738 580 777
//             </p>
//           </div>

//           <div className="space-y-2">
//             <p className="font-semibold uppercase tracking-wide">Location</p>
//             <p className="flex items-start gap-2">
//               <MapPin size={16} className="mt-1" />
//               Thuo Gachogo House<br />
//               Westlands Road, Greenway Lane<br />
//               Nairobi
//             </p>
//           </div>

//           <div className="space-y-2 md:text-right">
//             <p className="opacity-90">&copy; 2026 Chetify. All Rights Reserved</p>
//             <p className="italic opacity-70">
//               A product of LogicLeap Africa Technologies Limited
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };


// export default ComingSoon;



import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import chetifyBg from "../assets/screenshotbg.png";

const COUNTDOWN_DAYS = 21;

const ComingSoon = () => {
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
    <div className=" flex flex-col items-center bg-white/10 backdrop-blur-md border-b-4 border-b-[#87ac2c] border-white/20 px-4 py-3 rounded-xl w-[60px] md:min-w-[90px]">
      <span className="text-2xl sm:text-3xl font-bold">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-[#7DA33F] font-bold">
        {label}
      </span>
    </div>
  );

  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover text-white bg-gradient-to-r from-[#f7faf9] to-[bg-gradient-to-r from-[#f7faf9] to-[#354b6b]"
      // style={{
   
      //   backgroundColor: "rgba(0,0,0,0.3)",
      // }}
    >
      {/* Overlay */}
    
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Header */}
      <header className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-32 pt-6 gap-4">
        <img
          src={logo}
          alt="Chetify Logo"
          className="w-[120px] sm:w-[150px] lg:w-[170px]"
        />

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider animate-bounce text-center">
          Launching <span className="text-[#86ac3c]">Soon</span>
        </h2>
      </header>

      {/* Main */}
<main
  className="relative z-10 flex flex-1 items-center justify-center px-4
             bg-cover md:bg-contain bg-no-repeat bg-center"
  style={{ backgroundImage: `url(${chetifyBg})` }}
>


        <div className="flex gap-3 sm:gap-5 mt-10 sm:mt-0
                        sm:absolute sm:right-10 sm:top-24 
                        flex-row sm:flex-col">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative text-black z-10 bg-gradient-to-r from-[#f7faf9] to-[bg-gradient-to-r from-[#f7faf9] to-[#354b6b] py-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 text-sm">
          <div className="space-y-2">
            <p className="font-semibold uppercase tracking-wide">Contact</p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> hello@chetify.app
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +254 722 978 504
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +254 738 580 777
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold uppercase tracking-wide">Location</p>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              Thuo Gachogo House<br />
              Westlands Road, Greenway Lane<br />
              Nairobi
            </p>
          </div>

          <div className="space-y-2 md:text-right text-center">
            <p className="opacity-90">
              &copy; 2026 Chetify. All Rights Reserved
            </p>
            <p className="italic opacity-70">
              A product of LogicLeap Africa Technologies Limited
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;



