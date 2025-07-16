import { Skeleton } from "@/components/ui/skeleton";


export default function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
      <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
}
