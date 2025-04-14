import Card from "./Card";

function ItemList({ lists, className }: Readonly<{ lists: string[]; className?: string }>) {
  return (
    <div className={`flex gap-1 justify-center flex-wrap ${className}`}>
      {lists?.map((skill) => (
        <Card key={skill} className={`px-3 py-1 hover:scale-[103%] text-sm `}>
          {skill}
        </Card>
      ))}
    </div>
  );
}

export default ItemList;
