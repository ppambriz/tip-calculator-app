import { Input,PercetButton } from "../components"

export const Calculator = () => {
  return (
    <div className="bg-white p-8 w-[375px] m-auto rounded-[25px]">
      <Input iconUrl="/images/icon-dollar.svg" label="Bill" value={0}/>
      <PercetButton />
      <Input iconUrl="/images/icon-person.svg" label="Number of People" value={0}/>
    </div>
  )
}
