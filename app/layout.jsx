import Link from "next/link";

const RootLayout = ({ children }) => {
  console.debug("sanjeev first next");

  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>[Footer]</footer>
      </body>
    </html>
  );
};

export default RootLayout;
