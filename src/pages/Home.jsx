import React, { useState } from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [clickedLetters, setClickedLetters] = useState({});
  const [burstLetters, setBurstLetters] = useState({}); // Track burst state of each letter

  const handleLetterClick = (letter) => {
    setClickedLetters((prev) => ({
      ...prev,
      [letter]: (prev[letter] || 0) + 1, // Increase click count for each letter
    }));

    // Trigger the burst when the letter reaches 4 clicks
    if ((clickedLetters[letter] || 0) + 1 === 4) {
      setBurstLetters((prev) => ({ ...prev, [letter]: true }));
    }
  };

  // Function to generate burst effect with random shapes and movement
  const generateBurstEffect = (letter) => {
    const pieces = [];
    const numPieces = 8; // Number of burst pieces

    for (let i = 0; i < numPieces; i++) {
      const randomWidth = Math.random() * 30 + 10; // Random width for pieces
      const randomHeight = Math.random() * 20 + 5; // Random height for pieces
      const randomX = Math.random() * 100 - 50; // Random horizontal movement
      const randomY = Math.random() * 100 - 50; // Random vertical movement
      const randomRotate = Math.random() * 360; // Random rotation for pieces
      const randomOpacity = Math.random() * 0.5 + 0.5; // Random opacity

      pieces.push(
        <motion.div
          key={`${letter}-piece-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`, // Random starting position
            top: `${Math.random() * 100}%`,
            backgroundColor: "#F1EFEC",
            width: `${randomWidth}px`, // Random width
            height: `${randomHeight}px`, // Random height
          }}
          animate={{
            x: randomX,
            y: randomY,
            opacity: [randomOpacity, 0], // Fade out
            rotate: randomRotate,
            transition: {
              duration: 1.5, // Duration of the effect
              repeat: 0,
              ease: "easeOut",
              delay: i * 0.05, // Stagger the effect a bit
            },
          }}
        />
      );
    }

    return pieces;
  };

  // Function to determine stretching effect
  const getStretchEffect = (clickCount) => {
    switch (clickCount) {
      case 1:
        return { scaleX: 1.4, scaleY: 1.1 }; // Horizontal stretch
      case 2:
        return { scaleX: 1.6, scaleY: 1.1 }; // More stretch
      case 3:
        return { scaleX: 1.8, scaleY: 1.2 }; // Even more stretch
      case 4:
        return { scaleX: 2, scaleY: 1.4 }; // Extreme stretch before bursting
      default:
        return {};
    }
  };

  const name = "Muhammad Kaif AR"; // Your name split into individual letters

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
            },
            number: {
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
        className="absolute inset-0"
      />

      {/* Main Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#F1EFEC] px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm{" "}
          {name.split("").map((letter, index) => {
            const clickCount = clickedLetters[letter] || 0;
            const hasBurst = burstLetters[letter];

            // Skip burst effect for "M" and "K"
            if (letter === "M" || letter === "K") {
              return (
                <motion.span
                  key={index}
                  onClick={() => handleLetterClick(letter)}
                  className="inline-block cursor-pointer relative"
                  animate={getStretchEffect(clickCount)}
                  transition={{ duration: 0.5 }}
                >
                  {letter} {/* Keep M and K visible without burst */}
                </motion.span>
              );
            }

            return (
              <motion.span
                key={index}
                onClick={() => handleLetterClick(letter)}
                className={`inline-block cursor-pointer relative ${hasBurst ? "opacity-0" : ""}`}
                animate={getStretchEffect(clickCount)}
                transition={{ duration: 0.5 }}
              >
                {hasBurst ? null : letter} {/* Do not display the letter after bursting */}
                {/* Generate burst effect after pop effect */}
                {hasBurst ? generateBurstEffect(letter) : null}
              </motion.span>
            );
          })}
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-2xl mb-8"
        >
          Frontend Developer | Web Designer | Creative Thinker
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="flex gap-6"
        >
          <Link
            to="/contact"
            className="bg-[#123458] hover:bg-[#D4C9BE] hover:text-black text-[#F1EFEC] px-6 py-3 rounded-xl text-lg transition-transform transform hover:scale-105"
          >
            Contact Me
          </Link>
          <Link
            to="/projects"
            className="border-2 border-[#123458] hover:bg-[#D4C9BE] hover:text-black text-[#F1EFEC] px-6 py-3 rounded-xl text-lg transition-transform transform hover:scale-105"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
