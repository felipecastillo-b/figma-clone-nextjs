'use client';
import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import NavBar from "@/components/NavBar";
import RightSidebar from "@/components/RightSidebar";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <NavBar />

      <section className="flex h-full flex-row">
        <LeftSidebar />
          <Live />
        <RightSidebar />
      </section>
    </main>
  );
}