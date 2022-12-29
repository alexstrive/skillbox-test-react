import { useLoaderData } from "react-router-dom";
import Item from "./Item";

function ItemInfo() {
  const data = useLoaderData() as Item;
  return <div style={{ flex: 3 }}>
    <h3>{data.title}</h3>
    <p>{data.description}</p>
  </div>;
}

export default ItemInfo;