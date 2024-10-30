import { navbarData } from "./navbarData"

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 mt-20 flex items-center bg-blue-950 p-2 mx-[100px] rounded-lg shadow-lg">
    <ul className="flex space-x-8">

    {navbarData.map((item) => (
      <li
      className="text-white text-sm font-medium hover:text-blue-300 cursor-pointer hover:text-yellow-400 
      cursor-pointer" key={item.id}>
        {item.name}
        </li>
    ))}
    </ul>

      <div className="ml-auto flex items-center space-x-2">
      <input 
      className="p-2 bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2
      focus:ring-blue-400
      " type="text" placeholder="Search" />
      <button
      className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-200"
      >Go</button>
      </div>
</div>
  )
}

export default Navbar
