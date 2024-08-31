import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Sidi Ahmed" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.0}
          />
        </header>

        {/* <RecentTransactions 
        accounts={accountsData}
        transactions={account?.transactions}
        appwriteItemId={appwriteItemId}
        page={currentPage}
      /> */}
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}, {}]} />
    </section>
  );
};

export default Home;
