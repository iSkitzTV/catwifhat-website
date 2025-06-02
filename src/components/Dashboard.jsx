import React, { useEffect, useState } from 'react';
import { fetchTokenInfo } from '../api/tokenApi';

export default function Dashboard() {
  const [tokenInfo, setTokenInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadTokenData() {
      try {
        setLoading(true);
        const data = await fetchTokenInfo();
        setTokenInfo(data);
      } catch (e) {
        setError('Error fetching token data');
      } finally {
        setLoading(false);
      }
    }

    loadTokenData();
    const interval = setInterval(loadTokenData, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-center py-10">Loading token data...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">CatWifHat Token Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <StatCard label="Name" value={tokenInfo.name} />
        <StatCard label="Symbol" value={tokenInfo.symbol} />
        <StatCard label="Total Supply" value={tokenInfo.total_supply} />
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="p-6 bg-blue-50 rounded-lg shadow-md">
      <p className="text-sm text-gray-700">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}