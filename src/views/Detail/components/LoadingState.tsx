export const LoadingState = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-500 mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading track details...</p>
      </div>
    </div>
  );
};