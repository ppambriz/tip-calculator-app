interface Props{
  percent: number;
}

export const PercetButton = ({percent}:Props) => {
  return (
    <button className="text-2xl font-bold bg-green-900 text-Grey-50 rounded-[5px] w-full h-12 cursor-pointer hover:bg-green-200 hover:text-green-900">{percent}</button>
  )
}
