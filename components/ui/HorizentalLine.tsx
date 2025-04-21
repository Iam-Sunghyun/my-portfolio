function HorizentalLine({
  text,
}: Readonly<{
  text: string;
}>) {
  return (
    <div className="flex items-center gap-2  mb-20 tracking-wide">
      {/* <div className="w-full h-0.5   bg-blue-100"></div> */}
      <h1>{text}</h1>
      <div className="w-full h-0.5 bg-blue-100"></div>
    </div>
  );
}

export default HorizentalLine;
