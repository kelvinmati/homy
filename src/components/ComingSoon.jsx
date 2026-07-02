import React, { useState } from "react";
import {
  Search,
  Home,
  MessageCircle,
  ShieldCheck,
  Bell,
  ChevronDown,
  MapPin,
  User,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

/**
 * Homy — "Coming Soon" landing page
 * React + Tailwind CSS
 *
 * Single-file, self-contained component. Drop into any React app with
 * Tailwind configured. Uses lucide-react for icons.
 */

const FEATURES = [
  { icon: Search, label: "Find homes\nthat fit you" },
  { icon: Home, label: "Verified & quality\nlistings" },
  { icon: MessageCircle, label: "Direct & seamless\ncommunication" },
  { icon: ShieldCheck, label: "Secure, simple\n& reliable" },
];

const LISTINGS = [
  {
    title: "2 Bed Apartment",
    area: "Kahawa West",
    price: "KSh 28,000",
    gradient: "from-stone-300 to-stone-400",
  },
];

const NEARBY = [
  { gradient: "from-emerald-100 to-emerald-200" },
  { gradient: "from-amber-100 to-amber-200" },
];

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* phone frame */}
      <div className="relative rounded-[2.5rem] border-4 border-white/10 bg-[#054429] p-2 shadow-2xl shadow-black/50 ring-1 ring-white/5">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#054429]" />
        <div className="overflow-hidden rounded-[2rem] bg-[#06502F]">
          <div className="h-[520px] overflow-hidden px-4 pb-4 pt-8">
            {/* app header */}
            <div className="flex items-center justify-between">
              <span
                className="text-xl text-lime-300"
                style={{ fontFamily: "'Comic Sans MS', cursive" }}
              >
                homy
              </span>
              <Bell className="h-4 w-4 text-stone-300" />
            </div>

            <button className="mt-3 flex items-center gap-1 text-xs text-stone-200">
              Along Thika Road
              <ChevronDown className="h-3 w-3" />
            </button>

            {/* search bar */}
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
              <Search className="h-3.5 w-3.5 shrink-0 text-stone-400" />
              <span className="text-[11px] text-stone-400">
                Search for a home, area or keyword
              </span>
            </div>

            {/* recommended */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-200">
                Recommended for you
              </span>
            </div>

            <div className="mt-2 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
              {/* <div
                className={`h-28 w-full bg-gradient-to-br ${LISTINGS[0].gradient}`}
              /> */}

              <div className="h-28" >
                <img src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D" alt="House" className="h-full w-full object-cover" />


              </div>
              <div className="flex items-center justify-between px-2.5 py-2">
                <div>
                  <p className="text-[11px] font-medium text-white">
                    {LISTINGS[0].title}
                  </p>
                  <p className="text-[10px] text-stone-400">
                    {LISTINGS[0].area}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-semibold text-lime-300">
                    {LISTINGS[0].price}
                  </p>
                  <p className="text-[9px] text-stone-400">/month</p>
                </div>
              </div>
            </div>

            {/* near you */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-200">
                Near you
              </span>
              <span className="flex items-center gap-1 text-[10px] text-lime-300">
                See all <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              {/* {NEARBY.map((n, i) => (
                <div
                  key={i}
                  className={`h-20 rounded-xl bg-gradient-to-br ${n.gradient}`}
                />
              ))} */}

              <div className="h-20">
<img src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D" alt="House" className="h-full w-full rounded-xl object-cover" />


              </div>
              <div className="h-20">
<img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D" alt="House" className="h-full w-full rounded-xl object-cover" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundArt() {
  // Faint linear sketch of rooftops / trees / clouds, purely decorative.
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      viewBox="0 0 1400 900"
      fill="none"
      preserveAspectRatio="xMidYMax slice"
    >
      <g stroke="#9CFF57" strokeWidth="2">
        {/* left cluster */}
        <path d="M40 620 L40 520 L110 460 L180 520 L180 620" />
        <path d="M180 620 L180 480 L260 420 L340 480 L340 620" />
        <path d="M250 420 L250 380 L280 380 L280 420" />
        <circle cx="120" cy="350" r="26" />
        <circle cx="155" cy="335" r="18" />
        {/* right cluster */}
        <path d="M1060 620 L1060 500 L1140 440 L1220 500 L1220 620" />
        <path d="M1140 440 L1140 400 L1160 400 L1160 440" />
        <path d="M1240 620 L1240 540 L1300 500 L1360 540 L1360 620" />
        <circle cx="1280" cy="380" r="24" />
        <circle cx="1310" cy="365" r="16" />
      </g>
    </svg>
  );
}

export default function ComingSoon() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04442a] text-white">
      <BackgroundArt />

      <div className="relative mx-auto max-w-5xl px-6 py-10 sm:py-20">
        {/* eyebrow badge */}
        {/* <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/5 px-4 py-1.5 text-xs font-medium text-lime-300">
            <span aria-hidden>✦</span> Something great is coming
          </span>
        </div> */}


        {/* headline */}
        <h1 className=" text-center text-4xl font-bold leading-tight sm:text-5xl">
          Curious enough?
          <br />
          Stay tuned!
        </h1>

        {/* wordmark */}
        <p
          className="mt-3 text-center text-6xl text-lime-300 sm:text-7xl"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          homy
        </p>

        {/* subtitle */}
        <p className="mx-auto mt-5 max-w-xl text-center text-sm text-stone-300 sm:text-base">
          Homy is making it easier for tenants to find the right home and for
          property owners to connect with the right people.
        </p>

        {/* feature row */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-y-8 sm:grid-cols-4">
          {FEATURES.map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-3 px-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-lime-400/40 text-lime-300">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="whitespace-pre-line text-center text-xs text-stone-300 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* phone mockup */}
        <div className="mt-12">
          <PhoneMock />
        </div>

        {/* waitlist card */}
        <div className="relative z-10 mx-auto -mt-10 max-w-3xl rounded-2xl border border-white/10 bg-[#0A5C3A]/90 p-6 shadow-xl backdrop-blur sm:p-8">
          <div className="grid gap-8 sm:grid-cols-[1.4fr_1px_1fr]">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-lime-300">
                <MapPin className="h-3.5 w-3.5" />
                Launching along Thika Road
              </span>
              <p className="mt-1 text-xs text-stone-400">
                Better homes. Better connections. Right where you are.
              </p>

              <h3 className="mt-4 text-lg font-semibold text-white">
                Be the first to know when we go live.
              </h3>
              <p className="mt-1 text-xs text-stone-400">
                Join the waitlist and get early access.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-stone-500 outline-none focus:border-lime-400/60 focus:ring-1 focus:ring-lime-400/60"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-lime-300 px-5 py-2.5 text-sm font-semibold text-[#0A6A43] transition hover:bg-lime-200"
                  style={{ boxShadow: "0 4px 14px rgba(190,242,100,0.25)" }}
                >
                  Notify me
                </button>
              </form>

              <p className="mt-2.5 text-[11px] text-stone-500">
                🔒 No spam. Just important updates.
              </p>
            </div>

            <div className="hidden bg-white/10 sm:block" />

            <div className="flex flex-col items-start gap-3 border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-400/40 text-lime-300">
                <User className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold text-white">
                For landlords &amp; property managers
              </h3>
              <p className="text-xs text-stone-400">
                Register your interest and list with Homy.
              </p>
              <button className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/5">
                Register interest <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* social row */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <Instagram className="h-3.5 w-3.5" /> @homy.ke
          </span>
          <span className="flex items-center gap-1.5">
            <Facebook className="h-3.5 w-3.5" /> facebook.com/homy.ke
          </span>
          <span className="flex items-center gap-1.5">
            <Twitter className="h-3.5 w-3.5" /> @homy_ke
          </span>
          <span className="flex items-center gap-1.5">
            <Linkedin className="h-3.5 w-3.5" /> linkedin.com/company/homy-ke
          </span>
        </div>
      </div>

    </div>
  );
}