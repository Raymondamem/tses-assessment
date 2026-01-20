// components/icons/BellIcon.tsx - Most Precise Version
import React from "react";

interface BellIconProps {
  count?: number;
  maxCount?: number;
  showCount?: boolean;
}

export default function BellIcon({
  count = 97,
  maxCount = 99,
  showCount = true,
}: BellIconProps) {
  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  // SVG Variables for precise positioning
  const badgeRadius = 7.5;
  const badgeCenterX = 17.5;
  const badgeCenterY = 7.5;

  // Font size based on character count
  const getFontSize = () => {
    if (displayCount.length === 1 || displayCount.length === 2) return "9";
    return "7.5"; // For "99+"
  };

  // Additional x-offset for multi-character text
  const getLetterSpacing = () => {
    if (displayCount.length === 1) return "0";
    if (displayCount.length === 2) return "-0.5";
    return "-1";
  };

  return (
    <svg
      width="25"
      height="28"
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bell body - unchanged */}
      <path
        d="M12.0196 6.91016C8.7096 6.91016 6.0196 9.60016 6.0196 12.9102V15.8002C6.0196 16.4102 5.7596 17.3402 5.4496 17.8602L4.2996 19.7702C3.5896 20.9502 4.0796 22.2602 5.3796 22.7002C9.6896 24.1402 14.3396 24.1402 18.6496 22.7002C19.8596 22.3002 20.3896 20.8702 19.7296 19.7702L18.5796 17.8602C18.2796 17.3402 18.0196 16.4102 18.0196 15.8002V12.9102C18.0196 9.61016 15.3196 6.91016 12.0196 6.91016Z"
        stroke="#636363"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.8699 7.19945C13.5599 7.10945 13.2399 7.03945 12.9099 6.99945C11.9499 6.87945 11.0299 6.94945 10.1699 7.19945C10.4599 6.45945 11.1799 5.93945 12.0199 5.93945C12.8599 5.93945 13.5799 6.45945 13.8699 7.19945Z"
        stroke="#636363"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0195 23.0605C15.0195 24.7105 13.6695 26.0605 12.0195 26.0605C11.1995 26.0605 10.4395 25.7205 9.89953 25.1805C9.35953 24.6405 9.01953 23.8805 9.01953 23.0605"
        stroke="#636363"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      {/* Perfectly centered notification badge */}
      {count > 0 && (
        <g>
          <rect x="10" y="0" width="15" height="15" rx="7.5" fill="#FF5025" />
          <text
            x="17.5" // Center of rectangle (10 + 15/2)
            y="7.5" // Center of rectangle (0 + 15/2)
            fill="#FDFDFD"
            fontSize={`${getFontSize()}`}
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {displayCount}
          </text>
        </g>
      )}
    </svg>
  );
}
