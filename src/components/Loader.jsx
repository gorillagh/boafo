import { Loader2 } from "lucide-react";

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center py-10 text-gray-500 dark:text-gray-400">
      <Loader2 className="h-6 w-6 animate-spin mr-2" />
      {text}
    </div>
  );
}
