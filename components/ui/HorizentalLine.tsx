function HorizentalLine({
  text,
}: Readonly<{
  text: string;
}>) {
  return (
    <div className="flex items-center gap-2 mt-20 mb-16 tracking-wide">
      <h1>{text}</h1>
      <div className="w-full h-0.5 bg-blue-100"></div>
    </div>
  );
}

export default HorizentalLine;
