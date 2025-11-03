const BatsEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Bat 1 */}
      <div className="absolute top-1/4 left-1/4 animate-[float_4s_ease-in-out_infinite]">
        <svg width="50" height="25" viewBox="0 0 50 25" fill="none">
          {/* Left Wing */}
          <path d="M5 12 Q2 8 0 10 Q2 15 8 13 L15 15" fill="#000000" opacity="0.8"/>
          {/* Right Wing */}
          <path d="M45 12 Q48 8 50 10 Q48 15 42 13 L35 15" fill="#000000" opacity="0.8"/>
          {/* Body */}
          <ellipse cx="25" cy="15" rx="3" ry="5" fill="#000000"/>
          {/* Head */}
          <circle cx="25" cy="12" r="3" fill="#000000"/>
          {/* Left Ear */}
          <path d="M23 10 L22 7 L24 10" fill="#000000"/>
          {/* Right Ear */}
          <path d="M27 10 L28 7 L26 10" fill="#000000"/>
          {/* Eyes */}
          <circle cx="23.5" cy="12" r="0.5" fill="#ff0000"/>
          <circle cx="26.5" cy="12" r="0.5" fill="#ff0000"/>
        </svg>
      </div>

      {/* Bat 2 */}
      <div className="absolute top-1/3 right-1/4 animate-[float_5s_ease-in-out_infinite_0.5s]">
        <svg width="45" height="22" viewBox="0 0 50 25" fill="none">
          <path d="M5 12 Q2 8 0 10 Q2 15 8 13 L15 15" fill="#000000" opacity="0.7"/>
          <path d="M45 12 Q48 8 50 10 Q48 15 42 13 L35 15" fill="#000000" opacity="0.7"/>
          <ellipse cx="25" cy="15" rx="3" ry="5" fill="#000000"/>
          <circle cx="25" cy="12" r="3" fill="#000000"/>
          <path d="M23 10 L22 7 L24 10" fill="#000000"/>
          <path d="M27 10 L28 7 L26 10" fill="#000000"/>
          <circle cx="23.5" cy="12" r="0.5" fill="#ff0000"/>
          <circle cx="26.5" cy="12" r="0.5" fill="#ff0000"/>
        </svg>
      </div>

      {/* Bat 3 */}
      <div className="absolute top-1/2 left-1/3 animate-[float_6s_ease-in-out_infinite_1s]">
        <svg width="40" height="20" viewBox="0 0 50 25" fill="none">
          <path d="M5 12 Q2 8 0 10 Q2 15 8 13 L15 15" fill="#000000" opacity="0.6"/>
          <path d="M45 12 Q48 8 50 10 Q48 15 42 13 L35 15" fill="#000000" opacity="0.6"/>
          <ellipse cx="25" cy="15" rx="3" ry="5" fill="#000000"/>
          <circle cx="25" cy="12" r="3" fill="#000000"/>
          <path d="M23 10 L22 7 L24 10" fill="#000000"/>
          <path d="M27 10 L28 7 L26 10" fill="#000000"/>
          <circle cx="23.5" cy="12" r="0.5" fill="#ff0000"/>
          <circle cx="26.5" cy="12" r="0.5" fill="#ff0000"/>
        </svg>
      </div>

      {/* Bat 4 */}
      <div className="absolute top-2/3 right-1/3 animate-[float_5.5s_ease-in-out_infinite_1.5s]">
        <svg width="48" height="24" viewBox="0 0 50 25" fill="none">
          <path d="M5 12 Q2 8 0 10 Q2 15 8 13 L15 15" fill="#000000" opacity="0.75"/>
          <path d="M45 12 Q48 8 50 10 Q48 15 42 13 L35 15" fill="#000000" opacity="0.75"/>
          <ellipse cx="25" cy="15" rx="3" ry="5" fill="#000000"/>
          <circle cx="25" cy="12" r="3" fill="#000000"/>
          <path d="M23 10 L22 7 L24 10" fill="#000000"/>
          <path d="M27 10 L28 7 L26 10" fill="#000000"/>
          <circle cx="23.5" cy="12" r="0.5" fill="#ff0000"/>
          <circle cx="26.5" cy="12" r="0.5" fill="#ff0000"/>
        </svg>
      </div>

      {/* Bat 5 */}
      <div className="absolute top-1/4 right-1/4 animate-[float_4.5s_ease-in-out_infinite_2s]">
        <svg width="42" height="21" viewBox="0 0 50 25" fill="none">
          <path d="M5 12 Q2 8 0 10 Q2 15 8 13 L15 15" fill="#000000" opacity="0.65"/>
          <path d="M45 12 Q48 8 50 10 Q48 15 42 13 L35 15" fill="#000000" opacity="0.65"/>
          <ellipse cx="25" cy="15" rx="3" ry="5" fill="#000000"/>
          <circle cx="25" cy="12" r="3" fill="#000000"/>
          <path d="M23 10 L22 7 L24 10" fill="#000000"/>
          <path d="M27 10 L28 7 L26 10" fill="#000000"/>
          <circle cx="23.5" cy="12" r="0.5" fill="#ff0000"/>
          <circle cx="26.5" cy="12" r="0.5" fill="#ff0000"/>
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(5deg);
          }
          50% {
            transform: translate(-10px, -30px) rotate(-3deg);
          }
          75% {
            transform: translate(-20px, -10px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default BatsEffect;
