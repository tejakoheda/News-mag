import { useState } from "react";
import { NavBar } from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  // Default to 'top' or 'breaking'
  const [category, setCategory] = useState("top");

  return (
    <>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
};

export default App;
