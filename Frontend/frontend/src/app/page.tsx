import LiveVideo from "@/components/LiveVideo";
import TimeSeriesGraph from "@/components/TimeSeriesGraph";
import VehicleCountTable from "@/components/VehicleCountTable";

export default function Home() {
  return (
    <div className="relative min-h-screen p-10 grid grid-cols-2 gap-8">
      <h1 className="text-4xl font-bold text-center mb-10 col-span-2">
        Vehicle Detection Dashboard
      </h1>
      <LiveVideo />
      <TimeSeriesGraph />
      <VehicleCountTable />
    </div>
  );
}
