import Navber from "../component/navber"
export default function Cricket() {
    return (
      <div className="min-h-screen bg-green-900 flex items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl max-w-2xl text-center">
          <h1 className="text-5xl font-extrabold text-blue-500 mb-4 drop-shadow-lg">
            Cricket 🏏
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Cricket is a sport where two teams take turns batting and bowling. 
            The batting team aims to score runs, while the bowling team tries 
            to dismiss batters and limit runs. Whoever scores more wins—simple, 
            except for all those sneaky rules! 😉
          </p>
        </div>
      </div>
    );
  }
  