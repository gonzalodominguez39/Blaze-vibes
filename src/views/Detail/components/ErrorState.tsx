import { useNavigate } from "react-router-dom";

export const ErrorState = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 bg-zinc-800 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-white mb-2">Track not found</h3>
        <p className="text-zinc-400 mb-4">The track you're looking for doesn't exist</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-fuchsia-500 text-white px-6 py-2 rounded-full font-medium hover:bg-fuchsia-400 transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};