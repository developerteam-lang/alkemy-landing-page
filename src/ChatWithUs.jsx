
import React, { useEffect, useState } from "react";
import "./ChatWithUs.css";

export default function ChatWithUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/919100530909"
      className={`chat-with-us ${isVisible ? "chat-with-us--visible" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20.4 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.3l1.3-4.8a8.4 8.4 0 1 1 16.1-3.8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 8.2c.3-.5.6-.5 1-.5h.4c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.7.9c-.2.2-.2.4 0 .6.7 1.2 1.7 2.1 2.9 2.7.2.1.4.1.6-.1l1-1.2c.2-.2.4-.3.7-.2l1.8.9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>Chat with us</span>
    </a>
  );
}
