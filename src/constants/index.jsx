import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Special Kids School",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Special Kids School",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Special Kids School",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Special Kids School",
    image: user4,
    text: "Working with the team at Special Kids School was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Special Kids School",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Special Kids School",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Adaptive Learning Environment",
    description:
      "Create an adaptive learning environment tailored to the individual needs of each student.",
  },
  {
    icon: <Fingerprint />,
    text: "Accessible Communication Tools",
    description:
      "Facilitate communication with accessible tools designed for students with special needs.",
  },
  {
    icon: <ShieldHalf />,
    text: "Inclusive Curriculum Resources",
    description:
      "Access a wide range of inclusive curriculum resources to support diverse learning needs.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Progress Tracking",
    description:
      "Track students' progress in real-time to provide timely support and intervention.",
  },
  {
    icon: <PlugZap />,
    text: "Parent-Teacher Collaboration",
    description:
      "Enable seamless collaboration between parents and teachers to support student learning.",
  },
  {
    icon: <GlobeLock />,
    text: "Secure Data Management",
    description:
      "Ensure the security and privacy of student data with robust data management practices.",
  },
];

export const checklistItems = [
  {
    title: "Personalized Learning Plans",
    description:
      "Tailor learning plans to meet the unique needs and abilities of each student.",
  },
  {
    title: "Accessible Technology Integration",
    description:
      "Integrate accessible technology tools to enhance learning experiences for students with special needs.",
  },
  {
    title: "Individualized Support Services",
    description:
      "Provide individualized support services to address the specific challenges faced by each student.",
  },
  {
    title: "Collaborative Problem-Solving",
    description:
      "Engage in collaborative problem-solving with students, parents, and other stakeholders to address educational challenges.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "£0",
    features: [
      "Adaptive Learning Environment",
      "Basic Support Services",
      "Limited Access to Curriculum Resources",
      "Limited Progress Tracking",
    ],
  },
  {
    title: "Standard",
    price: "£50",
    features: [
      "Adaptive Learning Environment",
      "Standard Support Services",
      "Access to Full Curriculum Resources",
      "Real-Time Progress Tracking",
    ],
  },
  {
    title: "Premium",
    price: "£100",
    features: [
      "Adaptive Learning Environment",
      "Premium Support Services",
      "Access to Full Curriculum Resources",
      "Real-Time Progress Tracking",
      "Dedicated Parent-Teacher Collaboration Portal",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Accessibility Guidelines" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Job Opportunities" },
  { href: "#", text: "Volunteer Opportunities" },
];
