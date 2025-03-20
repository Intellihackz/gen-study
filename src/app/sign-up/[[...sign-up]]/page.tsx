import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (

    <div className="flex h-screen w-full flex-colpx-6 py-24 text-center items-center justify-center mt-3.5">
      <SignUp />
    </div>

  );
}
