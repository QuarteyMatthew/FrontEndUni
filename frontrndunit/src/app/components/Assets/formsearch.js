export default function ForumS() {
  return (
    <div className="w-full max-w-sm min-w-[200px] ml-auto">
      <div className="relative">
        <input
          className="w-full dark:bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 text-white transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow 
          sm:py-2 sm:pr-28
          max-sm:py-2 max-sm:pr-12 max-sm:text-base max-sm:rounded-lg max-sm:text-center"
          placeholder="Trova"
        />
        <button
          className="absolute top-1 right-1 flex items-center rounded dark:bg-slate-800 py-1 px-2.5 border border-transparent text-center 
          text-sm text-white transition-all shadow-sm hover:shadow focus:dark:bg-slate-700 focus:shadow-none active:dark:bg-slate-700
          hover:dark:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
          max-sm:relative max-sm:w-full max-sm:mt-2 max-sm:justify-center max-sm:bg-slate-800 max-sm:py-2"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 mr-2 max-sm:mr-1"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}
