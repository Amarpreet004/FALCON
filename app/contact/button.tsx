import { CoolMode } from "@/components/magicui/cool-mode";

export function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium">
          Click Me! (Local Effect)
        </button>
      </CoolMode>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This button has its own particle effect, plus click anywhere on any page for global particles!
        </p>
      </div>
    </div>
  );
}
