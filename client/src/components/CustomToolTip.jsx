import React from "react";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border p-3 rounded shadow text-sm">
        <p className="font-semibold text-gray-800">{data.webinarName}</p>
        <p className="text-gray-600">Attendees: {data.attendees}</p>
      </div>
    );
  }

  return null;
};

export default CustomToolTip;
