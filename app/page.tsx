"use client";

import Image from "next/image";
import { Instagram, Play, Pause, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "./header";

export default function Landing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessType: "",
    numProducts: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email Address is required";
    if (!formData.businessType.trim()) newErrors.businessType = "Business Type is required";
    if (!formData.numProducts.trim()) newErrors.numProducts = "Number of products is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      console.log("Form Data to Submit:", formData);
      const response = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        router.push("https://shopdesk.im/");
      } else {
        const errorText = await response.text();
        console.error("Form submission failed:", errorText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToForm = () => {
    console.log("Join Now clicked, scrolling to form");
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
      const formPosition = formRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: formPosition, behavior: "smooth" });
    } else {
      console.error("formRef is not attached to an element");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-[#ffffff] min-h-screen overflow-x-hidden flex flex-col">
      <Header/>

      <div className="w-full max-w-[1440px] mx-auto p-4 m-0">
        <motion.div
          className="w-full md:w-[867px] h-auto md:h-[299px] mx-auto flex flex-col items-center justify-center text-center gap-[24px] px-4 mt-[80px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeIn}>
            <h2 className="text-[32px] md:text-[60px] font-bold text-[#009A49] leading-none">
              E-commerce Entrepreneurs
            </h2>
            <p className="mt-2 p-4 text-[#171717] text-[24px] md:text-[40px] font-bold leading-none">
              Take Control of Your Stock — Manage <br /> Inventory in One Click
            </p>
          </motion.span>
          <motion.p className="text-[#5F5F5F] mb-4 text-[16px] md:text-[24px]" variants={fadeIn}>
            Managing inventory and tracking stock records doesn’t have to be difficult. Shopdesk gives e-commerce
            entrepreneurs a simple yet powerful inventory management tool to track, update, and organize stock records
            with ease.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full md:w-[1003px] h-[300px] md:h-[613px] mt-[32px] md:mt-[60px] mb-[20px] mx-auto border-[10px] md:border-[20px] border-[#00000080] rounded-[12px] md:rounded-[24px] overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleUp}
        >
          <video
            ref={videoRef}
            className={`w-full h-full object-cover ${!isPlaying ? "blur-[4px]" : ""}`}
            src="/videos/shopdesk.mp4"
            loop
            muted
            autoPlay
          />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-[6px]">
            <Image src="/images/box.png" alt="Logo" width={24} height={24} className="h-[24px] w-[24px]" />
            <h1 className="text-2xl font-circular-std font-medium leading-none tracking-normal text-gray-800">
              ShopDesk
            </h1>
          </div>
          <motion.button
            onClick={togglePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full p-3 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? <Pause className="text-white" size={24} /> : <Play className="text-white" size={24} />}
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full h-auto flex flex-col items-center gap-[32px] md:gap-[64px] mt-[50px] md:mt-[100px] px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1 className="text-center text-[#009A49] bg-[#009A490D] w-[111px] h-[40px] rounded-[24px] pt-2 pr-4 pb-2 pl-4" variants={fadeIn}>
            FEATURES
          </motion.h1>
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1216px] h-auto gap-[32px]"
            variants={staggerContainer}
          >
            {[
              {
                bg: "#ECDDFF",
                iconBg: "#9747FF1A",
                icon: "/images/_ui-package.png",
                title: "Track Stock with One<br /> Click",
                list: [
                  "🔹 Quickly update stock levels in real time without manual effort.",
                  "🔹 Know exactly what’s in stock, low stock, or out of stock with one simple action.",
                  "🔹 Stop guessing your inventory records – See your stock status instantly.",
                ],
              },
              {
                bg: "#FFEED7",
                iconBg: "#FB9C2A1A",
                icon: "/images/icon.png",
                title: "Prevent Overselling & Out-of-Stock <br />Issues",
                list: [
                  "🔹 Avoid stockouts by getting instant alerts when inventory is low.",
                  "🔹 Prevent overselling mistakes by keeping your stock records accurate and up to date.",
                  "🔹 Know when to restock products before they run out, so you never miss a sale.",
                ],
              },
              {
                bg: "#F0CFF9",
                iconBg: "#A903DB1A",
                icon: "/images/_ui-sale.png",
                title: "Keep Accurate Inventory<br /> Records",
                list: [
                  "🔹 Track stock movements and see which products are selling fast.",
                  "🔹 Maintain organized inventory records to help with better stock planning.",
                  "🔹 Eliminate manual errors by using an automated stock tracking tool.",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="w-full max-w-[384px] h-auto border-[0.5px] rounded-[24px] p-6 flex flex-col items-center gap-5"
                style={{ backgroundColor: feature.bg }}
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div
                  className="w-[48px] h-[48px] rounded-[8px] flex items-center justify-center"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <Image src={feature.icon} alt="" width={24} height={24} className="h-[24px] w-[24px]" />
                </div>
                <p className="font-bold text-[#2A2A2A] text-center" dangerouslySetInnerHTML={{ __html: feature.title }} />
                <ul className="list-none w-full max-w-[336px] h-auto gap-[8px] flex flex-col items-center text-[#717171] font-circular-std text-[16px] leading-[24px] text-center">
                  {feature.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          <motion.span className="w-full max-w-[1280px] h-auto flex flex-col items-center gap-[16px] md:gap-[32px]" variants={fadeIn}>
            <p className="font-circular-std font-medium text-[24px] md:text-[36px] leading-[30px] md:leading-[44px] text-center text-[#2A2A2A]">
              Stay Ahead - Manage Your Stock with Ease!
            </p>
            <p className="font-circular-std font-[450] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-center text-[#717171]">
              Join Shopdesk today and take control of your inventory!
            </p>
          </motion.span>
          <motion.button
            className="w-full max-w-[494px] h-[62px] bg-[#000000] rounded-[12px] border border-black flex items-center justify-center gap-[6px] pt-[19px] pr-4 pb-[19px] pl-6 text-white font-bold text-[16px] mb-[50px] md:mb-[100px]"
            variants={scaleUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
          >
            Join Now
            <ArrowRight size={24} />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        ref={formRef}
        className="bg-[#E5F5ED] w-full h-auto flex flex-col items-center justify-center gap-[32px] md:gap-[64px] pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px] px-4 mb-[50px] md:mb-[100px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h1
          className="text-center text-[#009A49] bg-green-200 w-full max-w-[591px] h-[72px] rounded-[64px] pt-6 pr-[20px] md:pr-[70px] pb-6 pl-[20px] md:pl-[70px] flex items-center justify-center gap-6 font-circular-std font-medium text-[24px] md:text-[32px]"
          variants={fadeIn}
        >
          Start Managing Your Inventory
        </motion.h1>
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full max-w-[500px] h-auto gap-6 mt-4"
          variants={staggerContainer}
        >
          {[
            { placeholder: "Full Name", key: "fullName", type: "text" },
            { placeholder: "Email Address", key: "email", type: "text" },
            { placeholder: "Business Type", key: "businessType", type: "select" },
            { placeholder: "Number of products", key: "numProducts", type: "text" },
          ].map((field, index) => (
            <motion.div key={index} className="w-full" variants={fadeIn}>
              {field.type === "select" ? (
                <select
                  className="w-full max-w-[500px] h-[50px] bg-white text-[#B8B8B8] border border-gray-300 rounded-md p-2"
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                >
                  <option value="" disabled>{field.placeholder}</option>
                  <option value="retail">Retail</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full max-w-[500px] h-[50px] bg-white text-[#B8B8B8] border border-gray-300 rounded-md p-2"
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                />
              )}
              {errors[field.key] && <span className="text-red-500 text-sm">{errors[field.key]}</span>}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            className="w-full max-w-[494px] h-[62px] bg-[#000000] text-[#ffffff] rounded-[12px] border border-black flex items-center justify-center gap-[6px] pt-[19px] pr-4 pb-[19px] pl-6 font-bold text-[16px] md:text-[20px]"
            variants={scaleUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
            <ArrowRight size={24} />
          </motion.button>
        </motion.form>
      </motion.div>
      <Footer />
    </div>
  );
}