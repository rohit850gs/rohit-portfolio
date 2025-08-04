// Portfolio website for Vadarevu Rohit
// Built using React + TailwindCSS with smooth Apple-style transitions

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="h-screen flex flex-col justify-center items-center text-center gap-4 px-4">
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}>
          Vadarevu Rohit
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 max-w-xl"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}>
          Data Science Student | Aspiring Software Engineer, to create meaningful impact through every challenge I face.
        </motion.p>
        <div className="flex gap-4 mt-4">
          <a href="mailto:rohitvadarevu@gmail.com"><Button variant="outline">Email Me</Button></a>
          <a href="https://www.linkedin.com/in/vadarevu-rohit-103216297/" target="_blank"><Button variant="outline"><Linkedin className="mr-2" />LinkedIn</Button></a>
          <a href="https://github.com/rohit850gs" target="_blank"><Button variant="outline"><Github className="mr-2" />GitHub</Button></a>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-lg">
          <span>Python</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>C Language</span>
          <span>Machine Learning</span>
          <span>Problem Solving</span>
          <span>Time Management</span>
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <Card className="bg-gray-800 text-white max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">EVENTSPARK</h3>
            <p className="mb-2 text-gray-300">Centralized College Event Management Platform</p>
            <p className="text-sm text-gray-400">
              Built using React, Node.js, Express.js, and Supabase. Enables students to register & track events securely. Replaced WhatsApp clutter with a smooth, organized platform.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="px-6 py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-4">Resume</h2>
        <a href="/Resume%20rohit.pdf" target="_blank" className="text-blue-400 underline">View My Resume</a>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; 2025 Vadarevu Rohit. All rights reserved.
      </footer>
    </main>
  );
}
