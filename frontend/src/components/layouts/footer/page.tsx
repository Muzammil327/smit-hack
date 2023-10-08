import Link from "next/link";
import TLogo from "@/src/components/Element/logo/page";
import Container from "@/src/components/Element/container/page";

const Information = [
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

const Explore = [
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


export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="inner">
          <div className="item1">
            <TLogo />

            <div className="text">
              <p>
              Explore the latest in development technology on our blog. Stay updated with insightful articles, tutorials, and news, empowering your journey in the ever-evolving world of tech.
              </p>
            </div>
       
          </div>
          <div className="item2">
            <div className="explore">
              <div className="head">
                <h4>Explore</h4>
              </div>
              <div className="link">
                <ul>
                  {Explore.map((data: any) => (
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
            </div>
            <div className="information">
              <div className="head">
                <h4>Information</h4>
              </div>
              <div className="link">
                <ul>
                  {Information.map((data: any) => (
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
            </div>
          </div>
          <div className="item3">
            <div className="head">
              <h4>Subscribe</h4>
            </div>
            <div className="text">
              <p>
                Subscribe our blog with unlimited access to all the post we
                offer.
              </p>
            </div>
            <form>
              <input type="email" placeholder="Enter Your Email" />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </Container>
      <hr />
      <div className="copyright">
        <Container>
          <div className="text">
            <p>
              &copy; {new Date().getFullYear()} design and developed by
              <Link
                href="https://mmuzammil-portfolio.vercel.app/"
                target="blank"
                aria-label="Muzammil"
              >
                Muzammil
              </Link>
              .
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
