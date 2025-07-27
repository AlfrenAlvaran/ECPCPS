import React, { useContext } from "react";
import InfoCards from "@/components/InfoCards";
import CustomBarChart from "@/components/charts/CustomBarChart";
import CustomDonutChart from "@/components/charts/CustomDonutChart";
import { menu } from "@/constants/menu";
import { EventContext } from "@/context/EventContext";

const Dashboard = () => {
  const { countWebinar } = useContext(EventContext);
  return (
    <div className="mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCards label="Webinars" icon={menu[1].icon} value={countWebinar} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full h-90 rounded-xl shadow-sm p-4 bg-white">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Monthly Webinar Data
          </h2>
          <CustomBarChart />
        </div>

        <div className="w-full h-90 rounded-xl shadow-sm p-4 bg-white">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Webinar Attendees
          </h2>
          <CustomDonutChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
