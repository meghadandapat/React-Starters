import React, { useState } from "react";
import data from "./Data";
import List from "./List";
import "./Bday.css";
function Page() {
  const [mydata, setData] = useState(data);
  const handleClear = () => {
    setData([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{mydata.length} Birthdays Today</h3>
        <List data={mydata} />
        <button onClick={handleClear}>Clear All birthdays</button>
      </section>
    </main>
  );
}

export default Page;
