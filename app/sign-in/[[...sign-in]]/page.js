import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    // <div className="flex justify-center items-center h-screen bg-gray-300">
    //   <SignIn />
    // </div>
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <SignIn
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
}
