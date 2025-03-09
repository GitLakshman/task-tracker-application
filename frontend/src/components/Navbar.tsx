import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold dark:text-white">Task Tracker</h1>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <UserDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
