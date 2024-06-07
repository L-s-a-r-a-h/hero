import React, { useEffect, useState } from "react";
import { getData } from "@/data/getApi";
import ItemsList from "@/component/itemsList";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const itemsUrl = "/api/web201605/js/item.json";

  useEffect(() => {
    getData(itemsUrl).then((result) => {
      setItems(result);
    });
  }, []);
  return (
    <div>
      <ItemsList items={items}></ItemsList>
    </div>
  );
}
