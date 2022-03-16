import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <p>Header</p>
      <Link to={"portfolio"}>Portfolio</Link>;
    </div>
  );
};

export const NavbarLink = (name, path) => {
  return <Link to={path}>{name}</Link>;
};
