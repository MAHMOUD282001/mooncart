import { Link, NavLink } from "react-router-dom";

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `${
    level === 1
      ? "text-[30px] md:text-[40px] lg:text-[50px] font-[700] text-primary"
      : level === 2
      ? "text-[25px] lg:text-[35px] font-[700] text-primary"
      : level === 3
      ? "text-[18px] lg:text-[25px] font-[600] text-primary"
      : level === 4
      ? "text-[16px] lg:text-[20px] font-[600] text-primary"
      : "text-[18px] font-[500] text-primary"
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const BodyOne = ({ children, className }) => {
  const classes = "text-md lg:text-lg font-normal text-primary-gray my-4";
  return <p className={`${className} ${classes}`}>{children}</p>;
};

const BodyTwo = ({ children }) => {
  return <p className="text-base font-semibold text-white">{children}</p>;
};

const Caption = ({ children }) => {
  return <p className="text-sm font-normal text-primary-gray">{children}</p>;
};

const Span = ({ children }) => {
  return <span className="text-xs font-semibold text-white">{children}</span>;
};

const CustomNavLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 font-sans cursor-pointer";

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};

const CustomLink = ({ className, children }) => {
  const linkStyles = "text-[15px] font-medium font-sans cursor-pointer";

  return <NavLink className={`${linkStyles} ${className}`}>{children}</NavLink>;
};

export { CustomNavLink, CustomLink, Title, BodyOne, BodyTwo, Caption, Span };
