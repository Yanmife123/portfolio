import { motion } from "framer-motion";
export default function DevIllustration() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <svg
        width="100%"
        viewBox="0 0 680 520"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Illustration of a developer desk with a laptop showing code"
      >
        <defs>
          <clipPath id="screenClip">
            <rect x="220" y="180" width="240" height="150" rx="6" />
          </clipPath>
        </defs>

        <ellipse
          cx="340"
          cy="470"
          rx="260"
          ry="18"
          fill="#00a19b"
          opacity="0.08"
        />

        <g opacity="0.5">
          <text
            x="150"
            y="100"
            fontSize="20"
            fill="#00a19b"
            opacity="0.5"
            fontFamily="monospace"
          >
            {"</>"}
          </text>
          <text
            x="500"
            y="130"
            fontSize="26"
            fill="#e4ddd3"
            opacity="0.35"
            fontFamily="monospace"
          >
            {"{ }"}
          </text>
          <text
            x="90"
            y="220"
            fontSize="18"
            fill="#00a19b"
            opacity="0.3"
            fontFamily="monospace"
          >
            01
          </text>
          <text
            x="555"
            y="260"
            fontSize="18"
            fill="#e4ddd3"
            opacity="0.3"
            fontFamily="monospace"
          >
            10
          </text>
        </g>

        <rect
          x="140"
          y="360"
          width="400"
          height="14"
          rx="4"
          fill="#1a1a1a"
          stroke="#00a19b"
          strokeWidth="0.5"
          opacity="0.6"
        />
        <rect
          x="160"
          y="374"
          width="20"
          height="70"
          fill="#1a1a1a"
          stroke="#00a19b"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <rect
          x="500"
          y="374"
          width="20"
          height="70"
          fill="#1a1a1a"
          stroke="#00a19b"
          strokeWidth="0.5"
          opacity="0.5"
        />

        <g>
          <path
            d="M215 350 L465 350 L480 372 L200 372 Z"
            fill="#111111"
            stroke="#00a19b"
            strokeWidth="1"
          />
          <rect
            x="205"
            y="170"
            width="270"
            height="182"
            rx="8"
            fill="#141414"
            stroke="#00a19b"
            strokeWidth="1"
          />
          <rect
            x="220"
            y="180"
            width="240"
            height="150"
            rx="6"
            fill="#0d0d0d"
          />

          <g clipPath="url(#screenClip)">
            <motion.g
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect
                x="230"
                y="190"
                width="90"
                height="8"
                rx="2"
                fill="#00a19b"
                opacity="0.8"
              />
            </motion.g>
            <rect
              x="230"
              y="206"
              width="140"
              height="6"
              rx="2"
              fill="#e4ddd3"
              opacity="0.5"
            />
            <rect
              x="245"
              y="220"
              width="110"
              height="6"
              rx="2"
              fill="#e4ddd3"
              opacity="0.35"
            />
            <rect
              x="245"
              y="234"
              width="130"
              height="6"
              rx="2"
              fill="#e4ddd3"
              opacity="0.35"
            />
            <rect
              x="230"
              y="252"
              width="70"
              height="6"
              rx="2"
              fill="#00a19b"
              opacity="0.6"
            />
            <rect
              x="245"
              y="266"
              width="150"
              height="6"
              rx="2"
              fill="#e4ddd3"
              opacity="0.3"
            />
            <rect
              x="245"
              y="280"
              width="95"
              height="6"
              rx="2"
              fill="#e4ddd3"
              opacity="0.3"
            />
            <rect
              x="230"
              y="298"
              width="60"
              height="6"
              rx="2"
              fill="#00a19b"
              opacity="0.6"
            />
            <rect
              x="245"
              y="312"
              width="120"
              height="6"
              rx="2"
              fill="#e4ddd3"
              opacity="0.3"
            />
          </g>
        </g>

        <g>
          <rect
            x="150"
            y="300"
            width="26"
            height="34"
            rx="3"
            fill="#141414"
            stroke="#e4ddd3"
            strokeWidth="0.5"
          />
          <path
            d="M176 306 q14 2 12 16 q-2 12 -12 10"
            fill="none"
            stroke="#e4ddd3"
            strokeWidth="1.5"
          />
          <path
            d="M156 300 q-2 -14 6 -18 q6 12 2 18"
            fill="#00a19b"
            opacity="0.6"
          />
          <path
            d="M164 300 q2 -18 10 -20 q4 14 -2 20"
            fill="#00a19b"
            opacity="0.8"
          />
        </g>

        <motion.g
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "512px 300px" }}
        >
          <path
            d="M500 300 L495 340 L525 340 L522 300 Z"
            fill="#141414"
            stroke="#00a19b"
            strokeWidth="0.6"
          />
          <path
            d="M508 300 Q506 270 512 250 Q520 265 518 300"
            fill="#00a19b"
            opacity="0.55"
          />
          <path
            d="M513 300 Q515 265 522 245 Q528 262 520 300"
            fill="#00a19b"
            opacity="0.75"
          />
          <path
            d="M505 300 Q502 275 508 258 Q514 272 511 300"
            fill="#00a19b"
            opacity="0.4"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
