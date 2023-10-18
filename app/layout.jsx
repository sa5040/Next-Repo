const RootLayout = ({ children }) => {
  console.debug("sanjeev first next");

  return (
    <html lang="en">
      <body>
        <header>[Header]</header>
        <main>{children}</main>
        <footer>[Footer]</footer>
      </body>
    </html>
  );
};

export default RootLayout;
