import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (

    <div class="grid h-screen place-content-center bg-white px-4">
      <h1 class="uppercase tracking-widest text-gray-500">404 | Not Found</h1>

    </div>


  );
};

export default Error;
