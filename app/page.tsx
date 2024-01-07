// pages/index.tsx
import React from "react";
import Business from "./types/Business";
import businesses from "./data/businesses";

const IndexPage: React.FC = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="text-gray-900 h-[calc(100vh-6.2rem)] mx-auto container bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Business</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Busines Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Created at</th>
                <th></th>
              </tr>
              {/* Repeat the following block for each user */}
              {businesses.map((business: Business, index: number) => (
                <tr
                  key={index}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">{business.name}</td>
                  <td className="p-3 px-5">{business.email}</td>
                  <td className="p-3 px-5">{business.createdAt}</td>
                  <td className="p-3 px-5 flex justify-end">
                    <button
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
