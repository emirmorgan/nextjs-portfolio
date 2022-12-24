import { Icons } from "../assets";

const Design = () => {
  return (
    <div className="hidden md:flex flex-col">
      <div className="min-w-[100px] min-h-[75px] border border-secondaryColor" />
      <div className="flex flex-col justify-between items-center min-w-[100px] h-full py-3 border-l border-r border-secondaryColor">
        <Icons name="designTop" />
        <Icons name="designMiddle" />
        <Icons name="designBottom" />
      </div>
      <div className="min-w-[100px] min-h-[75px] border border-secondaryColor" />
    </div>
  );
};

export default Design;
