import { useEffect } from "react";
import Homepage from "./page/home";

import AOS from 'aos';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
