import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function CurrentPlan() {
  const { metrics } = useSelector((state) => state.metrics);

  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const Total =
      metrics.onm + metrics.direction + metrics.matrix + metrics.tss;

    if (Total >= 0 && Total <= 100000) {
      setPlan("Starter");
    } else if (Total >= 100001 && Total <= 500000) {
      setPlan("Business");
    } else if (Total >= 500001 && Total <= 1000000) {
      setPlan("Professional");
    } else if (Total >= 1000001 && Total <= 5000000) {
      setPlan("Premium");
    }
  });

  return <>{plan + " Plan"}</>;
}

export { CurrentPlan };
