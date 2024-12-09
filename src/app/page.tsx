import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <h1 className="text-8xl font-bold">LifePulse360</h1>
        <h2 className="text-4xl my-10">
          LifePulse360 is an innovative hybrid platform turning health IT toward
          a holistic patient-client approach
        </h2>
        <h4 className="text-xl">
          Initiating people-centric solution architectures for Medicaid and
          Human Services, Care and Cure Delivery, Risk Prevention, and Case
          Management for Homeless, Veteran Services, High Risk Outpatients and
          Clients.
        </h4>
        <p>
          <Link href="/home" className="hover:underline cursor-pointer">
            Case Manager Portal
          </Link>
        </p>
      </main>
    </div>
  );
}
