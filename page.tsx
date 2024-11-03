 
import Navber from "./component/navber";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-wide text-white drop-shadow-lg">
          Welcome to my First Assignment 🎉
        </h1>
        <p className="text-lg text-white/80">
          This is just the beginning. Let’s make something awesome!
        </p>
        <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
