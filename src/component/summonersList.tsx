//summoners

import React, { useEffect } from "react";
import { Card, List } from "antd";
import { Button, Flex } from "antd";
import "@/layouts/styles.less";
import { Footer } from "antd/es/layout/layout";

interface SummonersDataType {
  summoner_id: number;
  summoner_name: string;
  summoner_rank: string;
  summoner_description: string;
}

function SummonersIcon({ name, id }: { name: any; id: any }) {
  let summonerIconUrl =
    "https://game.gtimg.cn/images/yxzj/img201606/summoner/" + id + ".jpg";
  return (
    <div>
      <List.Item style={{ width: "83px" }}>
        <img src={summonerIconUrl} />
        <p>{name}</p>
      </List.Item>
    </div>
  );
}

const SummonersList: React.FC<{ summoners: SummonersDataType[] }> = ({
  summoners,
}) => {
  return (
    <>
      <div className="iconList">
        <List
          className="icon"
          grid={{
            xs: 1,
            sm: 8,
            md: 8,
            lg: 8,
            xl: 8,
            xxl: 8,
          }}
          dataSource={summoners}
          renderItem={(summoners) => (
            <SummonersIcon
              name={summoners.summoner_name}
              id={summoners.summoner_id}
            ></SummonersIcon>
          )}
        ></List>
      </div>
      <footer className="footer"> aaa </footer>
    </>
  );
};

export default SummonersList;
