"use client"

import React from "react"

const clients = [
  { name: "Swiggy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNpI1TK4_z9NpAzg8EGjsz1fnD1ZW4wLyiQ&s" },
  { name: "Angel One", logo: "https://play-lh.googleusercontent.com/T5ibZuIwAGX5gnIjh7Il0wpcUtDPYL6MekYwTLvvgYUOZAaKS-_RotixDcDw0K6QDQ" },
  // { name: "Kick", logo: "https://logo.clearbit.com/kick.com" },
  // { name: "Elevatr", logo: "https://logo.clearbit.com/elevate.com" },
  // { name: "Allset", logo: "https://logo.clearbit.com/allsetnow.com" },
  { name: "Toing", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqqvkhxtFZjHf5W5AlYageVDQQ0f1uVsmOw&s" },
  // { name: "M Sport", logo: "https://logo.clearbit.com/msport.com" },
  // { name: "Air", logo: "https://logo.clearbit.com/air.inc" },
  { name: "Vine", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Vine_logo.svg/1280px-Vine_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
  { name: "Foursquare", logo: "https://cdn-icons-png.flaticon.com/512/3991/3991966.png" },
  // { name: "Codecademy", logo: "https://images.saasworthy.com/codecademy_14389_logo_1758631244_vitnd.png" },
  { name: "Navi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Navi_New_Logo.png/250px-Navi_New_Logo.png" },
  { name: "Acko", logo: "https://cdn.prod.website-files.com/6145f7156a1337613524d548/63f45bf57df68f599b344a05_logo__Acko.png" },
  { name: "Bajaj Finserve", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnJqvqoFoWPPLZtRpkdbnuagawoVoVOX5BQ&s" },
  { name: "Policy Bazaar", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0eCpmCCHh540-3VLfDFxWEupdblqGdoo9g&s" },
  { name: "HDFC Ergo", logo: "https://i.pinimg.com/736x/6b/c4/1c/6bc41c5d155cfd71fbfd45e6445ad693.jpg" },
  { name: "Paytm Money", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Paytm_Money_Logo.png" },
  { name: "Techcom Bank", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMadn__BaR7RWZ8OmQMS6_lKck2FVh9LaJA&s" },
  { name: "Zepto", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUF-UqQlBVGi-2_Mn1rMkjWJkQ7I3mNd3MA&s" },
  { name: "Fiverr", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdQ17VMhOdKMVn6UuTqQje2ffHnAp1-ydUA&s" },
  { name: "Airtel", logo: "https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png" },
  { name: "MX Player", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxqbp3LzfEg8h1yBnh-M9Q1x1qmELA2X5Zw&s" },
  { name: "Cheq", logo: "https://play-lh.googleusercontent.com/GT6qjvzZdxOZUR_T_vYwSDGGQ4HwW-bQEWr5AXojK8QOgtB3SkTeOyMZgBXlL3tC2B1EvWNH3fP7gKwT8Rw3mw=w240-h480-rw" },
]

export function ClientLogos() {
  return (
    <section className="relative bg-slate-50 dark:bg-[#0a0a0a] py-12 border-y border-yellow-500/10 overflow-hidden flex flex-col items-center">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * ${clients.length})); }
        }
        .slider {
          height: 160px;
          margin: auto;
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .slider::before,
        .slider::after {
          background: linear-gradient(to right, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%);
          content: "";
          height: 160px;
          position: absolute;
          width: 150px;
          z-index: 2;
        }
        .slider::after {
          right: 0;
          top: 0;
          transform: rotateZ(180deg);
        }
        .slider::before {
          left: 0;
          top: 0;
        }
        .light-mode-gradient.slider::before,
        .light-mode-gradient.slider::after {
          background: linear-gradient(to right, rgba(248,250,252,1) 0%, rgba(248,250,252,0) 100%);
        }
        .slide-track {
          animation: scroll 35s linear infinite;
          display: flex;
          width: calc(250px * ${clients.length * 2});
        }
        .slide {
          height: 160px;
          width: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 0 20px;
        }
        .logo-container {
          width: 120px;
          height: 120px;
          background-color: white;
          border-radius: 20px;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease;
        }
        .slide:hover .logo-container {
          transform: translateY(-4px) scale(1.05);
        }
        .slide img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .slide span {
          font-size: 1rem;
          font-weight: 600;
          white-space: nowrap;
          color: inherit;
          text-align: center;
        }
        @media (max-width: 768px) {
          .slider {
            height: 120px;
          }
          .slide {
            width: 140px;
            height: 120px;
            padding: 0 10px;
            gap: 12px;
          }
          .logo-container {
            width: 80px;
            height: 80px;
            border-radius: 16px;
            padding: 12px;
          }
          .slide span {
            font-size: 0.8rem;
          }
          .slide-track {
            width: calc(140px * ${clients.length * 2});
            animation: scroll-mobile 25s linear infinite;
          }
          .slider::before, .slider::after {
            height: 120px;
            width: 80px;
          }
        }
        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-140px * ${clients.length})); }
        }
      `}} />

      <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 mb-8 font-semibold">Trusted by Innovative Brands</p>
      
      <div className="slider hidden dark:block text-slate-300">
        <div className="slide-track">
          {[...clients, ...clients].map((client, index) => (
            <div className="slide hover:text-white" key={index}>
              <div className="logo-container">
                <img src={client.logo} alt={client.name} onError={(e) => {
                    e.currentTarget.style.display = "none";
                }} />
              </div>
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="slider light-mode-gradient block dark:hidden text-slate-700">
        <div className="slide-track">
          {[...clients, ...clients].map((client, index) => (
            <div className="slide hover:text-slate-900" key={index}>
              <div className="logo-container">
                <img src={client.logo} alt={client.name} onError={(e) => {
                    e.currentTarget.style.display = "none";
                }} />
              </div>
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
