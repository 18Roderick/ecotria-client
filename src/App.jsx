import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("una vez", Date.now());
  }, []);
  return <div>App</div>;
}
