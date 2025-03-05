import React from 'react';
import { Table } from './components/Table';
import { tableData } from './data';

function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Аналитика показателей</h1>
        <div className="bg-white rounded-lg shadow">
          <Table data={tableData} />
        </div>
      </div>
    </div>
  );
}

export default App;