"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("http://localhost:5500/enquiryform/");
  },[router]);
  return <div>Redirecting ....</div>;
}
