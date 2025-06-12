"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

      <main className="max-w-7xl mx-auto px-6 pt-48 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          SCARA Robot Arm
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          This project features a custom-built SCARA (Selective Compliance Articulated Robot Arm) designed for precision pick-and-place tasks. The system combines mechanical engineering, embedded programming, and control theory into a single cohesive robotic platform.


        </motion.p>

        <div className="space-y-12">
          {/* Rendered Model */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/SCARA-Robot-Arm.png"
                alt="SCARA Robot Render"
                className="w-full rounded-lg shadow-md object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="w-full md:w-1/2">
                  <img
                    src="/SCARA-Robot-Arm.png"
                    alt="Arduino-Controlled SCARA Robot Interface"
                    className="w-full rounded-lg shadow-md object-cover"
                  />
                </div>

                <div className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-2">
                    Arduino-Controlled SCARA Robot Interface
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This section showcases the SCARA robotic arm operating in real time with a custom-built graphical user interface (GUI) developed in Processing. The GUI enables intuitive control of the robot using both forward and inverse kinematics.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>Real-time joint angle and Cartesian coordinate control</li>
                    <li>Visual feedback loop with user-defined positions</li>
                    <li>Custom GUI built in Processing</li>
                    <li>Arduino Mega and stepper driver control architecture</li>
                    <li>PID tuning and motion profile adjustment</li>
                  </ul>
                </div>
              </motion.div>

          </div>

          {/* Animation */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/SCARA-Robot-Arm.gif"
                alt="SCARA Robot Animation"
                className="w-full rounded-lg shadow-md object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                SCARA Robot Animation
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                A dynamic simulation showing inverse kinematics and motion
                profiles using PID control.
              </p>
            </motion.div>
          </div>

          {/* SolidWorks Snapshot */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/SCARA-Robot-SolidWorks.jpg"
                alt="SolidWorks Design"
                className="w-full rounded-lg shadow-md object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                SolidWorks CAD View
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                A CAD model designed in SolidWorks showing internal components
                and mechanical layout.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="list-disc list-inside text-base text-gray-600 dark:text-gray-400 my-8"
        >
          <li>Custom URDF and Xacro models</li>
          <li>Inverse kinematics and PID tuning</li>
          <li>Simulated in Gazebo, visualized in RViz2</li>
        </motion.ul>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="https://github.com/Matthew-Garcia/SCARA-Robot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          View on GitHub →
        </motion.a>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
