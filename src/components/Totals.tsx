import { TotalItem, Button } from "../components";

export const Totals = () => {
  return (
    <div className="bg-green-900 rounded-[15px] py-6 text-White px-8 lg:w-[433px] lg:flex lg:flex-col lg:justify-between">
      <div>
        <TotalItem text="Tip Amount" value={0} />
        <TotalItem text="Total" value={32.79} />
      </div>
      <Button text="Reset" />
    </div>
  );
};
