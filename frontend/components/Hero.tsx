import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="h-[500px] bg-red-800 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: ` linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://i.pinimg.com/1200x/69/db/57/69db57560a09d039998a379acceac5f0.jpg")`,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 pt-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-100 mb-4">
            Nuvaria AI-powered visuals, shaping ideas effortlessly.
          </h1>
          <p className="text-gray-600 text-lg">
            Find & understand the best science, faster.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative ">
          <input
            type="text"
            placeholder="Ask the research..."
            className="w-full px-6 py-4 pr-14 rounded-[5px] border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-600 text-black p-3 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
