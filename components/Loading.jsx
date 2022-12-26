import { Icons } from "../assets";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen min-h-[400px] bg-black">
      <div className="animate-[spin_2s_infinite]">
        <Icons name="starDark" />
      </div>
    </div>
  );
};

export default Loading;
