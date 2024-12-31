export const Welcome = () => {
  return (
    <div className="p-6 flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Welcome!</h1>

      <p className="text-xl text-center">
        You can add movies and series to your watchlist while surfing the web.
      </p>

      <span className="text-white/50">IMDB / TMDB</span>

      <button className="bg-primary-default text-white px-4 py-2 rounded-lg font-medium">
        Connect Account
      </button>
    </div>
  );
};
