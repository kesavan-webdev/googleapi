import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-5 md:flex-row">
      {/* navbar */}
      <Navbar />
      {/* content */}
      <h2>contents</h2>
      {/* map */}
      <h2>map</h2>
    </main>
  );
}
