"use client";
export default function Home() {
  function sayhello() {
    alert("Hello World!");
    console.log("Hello World!");
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <button onClick={sayhello}className="bg-blue-600 text-yellow-50 p-2 rounded">
          Hello
        </button>
      </div>
    </>
  );
}
