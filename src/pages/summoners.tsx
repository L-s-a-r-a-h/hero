import React, { useEffect, useState } from "react";
import SummonersList from "@/component/summonersList";
import { getData } from "@/data/getApi";

export default function SummonersPage() {
  const [summoner, setSummoner] = useState([]);
  const summonerUrl = "/api/web201605/js/summoner.json";

  useEffect(() => {
    getData(summonerUrl).then((result) => {
      setSummoner(result);
    });
  }, []);

  return (
    <div>
      <SummonersList summoners={summoner}></SummonersList>
    </div>
  );
}
