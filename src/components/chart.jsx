import { useState, useEffect } from "react";
import chartimage from "../assets/aboutnewchart.png";

export default function Chart() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Close menu when switching to desktop
            if (!mobile) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <div className="chart-wrapper">
<img src={chartimage} alt="" />

      {/* <svg className="chart-lines" xmlns="http://www.w3.org/2000/svg">
        <line x1="50%" y1="50%" x2="30%" y2="13%" />
        <line x1="50%" y1="50%" x2="30%" y2="42%" />
        <line x1="50%" y1="50%" x2="30%" y2="88%" />
        <line x1="50%" y1="50%" x2="66%" y2="15%" />
        <line x1="50%" y1="50%" x2="66%" y2="36%" />
        <line x1="50%" y1="50%" x2="66%" y2="58%" />
        <line x1="50%" y1="50%" x2="66%" y2="84%" />
      </svg>

      <div className="chart-container">
        <div className="center-circle">Quality Resources</div>
        <div className="item top-left">Packing Materials Testing Facility</div>
        <div className="item middle-left">Stability Testing Facilities</div>
        <div className="item bottom-left">Control samples storage facilities</div>
        <div className="item top-right">Chemical Analytical laboratories</div>
        <div className="item upper-right">Instrumental Analysis laboratories</div>
        <div className="item lower-right">In-process Quality Control facilities</div>
        <div className="item bottom-right">Microbiology Lab</div>
      </div> */}

      <style jsx>{`
        .chart-wrapper {
          position: relative;
          width: 80%;
          height: auto;
          margin: 40px auto;
        }

        img {
          width: 100%;
          height: auto;
        }

        .chart-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .chart-lines line {
          stroke: #9ebbb9ff;
          stroke-width: 3;
        }

        .chart-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .center-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #46a74bff;
          color: white;
          padding: 50px 30px;
          border-radius: 100%;
          font-weight: bold;
          text-align: center;
          font-size: 22px;
          width: 100px;
        }

        .item {
          position: absolute;
          background: #f5fff5;
          border: 3px solid #9ebbb9ff;
          padding: 10px 15px;
          border-radius: 10px;
          font-weight: 500;
          color: #46a74bff;
          max-width: 200px;
          font-size: 18px;
        }

        .top-left {
          top: 10%;
          left: 15%;
        }

        .middle-left {
          top: 40%;
          left: 15%;
        }

        .bottom-left {
          bottom: 10%;
          left: 15%;
        }

        .top-right {
          top: 5%;
          right: 15%;
        }

        .upper-right {
          top: 30%;
          right: 15%;
        }

        .lower-right {
          top: 55%;
          right: 15%;
        }

        .bottom-right {
          bottom: 10%;
          right: 20%;
        }
      `}</style>
    </div>
  );
}
