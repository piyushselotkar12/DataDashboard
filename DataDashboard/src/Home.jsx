import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

function Home() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const [year, setYear] = useState('');
  const [topic, setTopic] = useState('');
  const [sector, setSector] = useState('');
  const [region, setRegion] = useState('');
  const [pest, setPEST] = useState('');
  const [source, setSource] = useState('');
  const [swot, setSWOT] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleFilterChange = (event, setFilter) => {
    setFilter(event.target.value);
  };

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <main className='main-container'>
      

      <div className='filters-section'>
        <h3 className='black-text'>Filters</h3>
        <div className='filters'>
          <select className='filter-select' value={year} onChange={(e) => handleFilterChange(e, setYear)}>
            <option value=''>Year</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
          <select className='filter-select' value={topic} onChange={(e) => handleFilterChange(e, setTopic)}>
            <option value=''>Topic</option>
            <option value='Tech'>Tech</option>
            <option value='Finance'>Finance</option>
            <option value='Health'>Health</option>
          </select>
          <select className='filter-select' value={sector} onChange={(e) => handleFilterChange(e, setSector)}>
            <option value=''>Sector</option>
            <option value='X'>X</option>
            <option value='Y'>Y</option>
            <option value='Z'>Z</option>
          </select>
          <select className='filter-select' value={region} onChange={(e) => handleFilterChange(e, setRegion)}>
            <option value=''>Region</option>
            <option value='East'>East</option>
            <option value='West'>West</option>
            <option value='North'>North</option>
          </select>
          <select className='filter-select' value={pest} onChange={(e) => handleFilterChange(e, setPEST)}>
            <option value=''>PEST</option>
            <option value='Political'>Political</option>
            <option value='Economic'>Economic</option>
            <option value='Social'>Social</option>
          </select>
          <select className='filter-select' value={source} onChange={(e) => handleFilterChange(e, setSource)}>
            <option value=''>Source</option>
            <option value='ABC'>ABC</option>
            <option value='ABC'>ABC</option>
            <option value='XYZ'>XYZ</option>
          </select>
          <select className='filter-select' value={swot} onChange={(e) => handleFilterChange(e, setSWOT)}>
            <option value=''>SWOT</option>
            <option value='Strength'>Strength</option>
            <option value='Weakness'>Weakness</option>
            <option value='Threats'>Threats</option>
          </select>

          <select className='filter-select' value={country} onChange={(e) => handleFilterChange(e, setCountry)}>
            <option value=''>Country</option>
            <option value='India'>India</option>
            <option value='America'>America</option>
            <option value='Russia'>Russia</option>
          </select>
          <select className='filter-select' value={city} onChange={(e) => handleFilterChange(e, setCity)}>
            <option value=''>City</option>
            <option value='New York'>New York</option>
            <option value='Los Angeles'>Los Angeles</option>
            <option value='Chicago'>Chicago</option>
          </select>
          
          
        </div>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>33</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className='charts'>
        <div className='chart-container'>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='chart-container'>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className='chart-container'>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;
