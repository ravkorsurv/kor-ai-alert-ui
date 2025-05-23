import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CaseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">← Back</button>
      <h2 className="text-2xl font-bold mb-2">Alert {id}</h2>
      <p className="mb-2">Risk: High</p>
      <p className="mb-2">Status: In Review</p>
      <div className="mb-4">
        <label className="font-semibold block mb-1">AI Case Rationale</label>
        <textarea className="w-full p-2 border rounded" rows="6" defaultValue="AI Rationale: Based on pattern, access to confidential info, and timing." />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Audit Trail</h3>
        <ul className="list-disc list-inside">
          <li>2025-05-21: Alert created</li>
          <li>2025-05-22: Assigned to Analyst1</li>
          <li>2025-05-23: AI score = 92% (Insider Dealing)</li>
        </ul>
      </div>
    </div>
  );
}
