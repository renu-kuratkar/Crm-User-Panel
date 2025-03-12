import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SalesCharts from './SalesCharts';
import NewSales from './NewSales';

const dataPie = [
  { name: 'A', value: 70 },
  { name: 'B', value: 30 },
];

const COLORS = ['#2E7D32', '#66BB6A'];

const dataLine = [
  { name: 'Jan', claimed: 200, expired: 100 },
  { name: 'Feb', claimed: 300, expired: 150 },
  { name: 'Mar', claimed: 400, expired: 200 },
  { name: 'Apr', claimed: 500, expired: 250 },
  { name: 'May', claimed: 620, expired: 250 },
];

const Sales = () => {
  return (
    <div className="p-5 bg-gray-100 ">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        {[{ icon: '👁️', value: '98,000', label: 'Visitors' },
          { icon: '🛒', value: '22,000', label: 'Orders' },
          { icon: '💰', value: '$70,000', label: 'Sales' },
          { icon: '📉', value: '$25,000', label: 'Expenses' }].map((item, index) => (
          <div key={index} className="p-5 bg-white rounded-lg shadow flex items-center space-x-3">
            <span className="text-green-700 text-2xl">{item.icon}</span>
            <div>
              <p className="text-xl font-semibold">{item.value}</p>
              <p className="text-gray-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-4 gap-4">
        {["Customers", "Emails", "Orders"].map((title, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-3">{title}</h2>
            <PieChart width={120} height={100}>
              <Pie data={dataPie} cx="50%" cy="50%" innerRadius={35} outerRadius={50} dataKey="value">
                {dataPie.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
            </PieChart>
            <div className="flex justify-around mt-3 text-sm">
              <div>
                <p className="text-gray-500">New</p>
                <p className="text-lg font-semibold">450</p>
              </div>
              <div>
                <p className="text-gray-500">Returned</p>
                <p className="text-lg font-semibold">900</p>
              </div>
            </div>
          </div>
        ))}

        {/* Newly Released Chart Section with No Bottom Padding */}
        <div className="bg-white p-5 rounded-lg shadow pb-0">
          <h2 className="font-semibold text-lg mb-3">Deals</h2>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={dataLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="claimed" stroke="#2E7D32" strokeWidth={2} />
              <Line type="monotone" dataKey="expired" stroke="#E53935" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-around mt-1 text-sm">
            <div>
              <p className="text-gray-500">Claimed</p>
              <p className="text-lg font-semibold">620</p>
            </div>
            <div>
              <p className="text-gray-500">Expired</p>
              <p className="text-lg font-semibold">250</p>
            </div>
          </div>
        </div>
      </div>
      <SalesCharts/>
      <NewSales/>
    </div>
  );
};

export default Sales;
