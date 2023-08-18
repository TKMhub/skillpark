import Header from "../conponents/header/Header";
import Footer from "../conponents/footer/Footer";

export default function mainfunc({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
