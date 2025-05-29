function HorizentalLine({
  text,
  className,
}: Readonly<{
  text: string;
  className?: string;
}>) {
  return (
    <div className="flex items-center gap-2 mt-24 mb-16 tracking-wide leading-[3rem]">
      <div className="w-[4rem] h-0.5 bg-blue-200 "></div>
      <h1 className={`${className} text-[3rem]`}>{text}</h1>
      <div className="w-full h-0.5 bg-blue-200 grow-1"></div>
    </div>
  );
}

export default HorizentalLine;
