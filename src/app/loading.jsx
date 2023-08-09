import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center items-center">
        <Image width={200} height={200} className="h-96 block" src="Spinner.svg" alt="loading..."/>
    </div>
  );
}