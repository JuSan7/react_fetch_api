import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  // useEffect to call fetchItems when reqType changes
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchItems(); // Call the fetch function inside useEffect
  }, [reqType]); // Dependency array includes reqType to refetch on change

  return (
    <>
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <Lists items={items} /> */}
      <Table items={items} />
    </>
  );
};

export default App;
