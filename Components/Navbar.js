import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/cities">
        <a>Cities</a>
      </Link>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </nav>
  );
};
export default Navbar;
