import { CircleArrowRight } from "lucide-react";
import { NavButton } from "@/components/NavButton";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <header>
        <div className="flex justify-end">
          <NavButton href="/home" label="Login Page" icon={CircleArrowRight} />
        </div>
      </header>
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        {/* <h1 className="text-8xl font-bold">LifePulse360</h1> */}
        <h1 className="text-8xl font-bold text-indigo-900">
          Social and Clinical Case Manager Platform
        </h1>
        <h2 className="text-4xl my-10  text-indigo-900">
          The Social and Clinical Case Manager platform is an innovative hybrid
          platform turning health IT toward a holistic patient-client approach.
        </h2>
        {/* <h2 className="text-4xl my-10">
          LifePulse360 is an innovative hybrid platform turning health IT toward
          a holistic patient-client approach
        </h2> */}
        <h4 className="text-xl  text-indigo-800">
          Initiating people-centric solution architectures for Health and Human
          Services, Care and Cure Delivery, Risk Prevention, and Case Management
          for Homeless, Veteran Services, High Risk Outpatients and Social
          Services Clients.
        </h4>
      </main>
    </div>
  );
}
