//summoners

import React, { useEffect, useState } from "react";
import { Card, List, Row } from "antd";
import type { RadioChangeEvent } from "antd";
import { Radio, Col } from "antd";
import "@/layouts/styles.less";

interface HerosDataType {
  ename: number;
  cname: string;
  id_name: string;
  title: string;
  new_type: number;
  hero_type: number;
  skin_name: string;
  moss_id: number;
  hero_type2?: number;
  pay_type?: string;
  time?: string;
  upgrade?: string;
  m_bl_link?: string;
}

function HeroIcon({ cname, ename }: { cname: any; ename: any }) {
  let heroIconUrl =
    "https://game.gtimg.cn/images/yxzj/img201606/heroimg/" +
    ename +
    "/" +
    ename +
    ".jpg";
  return (
    <>
      <List.Item style={{ width: "83px" }}>
        <img src={heroIconUrl}></img>
        <p> {cname}</p>
      </List.Item>
    </>
  );
}
function FreeHero({ ename }: { ename: any }) {
  const [hover, setHover] = useState(false);
  const handlemouseover = () => {
    setHover(true);
  };
  const handlemouseout = () => {
    setHover(false);
  };
  let iconUrl =
    "https://game.gtimg.cn/images/yxzj/img201606/heroimg/" +
    ename +
    "/" +
    ename +
    ".jpg";
  let freeHoverUrl =
    "https://game.gtimg.cn/images/yxzj/img201606/heroimg/" +
    ename +
    "/" +
    ename +
    "-freehover.png";
  return (
    <div onMouseOver={handlemouseover} onMouseOut={handlemouseout}>
      {hover ? (
        <>
          <img src={freeHoverUrl}></img>
        </>
      ) : (
        <>
          <img src={iconUrl}></img>
        </>
      )}
    </div>
  );
}
//
const HerosList: React.FC<{ heros: HerosDataType[] }> = ({ heros }) => {
  const [value, setValue] = useState(0);
  const freeHeros = [105, 108, 109, 111];
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const RadioItems = () => {
    return (
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={0}>全部</Radio>
        <Radio value={1}>战士</Radio>
        <Radio value={2}>法师</Radio>
        <Radio value={3}>坦克</Radio>
        <Radio value={4}>刺客</Radio>
        <Radio value={5}>射手</Radio>
        <Radio value={6}>辅助</Radio>
      </Radio.Group>
    );
  };

  const dataSource = heros.filter((r) =>
    value === 0 ? true : r.hero_type2 == value || r.hero_type == value
  );

  console.log("datasource", dataSource);

  return (
    <>
      <div className="iconList">
        <div className="back">
          <div className="freeHero">
            <div>
              <p>周免英雄</p>
            </div>
            <Row>
              {freeHeros.map((hero) => (
                <FreeHero key={hero} ename={hero}></FreeHero>
              ))}
            </Row>
          </div>
          <Card className="card">
            <RadioItems></RadioItems>
          </Card>
          <List
            style={{ paddingLeft: "5px" }}
            grid={{
              xs: 1,
              sm: 4,
              md: 8,
              lg: 8,
              xl: 8,
              xxl: 8,
            }}
            dataSource={dataSource}
            renderItem={(hero) => (
              <HeroIcon cname={hero.cname} ename={hero.ename}></HeroIcon>
            )}
          ></List>
        </div>
      </div>
      <footer className="footer"> aaa </footer>
    </>
  );
};

export default HerosList;
