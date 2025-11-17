interface Props {
  text: string;
}

export const Button = ({ text }: Props) => {
  return (
    <button className="bg-green-400 text-green-900 uppercase font-bold h-12 w-full rounded-[5px] cursor-pointer hover:bg-green-200 transition-colors">
      {text}
    </button>
  );
};
