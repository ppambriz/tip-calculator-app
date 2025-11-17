interface Props {
    text: string;
    value: number;
}

export const TotalItem = ({text,value}: Props) => {
  return (
    <div className="flex justify-between mb-7 items-center">
      <div>
        <p className="font-bold">{text}</p>
        <p className="text-[.8125rem] text-gray-400">/ Person</p>
      </div>
      <p className="font-bold text-[2rem] text-green-400 md:text-5xl">{value.toFixed(2)}</p>
    </div>
  );
};
