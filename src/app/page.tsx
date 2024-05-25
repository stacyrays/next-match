import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FaRegSmile } from "react-icons/fa";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-500 font-semi-bold">Hello app</h1>
      <Button
        as={Link}
        href='/members'
        color='primary'
        variant='bordered'
        startContent={<FaRegSmile size={20}/>}
      >
        Click Me!
      </Button>
    </div>
  );
}
