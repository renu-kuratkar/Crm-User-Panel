import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const salesData = [
  { name: 'Sun', sales: 5000 },
  { name: 'Mon', sales: 7500 },
  { name: 'Tue', sales: 7000 },
  { name: 'Wed', sales: 7600 },
  { name: 'Thu', sales: 5000 },
  { name: 'Fri', sales: 3000 },
  { name: 'Sat', sales: 4000 },
];

const visitorsData = [
  { name: 'Q1', visitors: 2000 },
  { name: 'Q2', visitors: 4000 },
  { name: 'Q3', visitors: 6000 },
  { name: 'Q4', visitors: 8000 },
];

const SalesCharts = () => {
  return (
    <div className="p-5 grid grid-cols-3 gap-4 bg-gray-100 ">
      {/* Sales & Income Chart - Increased Width */}
      <div className="col-span-2 bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Overall Sales & Income</h2>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="sales" stroke="#2E7D32" fill="#A5D6A7" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Visitors Chart - Reduced Width */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Visitors</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={visitorsData} barSize={30}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visitors" fill="#2E7D32" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesCharts;
