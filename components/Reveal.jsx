"use client";
import { useInView } from "@/hooks/useInView";

export default function Reveal({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity .85s cubic-bezier(.22,1,.36,1) ${delay}s, transform .85s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>{children}</div>
  );
}
