import Image from "next/image";

export default function MyClockImage() {
  return (
    <div className="w-full flex justify-center">
      <Image
        src="/clock.png"
        alt="an image of a clock"
        width={100}
        height={100}
      />
    </div>
  );
}
