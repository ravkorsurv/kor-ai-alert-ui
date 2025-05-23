import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import AlertTable from '../components/AlertTable';

const MOCK_ALERTS = [
  { id: 'AL-001', risk: 'High', status: 'In Review', assignedTo: 'Analyst1', age: 2 },
  { id: 'AL-002', risk: 'Medium', status: 'Open', assignedTo: 'Analyst2', age: 5 },
  { id: 'AL-003', risk: 'Low', status: 'Closed', assignedTo: 'Analyst3', age: 12 }
];

export default function Dashboard() {
  const [filters, setFilters] = useState({ status: '', risk: '' });

  const filteredAlerts = MOCK_ALERTS.filter(alert =>
    (!filters.status || alert.status === filters.status) &&
    (!filters.risk || alert.risk === filters.risk)
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard Summary</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 shadow rounded">Open Alerts: 1</div>
        <div className="bg-white p-4 shadow rounded">In Review: 1</div>
        <div className="bg-white p-4 shadow rounded">Closed: 1</div>
      </div>
      <FilterBar filters={filters} setFilters={setFilters} />
      <AlertTable alerts={filteredAlerts} />
    </div>
  );
}
