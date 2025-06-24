import { useEffect } from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  const sayHi = async () => {
    const response = await fetch("/api/");
    console.log("Response from /api/:", response);
  };
  useEffect(() => {
    sayHi();
  }, []);
  return (
    <div>
      Im some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default OtherPage;
