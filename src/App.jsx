import { useEffect } from "react";
import Header from "./components/Header";
export default function App() {
  useEffect(() => {
    console.log("una vez", Date.now());
  }, []);
  return <Header />;
}
