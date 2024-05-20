import { Button } from "@tremor/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex items-start justify-center pt-48">
      <div className="flex flex-col gap-14 items-center text-pretty text-center">
        <div>
          <h1 className="text-8xl font-bold mb-5">404 Not found</h1>
          <p>
            Looks like your lost. The page your looking for doesn&apos;t exist
          </p>
        </div>
        <Link to={"/"}>
          <Button>Escape</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
