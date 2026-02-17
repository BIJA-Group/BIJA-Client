"use client";

import Footer from "./_components/includes/Footer";
import Header from "./_components/includes/Header";

const LandingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;