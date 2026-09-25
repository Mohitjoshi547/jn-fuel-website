import React from "react";

function JNFuelLogo() {
  return (
    <svg
      className="jn-logo"
      viewBox="0 0 260 90"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JN Fuel Private Limited"
    >
      {/* Outer swoosh */}
      <path
        d="M35 62 C55 25, 150 5, 210 22 C225 27, 220 37, 207 43"
        fill="none"
        stroke="#0877d1"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Orange swoosh */}
      <path
        d="M78 55 C118 27, 180 20, 207 29"
        fill="none"
        stroke="#ff8500"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* JN */}
      <text
        x="42"
        y="58"
        fill="#0877d1"
        fontSize="43"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="Arial, sans-serif"
      >
        JN
      </text>

      {/* FUEL */}
      <text
        x="112"
        y="59"
        fill="#0877d1"
        fontSize="32"
        fontWeight="800"
        fontStyle="italic"
        fontFamily="Arial, sans-serif"
      >
        FUEL
      </text>

      {/* Private Limited */}
      <text
        x="104"
        y="76"
        fill="#8db9df"
        fontSize="7"
        fontWeight="700"
        letterSpacing="3"
        fontFamily="Arial, sans-serif"
      >
        PRIVATE LIMITED
      </text>
    </svg>
  );
}

export default JNFuelLogo;