import React from "react";

export default function StrengthMarquee() {
  return (
    <section className="strength-marquee">
      <div className="marquee">
        <span>
          Discover the unmatched strength of <strong>SSI TMT Bars</strong> – crafted with advanced technology for lasting durability and safety • Designed with high bendability and superior weldability • Trusted by engineers, architects, and builders across generations • Corrosion and earthquake resistant steel for stronger, smarter construction • <strong>SSI TMT Bars</strong> – Building trust, building the future
        </span>
      </div>

      {/* Embedded CSS */}
      <style jsx>{`
        .strength-marquee {
          background-color: #2f55a6;
          color: white;
          overflow: hidden;
          white-space: nowrap;
          padding: 20px 0;
        }

        .marquee span {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 30s linear infinite;
          font-size: 1.2rem;
        }

        .marquee span strong {
          font-weight: 700;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Responsive */
        @media (max-width: 992px) {
          .marquee span {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .marquee span {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
