const NavBar = () => {
  return (
    <div className="flex bg-red-500 justify-between nv pl-20 pr-20">
      <div className="flex">
        <img className="h-10" src="./images/logo.jpg" alt="" />
        <p className="ml-20 text-3xl">Lo Pizza</p>
      </div>
      <div>
        <ul className="flex list-none mt-2">
          
          <li>Home</li>
          <li>Menu</li>
          <li>Outlet</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="text-lg hover:bg-red-400 rounded-lg">Sign-in</button>
    </div>
  );
};

export default NavBar;
