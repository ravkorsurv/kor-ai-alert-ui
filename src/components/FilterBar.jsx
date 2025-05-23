import React from 'react';

export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex gap-4 p-4 bg-gray-50 border-b">
      <select value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))} className="border px-2 py-1">
        <option value="">All Statuses</option>
        <option value="Open">Open</option>
        <option value="In Review">In Review</option>
        <option value="Closed">Closed</option>
      </select>
      <select value={filters.risk} onChange={e => setFilters(f => ({ ...f, risk: e.target.value }))} className="border px-2 py-1">
        <option value="">All Risks</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}
