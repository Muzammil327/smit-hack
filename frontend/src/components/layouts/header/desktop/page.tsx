import Link from "next/link";
import Container from "@/src/components/Element/container/page";
import { Logob } from "@/src/components/Element/logo/page";

const Navbar = [
  {
    id:1,
    name:"Home",
    link:"/"
  },
  {
    id:2,
    name:"About",
    link:"/about"
  },
  {
    id:3,
    name:"Contact",
    link:"/contact"
  }
]

export default function DesktopNavbar() {

  return (
    <nav className="navbar">
      <Container>
        <div className="inner">
          <><Logob /></>
          <div className="desktop">
            <div className="menu">
              <ul>
                {Navbar.map((data: any) => (
                  <>
                    <li key={data.id}>
                      <Link href={`${data.link}`} aria-label={data.name}>
                        {data.name}
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="btn">
              <Link href="/auth/register" aria-label="Register User">
                Register
              </Link>
              <Link href="/auth/login" aria-label="Login User">
                Login
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
