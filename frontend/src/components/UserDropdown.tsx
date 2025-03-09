import { useState } from "react";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
        <img src="src\assets\148237879.jpeg" alt="User" className="w-8 h-8 rounded-full" />
        <span>Developer</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md">
          <ul className="py-2">
            <a href="https://github.com/GitLakshman">
              <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" >Profile</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
