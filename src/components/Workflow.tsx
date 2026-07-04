import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent, MotionValue } from "framer-motion";

interface TagCardProps {
  number: string;
  title: string;
  text: string;
  className?: string;
  pathLength: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement>;
  aosType?: string;
  aosDelay?: string;
}

const TagCard = ({
  number,
  title,
  text,
  className = "",
  pathLength,
  containerRef,
}: TagCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;

    // Trigger when the scroll line tip reaches 50px into the card height
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? "bg-blue-600 border-blue-400 shadow-[0_20px_50px_rgba(59,130,246,0.45)] dark:bg-blue-700 dark:border-blue-500"
          : "bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-800 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 dark:border-gray-700 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 dark:bg-gray-200 rounded-full opacity-20" />
      </div>

      {/* Inner container */}
      <div
        className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
          isActive ? "bg-blue-800/40" : "bg-[#f4f4f4] dark:bg-gray-950"
        }`}
      >
        <span
          className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
            isActive ? "text-blue-200" : "text-gray-450 dark:text-gray-500"
          }`}
        >
          {number}
        </span>

        <h3
          className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${
            isActive ? "text-white" : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
            isActive ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export const Workflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="workflow"
      ref={containerRef}
      className="bg-white dark:bg-gray-900 py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-b border-gray-100 dark:border-gray-800 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Content */}
        <div className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-blue-200 dark:border-blue-800 rounded-full px-5 py-1.5 text-sm text-blue-600 dark:text-blue-300 font-bold mb-8 shadow-sm bg-blue-50/50 dark:bg-blue-950/20 backdrop-blur-sm">
            How I Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-gray-100 leading-[1.1] mb-6 tracking-tight relative">
            Let me show you how I drive your brand to new heights
            {/* Hand-drawn arrow */}
            <svg
              className="absolute -bottom-10 right-10 w-12 h-12 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            I follow a structured, collaborative, and highly technical approach
            to turn your ideas into robust full-stack applications.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* Faint background path (guide) */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
            className="dark:stroke-gray-800"
          />

          {/* Mask to reveal the dashed path based on scroll */}
          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          {/* The actual blue dashed line that gets revealed */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#2563eb"
            strokeWidth="3.5"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)]"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            className="dark:stroke-gray-850"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          <TagCard
            number="01"
            title="Define"
            text="I start by understanding your goals, user requirements, and technical constraints to lay a rock-solid foundation for the project."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="02"
            title="Design"
            text="Creating intuitive, pixel-perfect user interfaces and wireframes that guarantee an engaging and accessible user experience."
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="03"
            title="Build"
            text="Developing scalable frontend architectures and secure backend systems using the latest modern tech stack."
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="04"
            title="Launch"
            text="Rigorous testing, optimization, and seamless deployment to cloud infrastructure, followed by ongoing support."
            className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Hand-drawn end text */}
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-serif italic text-3xl text-gray-500 dark:text-gray-400 rotate-6 select-none">
            Ready to be delivered! 🚀
          </div>
        </div>
      </div>
    </section>
  );
};
