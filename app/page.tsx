"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // 1. Import dynamic

const VerticalProjects = dynamic(() => import("./(components)/VerticalProjects"), { loading: () => <div className="h-40" /> });
const HorizontalProjects = dynamic(() => import("./(components)/HorizontalProjects"), { loading: () => <div className="h-40" /> });
const VeryHorizontalProject = dynamic(() => import("./(components)/VeryHorizontalProject"), { loading: () => <div className="h-40" /> });
const MotionGraphicProjects = dynamic(() => import("./(components)/MotionGraphicProjects"), { loading: () => <div className="h-40" /> });

// Keep simple UI components static if they are light
import AboutSection from "./(components)/AboutSection";
import Hero from "./(components)/Hero";
import SocialMedia from "./(components)/SocialMedia";
import BusinessCard from "./(components)/BusinessCard";
import Logo from "./(components)/Logo";
import MotionGraphic from "./(components)/MotionGraphic";
import { getAllProjects } from "./lib/actions";
import LoadingSpinner from "./(components)/LoadingSpinner";
export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getAllProjects();
      setProjects(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <LoadingSpinner/>;

  return (
    <main className="text-white overflow-x-hidden fade-in">
      <div className="bg-texture relative z-10 w-full flex flex-col">
        <Hero />
        <AboutSection />
        
        {/* Social Media Section */}
        <SocialMedia />
        <VerticalProjects data={projects.filter(p => p.category === 'socialMedia' && p.type === 'vertical')} />
        <HorizontalProjects data={projects.filter(p => p.category === 'socialMedia' && p.type === 'horizontal')} />

        {/* Business Card Section */}
        <BusinessCard />
        <VerticalProjects data={projects.filter(p => p.category === 'businessCard' && p.type === 'vertical')} />
        <VeryHorizontalProject data={projects.filter(p => p.category === 'businessCard' && p.type === 'horizontal')} />

        {/* Logos Section */}
        <Logo />
        <VerticalProjects data={projects.filter(p => p.category === 'logos' && p.type === 'vertical')} />
        <VeryHorizontalProject data={projects.filter(p => p.category === 'logos' && p.type === 'horizontal')} />

        {/* Motion Graphics Section */}
        <MotionGraphic />
        <MotionGraphicProjects data={projects.filter(p => p.category === 'motionGraphics')} />
      </div>
    </main>
  );
}