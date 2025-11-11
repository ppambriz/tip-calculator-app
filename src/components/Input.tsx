interface Props{
  label: string;
  value: number;
  iconUrl: string;
}

export const Input = ({label, value, iconUrl}:Props) => {
  return (
    <div className="flex flex-col mb-8">

      <div className="flex justify-between">
        <label
        className="font-bold text-gray-500 mb-2" htmlFor="bill">{label}</label>
        <p className="hidden text-Orange-400 font-bold">Can't be zero</p>
      </div>
      
      <div className=" relative">
        <input id="bill" className="bg-gray-50 rounded-[5px] focus:outline-1 focus:outline-green-400 cursor-pointer h-12 text-right pr-4 text-2xl font-bold text-green-900" type="text" value={value} />
        <img className="absolute top-4 left-2" src={iconUrl} alt="icon" />
      </div>
    </div>
  )
}
