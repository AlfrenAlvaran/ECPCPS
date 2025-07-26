import {
  chartData_api,
  count_webinars,
  donut_chart_api,
  get_all_webinars_api,
  group_chart_api,
} from "@/apis/webinar";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const [countWebinar, setCountWebinar] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [groupChartData, setGroupChartData] = useState([]);
  const [donutChartData, setDonutChartData] = useState([]);
  useEffect(() => {
    get_all_events();
    (async () => {
      try {
        const total = await count_webinars();
        // console.log(total)
        setCountWebinar(total);
      } catch (error) {}
    })();
    CHART();
    GroupChart();
    donutChart();
  }, []);

  const get_all_events = async () => {
    try {
      const response = await get_all_webinars_api(skip, limit);
      const newEvents = response?.data || [];

      setEventsData((prev) => {
        const ids = new Set(prev.map((e) => e._id));
        const uniqueNew = newEvents.filter((e) => !ids.has(e._id));
        return [...prev, ...uniqueNew];
      });
      setSkip((prev) => prev + limit);
      if (newEvents.length < limit) setHasMore(false);
    } catch (error) {
      console.error("EventContext Error", error?.message);
    }
  };
  const GroupChart = async () => {
    try {
      const res = await group_chart_api();
      setGroupChartData(res);
    } catch (error) {
      console.error("EventContext Error", error?.message);
    }
  };
  const CHART = async () => {
    try {
      const data = await chartData_api();
      // console.log("Chart", data)
      setChartData(data);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const donutChart = async () => {
    const data = await donut_chart_api();
    setDonutChartData(data);
  };
  const count_events = async () => {};
  const values = {
    setEventsData,
    eventsData,
    countWebinar,
    chartData,
    groupChartData,
    donutChartData,
  };
  return (
    <EventContext.Provider value={values}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
