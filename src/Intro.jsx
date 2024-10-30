import { introData } from "./introData";

const Intro = () => {
  return (
    <div className="flex items-center justify-between bg-black p-4 sticky top-0 z-50">
      <div className="mr-10">
        <img src="src/images/Steam.jpg" className="h-[80px] w-auto" alt="Steam Logo" />
      </div>

      <div className="flex-grow">
        <ul className="flex justify-center space-x-8">
          {introData.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="text-white hover:text-yellow-400 transition duration-200 cursor-pointer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="ml-2 bg-yellow-400 text-blue-950 px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-200">
          Search
        </button>
      </div>
    </div>
  );
};

export default Intro;
