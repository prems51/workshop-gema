import React from 'react';
import { 
  RobotIcon, 
  BrainIcon, 
  ChipIcon, 
  RocketIcon, 
  UsersIcon, 
  ShieldIcon,
  VideoIcon,
  StarIcon,
  AwardIcon
} from '../components/icons.jsx';

export const WORKSHOP_SPECS = {
  title: "AI & Robotics Summer Workshop",
  ageGroup: "8–14 Years",
  duration: "4 Weeks",
  mode: "Online (Live)",
  fee: "₹2,999",
  startDate: "15 July 2026",
};

export const faqs = [
  {
    question: "Is prior coding experience required?",
    answer: "No, the workshop is designed to be completely beginner-friendly! We start with the absolute fundamentals using engaging, visual programming models that kids can pick up instantly, then transition to core AI and robotics principles."
  },
  {
    question: "What devices are needed?",
    answer: "Your child will need a laptop or desktop computer (Windows, macOS, or ChromeOS) with a webcam, a stable internet connection, and a web browser. No complex software installations are required; we will provide access to our cloud-based simulation environments."
  },
  {
    question: "Will students receive a certificate?",
    answer: "Yes, absolutely! Every child who participates in the workshop and completes their graduation capstone project will receive a premium, personalized Certificate of Completion in AI & Robotics, which makes for a proud addition to their academic achievements."
  },
  {
    question: "Are recordings available?",
    answer: "Yes! We understand that summer schedules can be busy. All live online sessions are recorded, and students/parents will have lifetime access to the class recordings, study materials, and code repositories via our learning portal."
  }
];

export const outcomes = [
  {
    title: "Build & Program Robots",
    desc: "Assemble, simulate, and write logical scripts for virtual and simple physical robots.",
    color: "bg-blue-50 border-blue-100 text-blue-600",
    pill: "bg-blue-100 text-blue-700",
    icon: <RobotIcon className="w-8 h-8 text-blue-600" />
  },
  {
    title: "AI & Machine Learning",
    desc: "Understand neural networks and teach AI systems to recognize images and gestures.",
    color: "bg-purple-50 border-purple-100 text-purple-600",
    pill: "bg-purple-100 text-purple-700",
    icon: <BrainIcon className="w-8 h-8 text-purple-600" />
  },
  {
    title: "Logical Coding Logic",
    desc: "Develop core computing skills like loops, variables, functions, and algorithms.",
    color: "bg-orange-50 border-orange-100 text-orange-600",
    pill: "bg-orange-100 text-orange-700",
    icon: <ChipIcon className="w-8 h-8 text-orange-600" />
  },
  {
    title: "Create Fun Games",
    desc: "Build playable web games integrating sensory AI rules, robot avatars, and timers.",
    color: "bg-teal-50 border-teal-100 text-teal-600",
    pill: "bg-teal-100 text-teal-700",
    icon: <RocketIcon className="w-8 h-8 text-teal-600" />
  },
  {
    title: "Creativity & Teamwork",
    desc: "Collaborate in interactive breakout rooms to solve complex engineering challenges.",
    color: "bg-rose-50 border-rose-100 text-rose-600",
    pill: "bg-rose-100 text-rose-700",
    icon: <UsersIcon className="w-8 h-8 text-rose-600" />
  },
  {
    title: "Future Tech Skills",
    desc: "Establish a robust foundation in high-growth fields before high school starts.",
    color: "bg-amber-50 border-amber-100 text-amber-600",
    pill: "bg-amber-100 text-amber-700",
    icon: <ShieldIcon className="w-8 h-8 text-amber-600" />
  }
];

export const benefits = [
  {
    title: "Live Interactive Classes",
    desc: "Forget passive videos. Kids participate in real-time, ask questions, and share their screens in a fun group environment.",
    icon: <VideoIcon className="w-6 h-6 text-indigo-600" />,
    color: "from-indigo-50 to-blue-50 border-indigo-100"
  },
  {
    title: "Expert Mentors",
    desc: "Guided by passionate educators from top engineering backgrounds who explain complex concepts through simple analogies.",
    icon: <StarIcon className="w-6 h-6 text-amber-500" />,
    color: "from-amber-50 to-orange-50 border-amber-100"
  },
  {
    title: "Hands-on Projects",
    desc: "Students learn by making. They will complete 4 major portfolio-worthy projects including a custom chatbot and smart alarm.",
    icon: <ChipIcon className="w-6 h-6 text-teal-600" />,
    color: "from-teal-50 to-emerald-50 border-teal-100"
  },
  {
    title: "Certificate of Completion",
    desc: "Boost your child's confidence. Celebrate their learning with a premium verifiable certificate of achievement.",
    icon: <AwardIcon className="w-6 h-6 text-purple-600" />,
    color: "from-purple-50 to-pink-50 border-purple-100"
  }
];
