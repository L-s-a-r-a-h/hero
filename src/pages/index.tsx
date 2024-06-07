import Layout from "@/layouts";
import React, { useEffect, useState } from "react";
import HerosList from "@/component/hero";
import heros from "@/data/herolist.json";
import { getData } from "@/data/getApi";
export default function HomePage() {
  const [heros, setHeros] = useState([]);
  const herosUrl = "/apiweb201605/js/herolist.json";

  useEffect(() => {
    getData(herosUrl).then((result) => {
      setHeros(result);
    });
  }, []);

  console.log("render: ", heros);

  return (
    <div>
      <HerosList heros={heros}></HerosList>
    </div>
  );
}
