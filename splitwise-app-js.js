import React from 'react';
import { Home, Users, PlusCircle, Activity, User } from 'lucide-react';

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-orange-500 p-4 flex justify-between items-center">
        <button className="text-white">
          <Home size={24} />
        </button>
        <h1 className="text-white text-xl font-semibold">Golden Room</h1>
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto">
        <div className="p-4">
          <p className="text-center text-green-600 font-semibold mb-4">
            You are owed ₹ 331.33 overall
          </p>
          <div className="bg-white rounded-lg shadow mb-4 p-4">
            <p>Ritwik S. owes you ₹ 862.16</p>
            <p>You owe Mehul S. ₹ 530.83</p>
          </div>
          <div className="flex space-x-2 mb-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md flex-grow">
              Settle up
            </button>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-md border border-purple-600 flex-grow">
              Convert to USD
            </button>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-md border border-purple-600 flex-grow">
              Charts
            </button>
          </div>
          <h2 className="font-semibold mb-2">August 2024</h2>
          <div className="space-y-4">
            <ExpenseItem
              date="Aug 24"
              icon="🛒"
              description="Atta"
              amount="309.00"
              lent={true}
            />
            <ExpenseItem
              date="Aug 22"
              icon="💡"
              description="Electricity"
              amount="1,310.67"
              lent={true}
            />
            <ExpenseItem
              date="Aug 14"
              icon="🧤"
              description="Maid"
              amount="1,000.00"
              lent={false}
            />
            <ExpenseItem
              date="Aug 11"
              icon="🧼"
              description="Tide"
              amount="104.66"
              lent={true}
            />
            <ExpenseItem
              date="Aug 07"
              icon="📡"
              description="Broadband"
              amount="393.00"
              lent={false}
            />
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white border-t border-gray-200">
        <nav className="flex justify-around">
          <NavItem icon={<Home size={24} />} label="Friends" active />
          <NavItem icon={<Users size={24} />} label="Groups" />
          <NavItem icon={<PlusCircle size={24} />} label="Add" />
          <NavItem icon={<Activity size={24} />} label="Activity" />
          <NavItem icon={<User size={24} />} label="Account" />
        </nav>
      </footer>
    </div>
  );
};

const ExpenseItem = ({ date, icon, description, amount, lent }) => (
  <div className="flex items-center">
    <div className="w-12 text-center">
      <p className="text-xs text-gray-500">{date.split(' ')[0]}</p>
      <p className="text-xs text-gray-500">{date.split(' ')[1]}</p>
    </div>
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center ml-2">
      <span className="text-2xl">{icon}</span>
    </div>
    <div className="ml-4 flex-grow">
      <p className="font-semibold">{description}</p>
      <p className="text-sm text-gray-500">You paid ₹ {amount}</p>
    </div>
    <div className={`text-right ${lent ? 'text-green-600' : 'text-red-600'}`}>
      <p className="font-semibold">
        {lent ? 'you lent' : 'you borrowed'}
      </p>
      <p>₹ {amount}</p>
    </div>
  </div>
);

const NavItem = ({ icon, label, active }) => (
  <button className={`py-2 px-4 flex flex-col items-center ${active ? 'text-green-600' : 'text-gray-500'}`}>
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </button>
);


export default App;
