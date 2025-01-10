import { useDirection } from "@/hooks/use-direction";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useState, useRef, useEffect } from "react";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface DraggableWrapperProps {
  children: React.ReactNode;
  navStyle?: React.CSSProperties;
  skipSlide?: number;
}

export default function DraggableWrapper({
  children,
  navStyle = {},
  skipSlide = 340,
}: DraggableWrapperProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const startX = useRef(0);
  const startTouch = useRef(0);
  const scrollLeft = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [direction] = useLocalStorage("soar-direction", "ltr");
  const liveDirection = useDirection(direction ? direction : "ltr");

  useEffect(() => {}, [liveDirection]);

  // Handle the mouse down event for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      startX.current = e.clientX;
      scrollLeft.current = containerRef.current.scrollLeft;
      containerRef.current.style.cursor = "grabbing"; // Show grabbing cursor
    }
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  // Handle mouse move while dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX;
    const walk = (x - startX.current) * 3; // Adjust sensitivity here
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  // Handle scroll event
  const handleScroll = () => {
    setScrollPos(containerRef.current ? containerRef.current.scrollLeft : 0);
  };

  // Handle touch start for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      startTouch.current = e.touches[0].clientX;
      scrollLeft.current = containerRef.current.scrollLeft;
    }
  };

  // Handle touch move for swiping
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (x - startTouch.current) * 3; // Adjust sensitivity here
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  // Handle touch end
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Function to go to the next slide
  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += skipSlide; // Adjust this value as needed for your slides
      console.log("next");
    }
  };

  // Function to go to the previous slide
  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= skipSlide;
      console.log("prev");
    }
  };

  const isAtStart = scrollPos === 0;
  const isAtEnd =
    containerRef.current &&
    containerRef.current.scrollWidth ===
      containerRef.current.scrollLeft + containerRef.current.clientWidth;

  return (
    <div className="relative w-full inline-flex">
      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap cursor-grab "
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          width: "100%",
          height: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <div>{children}</div>
      </div>
      <div
        className="absolute"
        style={{
          ...(liveDirection === "ltr" ? { right: "10px" } : { left: "10px" }),
          top: "0",
          minHeight: "210px",
          paddingTop: "40px",
          ...navStyle,
        }}
      >
        <div className="relative h-full justify-center flex flex-col items-center gap-4">
          <div className="block h-10 w-10">
            {(!isAtEnd || isAtStart) && (
              <div
                className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#DFEAF2] bg-[#F5F7FA] text-brand shadow-card transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12"
                onClick={liveDirection === "ltr" ? handleNext : handlePrev}
              >
                <IoIosArrowForward className="text-[#718EBF] text-[20px]" />
              </div>
            )}
          </div>

          <div className="block h-10 w-10">
            {!isAtStart && (
              <div
                className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#DFEAF2] bg-[#F5F7FA] text-brand shadow-card transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12"
                onClick={liveDirection === "ltr" ? handlePrev : handleNext}
              >
                <IoIosArrowBack className="text-[#718EBF] text-[20px]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
