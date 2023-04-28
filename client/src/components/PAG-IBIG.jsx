import React from "react";
import "./../components/style.css";
// import ShowDescription from "../components/hide_desc";
// import EditDeduction from "../components/edit_deduction";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import ShowTable from "./show_table";
import AddDeductionPagIbig from "./add_deduction_pagibig";
import EditDeductionPagIbig from "./edit_deduction_pagibig";

const PAGIBIG = () => {
  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });

  return (
    <div className="h-screen relative ">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}

        <Sidebar />

        <div className="flex-1 p-12 mt-20">
          <div className=" flex justify-between mb-2">
            {" "}
            <ShowTable />
          </div>
          <div className="mb-5  ">
            <AddDeductionPagIbig />
          </div>
          <div class="relative Table  shadow-md rounded-lg ">
            <table class="sticky top-0 text-center text-xs">
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>

              <thead className=" text-gray-700 font-semibold  uppercase">
                <tr>
                  <th
                    rowspan="2  "
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300"
                  >
                    #
                  </th>
                  <th
                    rowspan="2"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300"
                  >
                    Monthly Compensation
                  </th>

                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-2/4 border border-gray-300"
                  >
                    Membership Savings (Contribution)
                  </th>
                  <th
                    rowspan="2"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300"
                  >
                    Button
                  </th>
                </tr>

                <tr>
                  <th scope="col" class="w-1/3 border border-gray-300">
                    Employee
                  </th>
                  <th scope="col" class="w-1/3 border border-gray-300">
                    Employeer (if any)
                  </th>
                  <th scope="col" class="w-1/3 border border-gray-300">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr className="border border-gray-300 ">
                  <td className="border border-gray-300">1</td>
                  <td className="w-1/5 px-6 py-4 capitalize border border-gray-300">
                    ₱1,500 and below
                  </td>

                  <td class="w-1/5 px-6 py-4 capitalize border border-gray-300">
                    1%
                  </td>
                  <td class="w-1/5 border border-gray-300">1%</td>
                  <td class="w-1/5 border border-gray-300 px-4">2%</td>
                  <td class="w-1/5 border border-gray-300 px-4">
                    <EditDeductionPagIbig />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAGIBIG;
