"use client";

import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function ScaraRobotPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="max-w-4xl mx-auto px-6 pt-48 pb-12">
        <h1 className="text-4xl font-bold mb-4">SCARA Robot Arm</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          A robotic arm built using microcontrollers, ROS2, and PID control.
        </p>
        import {motion} from "framer-motion";
        <div className="flex flex-col lg:flex-row items-center gap-8 my-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/SCARA-Robot-Arm.jpg"
              alt="SCARA Robot Arm"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </motion.div>

          {/* TEXT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 bg-white dark:bg-darkTheme p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold mb-4">
              SCARA Robot Control Overview
            </h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
              <li>Arduino-controlled SCARA robot with 3D-printed body</li>
              <li>Stepper motors for precise joint articulation</li>
              <li>Custom GUI in Processing for real-time control</li>
              <li>Supports both forward and inverse kinematics</li>
              <li>Used in pick-and-place tasks with gripper actuation</li>
            </ul>
          </motion.div>
        </div>
        <ul className="list-disc list-inside text-base text-gray-600 dark:text-gray-400 mb-6">
          <li>Custom URDF and Xacro models</li>
          <li>Inverse kinematics & PID tuning</li>
          <li>Simulated in Gazebo, visualized in RViz2</li>
        </ul>
        <a
          href="https://github.com/Matthew-Garcia/SCARA-Robot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          View on GitHub →
        </a>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
