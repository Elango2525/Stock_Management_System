import React, { useRef } from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Line, PieChart, Pie, Cell, BarChart, Bar, ResponsiveContainer } from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const StockProductChart = () => {
  const lineChartData = [
    { name: 'Jan', stock: 30 },
    { name: 'Feb', stock: 45 },
    { name: 'Mar', stock: 28 },
    { name: 'Apr', stock: 35 },
    { name: 'May', stock: 20 },
    { name: 'Jun', stock: 40 },
  ];

  const barChartData = [
    { name: 'Jan', value: 15 },
    { name: 'Feb', value: 20 },
    { name: 'Mar', value: 10 },
    { name: 'Apr', value: 25 },
    { name: 'May', value: 18 },
    { name: 'Jun', value: 30 },
  ];

  const pieChartData = [
    { id: 0, value: 10, label: 'Series A' },
    { id: 1, value: 15, label: 'Series B' },
    { id: 2, value: 20, label: 'Series C' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const pdfRef = useRef();

  const printToPdf = (scaleFactor = 1) => {
    if (pdfRef.current) {
      const input = pdfRef.current;

      html2canvas(input, { scale: scaleFactor }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // Set PDF to A4 size
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save('charts.pdf');
      });
    }
  };

  return (
    <div ref={pdfRef}>
      {/* Line Chart */}
      <div>
        <h2>Stock Trends Over Time</h2>
        <p>Visualizing monthly stock trends for the first half of the year.</p>
        <ResponsiveContainer width="33%" height={300}>
          <LineChart
            data={lineChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="stock" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div>
        <h2>Monthly Sales Volume</h2>
        <p>Comparing monthly sales volume throughout the first half of the year.</p>
        <ResponsiveContainer width="33%" height={300}>
          <BarChart
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div>
        <h2>Revenue Distribution</h2>
        <p>Illustrating the distribution of revenue among different series.</p>
        <ResponsiveContainer width="33%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    
      <center><button onClick={() => printToPdf(1.5)}>Generate Report</button></center>
    </div>
  );
};

export default StockProductChart;
