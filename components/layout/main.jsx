import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="mt-28">{children}</div>
      <Footer />
    </div>
  );
}