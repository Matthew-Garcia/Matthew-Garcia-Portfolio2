'use client'

import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { assets } from '@/assets/assets';

export default function ScaraRobotPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">SCARA Robot Arm</h1>
        <p className="text-lg text-gray-700 mb-6">
          A robotic arm built using microcontrollers, ROS2, and PID control.
        </p>
        <img
          src="/work-1.png"
          alt="SCARA Robot Arm"
          className="rounded-lg shadow-lg mb-6"
        />
        <ul className="list-disc list-inside text-base text-gray-600 mb-4">
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
      </div>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
