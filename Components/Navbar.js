import Link from "next/link";
import { myLink, Top } from "./navbarStyle";

const Navbar = () => {
  return (
    <body>
      <Top>
        <myLink>
          <Link href="/">
            <a>Home</a>
          </Link>
        </myLink>

        <myLink>
          <Link href="/cities">
            <a>Cities</a>
          </Link>
        </myLink>

        <myLink>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </myLink>
      </Top>
    </body>
  );
};
export default Navbar;

///why when I add body it works
