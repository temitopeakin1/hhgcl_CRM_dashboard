import TicketCard from "../components/TicketCard";
import { useState, useContext, useEffect } from "react";
import CategoriesContext from "../context";

const Dashboard = () => {
  const [tickets, setTickets] = useState(null);
  const [categories, setCategories] = useContext(CategoriesContext);

  
  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))])
  }, [tickets])


  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,225,255)",
  ];


  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);
  
  return (
    <div className="dashboard">
      <h1>Management</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => {
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>;
          })}
      </div>
    </div>
  );
};

export default Dashboard;
