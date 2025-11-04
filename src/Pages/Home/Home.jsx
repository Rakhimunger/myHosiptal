import React from "react";
import unsplash from "../../assets/images/unsplash.jpg";

function Home() {
  return (
    <div className="relative w-[95%] sm:w-[90%] mx-auto text-black rounded-2xl overflow-hidden mt-24 shadow-lg">
      {/*  Background Image */}
      <img
        src={unsplash}
        alt="Delicious Food"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/*  Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-16 sm:py-20 md:py-28 bg-black/30">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:leading-tight drop-shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
          Your Health, Our Priority 💙
        </h2>

        <p className="text-xs sm:text-sm md:text-lg max-w-md sm:max-w-xl mx-auto mb-6 sm:mb-8 text-black">
          Book appointments with expert doctors, consult online, and manage your
          medical records — all in one place. Get quality healthcare with ease,
          comfort, and trust at{" "}
          <span className="font-semibold">MyHospital</span>.
        </p>
      </div>
    </div>
  );
}

export default Home;
