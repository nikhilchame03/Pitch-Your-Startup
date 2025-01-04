
import { auth } from "@/auth";
import StartupForm from "@/components/ui/StartupForm";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>

     <StartupForm></StartupForm>
    </>
  );
};

export default Page;