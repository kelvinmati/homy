
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import logo from "../assets/logo.png";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 24 hours from now
    const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white px-6 py-4 rounded-xl shadow-lg border-b-4 border-[#7DA33F] min-w-[100px]">
      <span className="text-4xl font-bold text-[#2C4464]">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans text-[#2C4464]">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        
        <div className='h-[200px] w-[200px] p-8'>
          <img src={logo} alt="Chetify Logo" />
        </div>

        <h2 className="text-3xl md:text-3xl font-light mb-8 uppercase ">Something Big is Arriving</h2>

        {/* Countdown Timer */}
        <div className="flex space-x-4 mb-12">
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <Mail className="text-[#7DA33F] mb-4" size={28} />
            <h3 className="font-bold mb-2">Email Us</h3>
            {/* <a href="mailto:hello@chetify.app" className="text-gray-600 hover:text-[#7DA33F] transition-colors">
              hello@chetify.app
            </a> */}
                 <a  className="text-gray-600 hover:text-[#7DA33F] transition-colors">
              hello@chetify.app
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <Phone className="text-[#7DA33F] mb-4" size={28} />
            <h3 className="font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">+254 722 978 504</p>
            <p className="text-gray-600">+254 738 580 777</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <MapPin className="text-[#7DA33F] mb-4" size={28} />
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Thuo Gachogo House, Westlands Road<br />
              Greenway Lane, Nairobi
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C4464] text-white py-8 px-4 text-center">
        <p className="mb-2 opacity-90">&copy; 2026 Chetify. All Rights Reserved.</p>
        <p className="text-sm opacity-70 italic font-light">
          A product of LogicLeap Africa Technologies Limited
        </p>
      </footer>
    </div>
  );
};

export default ComingSoon;