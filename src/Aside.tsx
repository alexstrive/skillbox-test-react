import "./Aside.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";

function Aside() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return <div className="aside_container">
    <ul>
      {items.map((item) => <li key={item.id}><Link to={`/item/${item.id}`}>{item.title}</Link></li>)}
    </ul>
  </div>;
}

export default Aside;