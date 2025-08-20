import { useNavigate } from "react-router-dom";

type BackButtonProps = {
  path: string;
  
};

export const BackButton = ({ path }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(path)}
      className="flex items-center cursor-pointer text-zinc-400 hover:text-fuchsia-400 transition-colors mb-8 group"
    >
      <svg className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back to Home
    </button>
  );
};