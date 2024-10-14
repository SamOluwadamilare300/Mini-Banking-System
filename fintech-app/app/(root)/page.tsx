"use client";
import Header from '@/components/Header';
import RightSideBar from '@/components/RightSideBar';
import TotalBalance from '@/components/TotalBalance';
import React from 'react';

const Home = () => {
  const loggedIn = {
    firstName: 'Damilare',
    lastName: 'Afolabi',
    email: 'damilarea71@gmail.com',
  };

  // Define currentBalance
  const currentBalance = 502233; // Example balance

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title='Welcome,'
            user={loggedIn.firstName || 'Guest'}
            subtext="Manage Accounts And Transaction Efficiently"
          />

          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={currentBalance} // Use the currentBalance variable
          />
        </header>
        Recent Transactions
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]} // Fixed typo from transaction to transactions
        banks={[{ currentBalance }, { currentBalance }]} // Pass currentBalance dynamically
      />
    </section>
  );
};

export default Home;
