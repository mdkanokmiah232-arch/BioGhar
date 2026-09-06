import { Suspense } from "react";
import BiodataSearchContent from "./BiodataSearchContent";

export default function BiodataSearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4 animate-pulse">🔍</div>
            <p className="text-gray-500">লোড হচ্ছে...</p>
          </div>
        </div>
      }
    >
      <BiodataSearchContent />
    </Suspense>
  );
}
