"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const MessageTab = () => {
  const [open, setOpen] = useState(false);
  const openWhatsApp = () => {
    const phoneNumber = "+918881791704"; // Add your number without + or spaces
    const message = "Hello, I want to know more about your services!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* WhatsApp button (slides in/out) */}
      <button
        onClick={() => openWhatsApp()}
        className={`bg-green-500 text-white p-3 rounded-full shadow-xl transition-all duration-300 
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <FaWhatsapp size={22} />
      </button>

      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-3 lg:p-4 rounded-full shadow-xl transition-transform duration-300"
        style={{
          transform: open ? "rotate(360deg)" : "rotate(0deg)",
        }}
      >
        <MdOutlineMessage className="text-[22px]" />
      </button>
    </div>
  );
};

export default MessageTab;
