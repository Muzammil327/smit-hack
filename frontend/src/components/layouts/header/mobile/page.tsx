import Link from "next/link";
import Container from "@/src/components/Element/container/page";
import { useState } from "react";
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
export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 2000);
  };
  return (
    <nav className="navbar">
      <Container>
        <div className="inner">
          <>
            <Logob />
          </>
          <div className={open ? "mobile" : ""}>
            {open ? (
              <>
                <div className="mlogo">
                  <Link href="/" onClick={toggleNavbar}>
                    <Logob />
                  </Link>
                </div>
                <div className="menu">
                  <ul>
                    {Navbar.map((datas: any) => (
                      <>
                        <li key={datas.id}>
                          <Link
                            href={datas.link}
                            onClick={toggleNavbar}
                            aria-label={datas.name}
                          >
                            {datas.name}
                          </Link>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <div className="btn">
                  <Link
                    href="/auth/register"
                    onClick={toggleNavbar}
                    aria-label="Register"
                  >
                    Register
                  </Link>
                  <Link
                    href="/auth/login"
                    onClick={toggleNavbar}
                    aria-label="Login"
                  >
                    Login
                  </Link>
                </div>
              </>
            ) : null}
          </div>
          <div id="toggle-navbar">
            <button
              aria-label="Icons open and close"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? (
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="-80 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                  >
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                  </svg>
              ) : (
                <>
                <svg
                  width="20px"
                  height="20px"
                  fill="#fff"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"
                  />
                </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
