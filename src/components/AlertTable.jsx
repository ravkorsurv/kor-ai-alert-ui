import React from 'react';
import { Link } from 'react-router-dom';

export default function AlertTable({ alerts }) {
  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Alert ID</th>
          <th className="border p-2">Risk</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Assigned</th>
          <th className="border p-2">Age (days)</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map(alert => (
          <tr key={alert.id} className="hover:bg-gray-100">
            <td className="border p-2"><Link to={`/case/${alert.id}`}>{alert.id}</Link></td>
            <td className={`border p-2 ${alert.risk === 'High' ? 'text-red-600' : ''}`}>{alert.risk}</td>
            <td className="border p-2">{alert.status}</td>
            <td className="border p-2">{alert.assignedTo}</td>
            <td className="border p-2">{alert.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
