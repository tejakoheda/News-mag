import { useState } from "react";
import { NavBar } from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";
import { Analytics } from "@vercel/analytics/next";

const App = () => {
  const [category, setCategory] = useState("top");

  return (
    <>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Analytics />
    </>
  );
};

export default App;
