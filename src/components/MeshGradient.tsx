import React from "react";

export default function MeshGradient() {
  return (
    <div className="fixed min-h-screen inset-0 w-full overflow-hidden bg-[#374C69] -z-10">
      {/* Mesh gradient blobs */}
      <div
        className="absolute rounded-full blur-[65px] opacity-100 w-[400px] h-[400px] animate-mesh-glitch"
        style={{
          backgroundColor: "#6699CC",
          left: "34%",
          top: "22%",
        }}
      />
      <div
        className="absolute rounded-full blur-[65px] opacity-100 w-[400px] h-[400px] animate-mesh-glitch"
        style={{
          backgroundColor: "#85c2ff",
          left: "54%",
          top: "63%",
        }}
      />
      <div
        className="absolute rounded-full blur-[65px] opacity-100 w-[400px] h-[400px] animate-mesh-glitch"
        style={{
          backgroundColor: "#415978",
          left: "11%",
          top: "51%",
        }}
      />
      <div
        className="absolute rounded-full blur-[65px] opacity-100 w-[400px] h-[400px] animate-mesh-glitch"
        style={{
          backgroundColor: "#1E2939",
          left: "79%",
          top: "52%",
        }}
      />

      {/* Farm icons with animations */}
      <div className="absolute inset-0 opacity-20">
        {/* Wheat icons */}
        <div
          className="absolute animate-float"
          style={{ left: "15%", top: "20%", animationDelay: "0s" }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L10.5 8.5L12 15L13.5 8.5L12 2ZM8 4L7 7L8 10L9 7L8 4ZM16 4L15 7L16 10L17 7L16 4ZM6 8L5.5 10L6 12L6.5 10L6 8ZM18 8L17.5 10L18 12L18.5 10L18 8ZM4 12L3.5 14L4 16L4.5 14L4 12ZM20 12L19.5 14L20 16L20.5 14L20 12ZM12 16V22H11V16H12Z" />
          </svg>
        </div>

        <div
          className="absolute animate-float"
          style={{ left: "75%", top: "15%", animationDelay: "2s" }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L10.5 8.5L12 15L13.5 8.5L12 2ZM8 4L7 7L8 10L9 7L8 4ZM16 4L15 7L16 10L17 7L16 4ZM6 8L5.5 10L6 12L6.5 10L6 8ZM18 8L17.5 10L18 12L18.5 10L18 8ZM4 12L3.5 14L4 16L4.5 14L4 12ZM20 12L19.5 14L20 16L20.5 14L20 12ZM12 16V22H11V16H12Z" />
          </svg>
        </div>

        {/* Tractor icons */}
        <div
          className="absolute animate-bounce-slow"
          style={{ left: "25%", top: "70%", animationDelay: "1s" }}
        >
          <svg
            className="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 15C2.9 15 2 15.9 2 17S2.9 19 4 19 6 18.1 6 17 5.1 15 4 15M4 17.5C3.7 17.5 3.5 17.3 3.5 17S3.7 16.5 4 16.5 4.5 16.7 4.5 17 4.3 17.5 4 17.5M18 13C16.3 13 15 14.3 15 16S16.3 19 18 19 21 17.7 21 16 19.7 13 18 13M18 17.5C17.2 17.5 16.5 16.8 16.5 16S17.2 14.5 18 14.5 19.5 15.2 19.5 16 18.8 17.5 18 17.5M7 14H14V12H16V10H14V8H12V10H10V8H8V10H6V12H8V14H7V16H15V14Z" />
          </svg>
        </div>

        {/* Barn icons */}
        <div
          className="absolute animate-pulse-slow"
          style={{ left: "85%", top: "75%", animationDelay: "3s" }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 5.7L17 10.3V18H15V13H9V18H7V10.3L12 5.7ZM11 14H13V18H11V14Z" />
          </svg>
        </div>

        {/* Cow icons */}
        <div
          className="absolute animate-sway"
          style={{ left: "5%", top: "60%", animationDelay: "4s" }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18 14V12C18 8.69 15.31 6 12 6S6 8.69 6 12V14C4.34 14 3 15.34 3 17S4.34 20 6 20H18C19.66 20 21 18.66 21 17S19.66 14 18 14ZM8 12C8 9.79 9.79 8 12 8S16 9.79 16 12V14H8V12ZM10 10C10 9.45 10.45 9 11 9S12 9.45 12 9 11.55 10 11 10 10 10.55 10 10ZM14 10C14 9.45 14.45 9 15 9S16 9.45 16 9 15.55 10 15 10 14 10.55 14 10Z" />
          </svg>
        </div>

        {/* Sun icon */}
        <div
          className="absolute animate-spin-slow"
          style={{ left: "90%", top: "10%", animationDelay: "0.5s" }}
        >
          <svg
            className="w-12 h-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 7C9.24 7 7 9.24 7 12S9.24 17 12 17 17 14.76 17 12 14.76 7 12 7ZM2 13H4C4.55 13 5 12.55 5 12S4.55 11 4 11H2C1.45 11 1 11.45 1 12S1.45 13 2 13ZM20 13H22C22.55 13 23 12.55 23 12S22.55 11 22 11H20C19.45 11 19 11.45 19 12S19.45 13 20 13ZM11 2V4C11 4.55 11.45 5 12 5S13 4.55 13 4V2C13 1.45 12.55 1 12 1S11 1.45 11 2ZM11 20V22C11 22.55 11.45 23 12 23S13 22.55 13 22V20C13 19.45 12.55 19 12 19S11 19.45 11 20ZM5.99 4.58C5.6 4.19 5.6 3.56 5.99 3.17C6.38 2.78 7.01 2.78 7.4 3.17L8.81 4.58C9.2 4.97 9.2 5.6 8.81 5.99C8.42 6.38 7.79 6.38 7.4 5.99L5.99 4.58ZM18.01 16.42C17.62 16.81 17.62 17.44 18.01 17.83C18.4 18.22 19.03 18.22 19.42 17.83L20.83 16.42C21.22 16.03 21.22 15.4 20.83 15.01C20.44 14.62 19.81 14.62 19.42 15.01L18.01 16.42ZM20.83 5.99C21.22 5.6 21.22 4.97 20.83 4.58L19.42 3.17C19.03 2.78 18.4 2.78 18.01 3.17C17.62 3.56 17.62 4.19 18.01 4.58L19.42 5.99C19.81 6.38 20.44 6.38 20.83 5.99ZM8.81 15.01C8.42 14.62 7.79 14.62 7.4 15.01C7.01 15.4 7.01 16.03 7.4 16.42L8.81 17.83C9.2 18.22 9.83 18.22 10.22 17.83C10.61 17.44 10.61 16.81 10.22 16.42L8.81 15.01Z" />
          </svg>
        </div>

        {/* Cloud icons */}
        <div
          className="absolute animate-drift"
          style={{ left: "30%", top: "5%", animationDelay: "1.5s" }}
        >
          <svg
            className="w-10 h-10 text-white opacity-60"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.36 10.04Z" />
          </svg>
        </div>

        <div
          className="absolute animate-drift"
          style={{ left: "60%", top: "8%", animationDelay: "3.5s" }}
        >
          <svg
            className="w-8 h-8 text-white opacity-40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.36 10.04Z" />
          </svg>
        </div>

        {/* Chicken/Rooster icons */}
        <div
          className="absolute animate-bounce-slow"
          style={{ left: "45%", top: "85%", animationDelay: "2.5s" }}
        >
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6 14 5.1 14 4 13.1 2 12 2ZM8 6C6.9 6 6 6.9 6 8S6.9 10 8 10 10 9.1 10 8 9.1 6 8 6ZM16 6C14.9 6 14 6.9 14 8S14.9 10 16 10 18 9.1 18 8 17.1 6 16 6ZM12 8C9.8 8 8 9.8 8 12V16C8 18.2 9.8 20 12 20S16 18.2 16 12V8H12ZM10 14C9.4 14 9 13.6 9 13S9.4 12 10 12 11 12.4 11 13 10.6 14 10 14ZM14 14C13.4 14 13 13.6 13 13S13.4 12 14 12 15 12.4 15 13 14.6 14 14 14Z" />
          </svg>
        </div>

        {/* Pig icons */}
        <div
          className="absolute animate-sway"
          style={{ left: "70%", top: "65%", animationDelay: "5s" }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4C8.69 4 6 6.69 6 10V14C6 17.31 8.69 20 12 20S18 17.31 18 14V10C18 6.69 15.31 4 12 4ZM10 8C10.55 8 11 8.45 11 9S10.55 10 10 10 9 9.55 9 9 9.45 8 10 8ZM14 8C14.55 8 15 8.45 15 9S14.55 10 14 10 13 9.55 13 9 13.45 8 14 8ZM12 16C10.9 16 10 15.1 10 14H14C14 15.1 13.1 16 12 16Z" />
          </svg>
        </div>

        {/* Horse icons */}
        <div
          className="absolute animate-float"
          style={{ left: "35%", top: "45%", animationDelay: "6s" }}
        >
          <svg
            className="w-9 h-9 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C10.34 2 9 3.34 9 5V7C9 8.66 10.34 10 12 10S15 8.66 15 7V5C15 3.34 13.66 2 12 2ZM8 8C6.9 8 6 8.9 6 10V14C6 17.31 8.69 20 12 20S18 17.31 18 14V10C18 8.9 17.1 8 16 8H8ZM10 12C10.55 12 11 12.45 11 13S10.55 14 10 14 9 13.55 9 13 9.45 12 10 12ZM14 12C14.55 12 15 12.45 15 13S14.55 14 14 14 13 13.55 13 13 13.45 12 14 12Z" />
          </svg>
        </div>

        {/* Windmill icons */}
        <div
          className="absolute animate-spin-slow"
          style={{ left: "10%", top: "25%", animationDelay: "1.2s" }}
        >
          <svg
            className="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L8 6L12 10L16 6L12 2ZM12 14L8 18L12 22L16 18L12 14ZM2 12L6 8L10 12L6 16L2 12ZM14 12L18 8L22 12L18 16L14 12ZM11 11H13V13H11V11Z" />
          </svg>
        </div>

        {/* Corn icons */}
        <div
          className="absolute animate-float"
          style={{ left: "55%", top: "30%", animationDelay: "4.5s" }}
        >
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C10.9 2 10 2.9 10 4V6C10 7.1 10.9 8 12 8S14 7.1 14 6V4C14 2.9 13.1 2 12 2ZM8 6C6.9 6 6 6.9 6 8V16C6 19.31 8.69 22 12 22S18 19.31 18 16V8C18 6.9 17.1 6 16 6H8ZM9 10H11V12H9V10ZM13 10H15V12H13V10ZM9 14H11V16H9V14ZM13 14H15V16H13V14Z" />
          </svg>
        </div>

        {/* Sheep icons */}
        <div
          className="absolute animate-bounce-slow"
          style={{ left: "80%", top: "40%", animationDelay: "3.8s" }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4C8.69 4 6 6.69 6 10C6 11.1 6.9 12 8 12H16C17.1 12 18 11.1 18 10C18 6.69 15.31 4 12 4ZM8 14C6.9 14 6 14.9 6 16V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V16C18 14.9 17.1 14 16 14H8ZM10 8C10.55 8 11 8.45 11 9S10.55 10 10 10 9 9.55 9 9 9.45 8 10 8ZM14 8C14.55 8 15 8.45 15 9S14.55 10 14 10 13 9.55 13 9 13.45 8 14 8Z" />
          </svg>
        </div>

        {/* Tree icons */}
        <div
          className="absolute animate-sway"
          style={{ left: "20%", top: "35%", animationDelay: "2.8s" }}
        >
          <svg
            className="w-9 h-9 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L8 8H10V12H8L12 18L16 12H14V8H16L12 2ZM11 20H13V22H11V20Z" />
          </svg>
        </div>

        {/* Fence icons */}
        <div
          className="absolute animate-pulse-slow"
          style={{ left: "65%", top: "50%", animationDelay: "4.2s" }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2 12H4V20H2V12ZM6 10H8V20H6V10ZM10 8H12V20H10V8ZM14 10H16V20H14V10ZM18 12H20V20H18V12ZM22 12H24V20H22V12Z" />
          </svg>
        </div>

        {/* Carrot icons */}
        <div
          className="absolute animate-float"
          style={{ left: "40%", top: "15%", animationDelay: "5.5s" }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C10.9 2 10 2.9 10 4V6H14V4C14 2.9 13.1 2 12 2ZM8 8V20C8 21.1 8.9 22 10 22H14C15.1 22 16 21.1 16 20V8H8ZM10 10H14V12H10V10ZM10 14H14V16H10V14ZM10 18H14V20H10V18Z" />
          </svg>
        </div>

        {/* Apple tree icons */}
        <div
          className="absolute animate-drift"
          style={{ left: "85%", top: "25%", animationDelay: "6.5s" }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.69 2 6 4.69 6 8C6 11.31 8.69 14 12 14S18 11.31 18 8C18 4.69 15.31 2 12 2ZM10 6C10.55 6 11 6.45 11 7S10.55 8 10 8 9 7.55 9 7 9.45 6 10 6ZM14 6C14.55 6 15 6.45 15 7S14.55 8 14 8 13 7.55 13 7 13.45 6 14 6ZM11 16H13V22H11V16Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
