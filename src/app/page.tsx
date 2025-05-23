"use client";

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10 font-bold text-2xl">
      <h1>test page </h1>
      <div className="flex flex-col items-center justify-center mt-10  text-xl">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleLogin}
        >
          이동 버튼
        </button>
      </div>
    </div>
  );
}
