import Navber from "../component/navber"
export default function Tennis() {
    return (
        <div
            className="min-h-screen bg-cover bg-center text-white flex items-center justify-center p-6"
            style={{ backgroundColor: '#4B0082' }} // Dark purple background
        >
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-2xl text-center">
                <h1 className="text-5xl font-bold text-purple-300 mb-4">Tennis 🎾</h1>
                <p className="text-lg leading-relaxed">
                    Tennis is played between two (singles) or four players (doubles), who use rackets 
                    to hit a ball over a net into the opponent’s court. The goal is to make it hard for 
                    the opponent to return the ball properly. Points are scored in sets, and the first to 
                    win a certain number of sets wins the match. Think of it as intense ping-pong with 
                    more running—and cooler headbands! 😎
                </p>
            </div>
        </div>
    );
}

  