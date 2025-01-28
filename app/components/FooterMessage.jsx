import { HeartIcon } from "lucide-react";

const FooterMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="flex items-center space-x-2">
        <HeartIcon className="text-red-500 w-6 h-6" />
        <p className="text-lg font-medium"></p>
      </div>
      <p className="mt-2 text-base font-medium underline decoration-wavy decoration-indigo-500">
        Crafted by Harsh Shula
      </p>
    </div>
  );
};

export default FooterMessage;
