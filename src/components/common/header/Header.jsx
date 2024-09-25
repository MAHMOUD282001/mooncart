import logo from "../../../assets/common/logo.png";
import { menulists } from "../../../assets/data/data";
import { CustomLink, CustomNavLink } from "../CustomComponents";
import { IoIosSearch } from "react-icons/io";
import {
  IoCartOutline,
  IoCloseOutline,
  IoHeartOutline,
  IoMenuOutline,
} from "react-icons/io5";
import HeaderLogic from "./HeaderLogic";
import Sidebar from "../sidebar/sidebarcontent/SidebarContent";

function Header() {
  let [isOpen, isScrolled, menuRef, toggleMenu, isHomePage] = HeaderLogic();

  return (
    <header
      className={
        isHomePage
          ? `header py-3 relative z-20 px-4 ${
              isScrolled ? "bg-white" : "bg-white-100"
            }`
          : `header px-4 py-3 relative z-20 ${
              isScrolled ? "bg-white" : "bg-white-100"
            }`
      }
    >
      <div className="container">
        <nav className="py-4 flex items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-14">
            <div>
              <a href="/">
                <img src={logo} alt="Logo Img" className="h-7 object-contain" />
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {menulists.map((item) => (
                <li key={item.id} className="list-none uppercase">
                  <CustomNavLink href={item.path}> {item.link}</CustomNavLink>
                </li>
              ))}
            </div>
          </div>

          {isHomePage && (
            <div
              className={`${
                isScrolled ? "lg:bg-none" : "lg:bg-black"
              } lg:absolute lg:top-0 lg:right-0 lg:h-[88px] lg:w-1/3`}
            />
          )}

          <div className="flex items-center gap-8">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomLink
                className={`
                ${
                  isScrolled
                    ? "text-primary"
                    : isHomePage
                    ? "lg:text-white text-gray-600"
                    : "text-primary"
                }   `}
              >
                Login
              </CustomLink>
              <span
                className={`
                ${
                  isScrolled
                    ? "text-primary"
                    : isHomePage
                    ? "lg:text-white text-gray-600"
                    : "text-primary"
                }   `}
              >
                /
              </span>
              <CustomLink
                className={`
                ${
                  isScrolled
                    ? "text-primary"
                    : isHomePage
                    ? "lg:text-white text-gray-600"
                    : "text-primary"
                }   `}
              >
                Register
              </CustomLink>
            </div>

            <div className="flex items-center gap-6">
              <IoIosSearch
                size={23}
                className={`
                sm:block hidden
                ${
                  isScrolled
                    ? "text-primary"
                    : isHomePage
                    ? "lg:text-white text-gray-600"
                    : "text-primary"
                }   `}
              />

              <Sidebar isHomePage={isHomePage} isScrolled={isScrolled} />

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 bg-black outline-none text-white flex items-center justify-center z-[1001]"
              >
                {isOpen ? (
                  <IoCloseOutline size={25} />
                ) : (
                  <IoMenuOutline size={25} />
                )}
              </button>
            </div>
          </div>

          <div
            ref={menuRef}
            className={`flex items-center justify-center flex-col gap-10 lg:w-auto w-full h-[100vh] absolute right-0 menu-container ${
              isOpen ? "open" : "close"
            }`}
          >
            {menulists.map((item) => (
              <li key={item.id} className="list-none uppercase">
                <CustomNavLink
                  href={item.path}
                  className={"text-xl text-white"}
                >
                  {" "}
                  {item.link}
                </CustomNavLink>
              </li>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
