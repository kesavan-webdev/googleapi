import Category from "@/components/category/category";
import Navbar from "@/components/navbar/navbar";
import SearchBar from "@/components/searchbar/searchbar";

export default function Home() {
  return (
    <main className="min-h-screen gap-5 flex ">
      {/* navbar */}
      <Navbar />
      {/* content */}
      <div className="grid grid-cols-1 p-5 gap-10 md:grid-cols-2 w-full">
        <div>
          <SearchBar />
          <Category />
        </div>

        <div>
          {/* map */}
          <h2>map</h2>
        </div>
      </div>
    </main>
  );
}
