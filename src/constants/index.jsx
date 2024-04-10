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
    company: "School of Needs",
    image: user1,
    text: "I am beyond grateful for the care and support my child receives at School of Needs. The team's dedication and compassion have made a world of difference in our lives.",
  },
  {
    user: "Jane Smith",
    company: "School of Needs",
    image: user2,
    text: "My heart overflows with joy knowing that my child is thriving at School of Needs. The team's love and encouragement have helped my child blossom in unimaginable ways.",
  },
  {
    user: "David Johnson",
    company: "School of Needs",
    image: user3,
    text: "Words cannot express the depth of gratitude I feel for the School of Needs team. They have not only supported my child's growth but have also become like family to us.",
  },
  {
    user: "Ronee Brown",
    company: "School of Needs",
    image: user4,
    text: "School of Needs has been a beacon of hope for our family. The love and acceptance my child receives here are truly heartwarming. We are blessed to be a part of this community.",
  },
  {
    user: "Michael Wilson",
    company: "School of Needs",
    image: user5,
    text: "My child's journey at School of Needs has been nothing short of miraculous. The dedication and care shown by the staff have turned challenges into triumphs, and for that, I am forever grateful.",
  },
  {
    user: "Emily Davis",
    company: "School of Needs",
    image: user6,
    text: "I am constantly in awe of the incredible impact School of Needs has had on my child's life. The nurturing environment and personalized attention have helped my child shine brighter than ever before.",
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
