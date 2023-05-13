import React from "react";

const objs = [
  // {
  //   package: "Feb, Business Pac.",
  //   date: "11/02/21",
  //   price: "3,400",
  //   from: "11/01/22",
  //   to: "11/29/22",
  //   type: "Business Package",
  //   calls: "100,334",
  //   status: "Completed",
  // },
];

function BillingHistory() {
  return (
    <div className="rounded-md p-4 bg-[#202022] ">
      <h2>Billing History</h2>
      <div className="mt-10 flex flex-col gap-3">
        {objs.map((obj, i) => (
          <div key={i}>
            <div className="flex gap-3 p-0 items-center ">
              <h2 className="m-0 ">{obj.package}</h2>
              <p className="m-0">{obj.date}</p>
            </div>
            <div className="text-secondary">ETB {obj.price}</div>
            <div>
              <p className="m-0 p-0">
                {obj.from} - {obj.to}
              </p>
              <p className="m-0 p-0">{obj.type}</p>
              {obj.calls} calls
            </div>
            <div className="flex">
              Payment Status
              <div
                className={
                  "flex-1 text-center " +
                  (obj.status === "Completed"
                    ? "text-green-500"
                    : "text-secondary")
                }
              >
                {obj.status}
              </div>
            </div>
            <div className=" text-center">
              {i !== objs.length - 1 ? (
                <hr className="w-1/2 inline-block border-secondary" />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BillingHistory;
