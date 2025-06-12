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

        <div className="space-y-12">
          {/* 1. Rendered Model */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="/SCARA-Robot-Arm.png"
              alt="SCARA Robot Render"
              className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
            />
            <div className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                Rendered SCARA Model
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                SolidWorks-based rendering of the SCARA robot, demonstrating the
                Z-axis lead screw and motor assembly.
              </p>
            </div>
          </div>

          {/* 2. Animation */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="/SCARA-Robot-Arm.gif"
              alt="SCARA Robot Animation"
              className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
            />
            <div className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                SCARA Robot Animation
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                A dynamic simulation showing inverse kinematics and motion
                profiles using PID control.
              </p>
            </div>
          </div>

          {/* 3. SolidWorks Snapshot */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="/SCARA-Robot-SolidWorks.jpg"
              alt="SolidWorks Design"
              className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
            />
            <div className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                SolidWorks CAD View
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                A CAD model designed in SolidWorks showing internal components
                and mechanical layout.
              </p>
            </div>
          </div>
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




