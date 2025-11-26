const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-white font-semibold px-6 py-4">
      <aside>
        <p className="text-left">
          Copyright © {new Date().getFullYear()} - Adrianus Aryo
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
