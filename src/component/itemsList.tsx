//summoners

import { Card, List } from "antd";
import React from "react";

import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Col } from "antd";
import "@/layouts/styles.less";

interface ItemsDataType {
  item_id: number;
  item_name: string;
  item_type: number;
  price: number;
  total_price: number;
  des1: string;
  des2?: string;
}
function ItemsIcon({ name, id }: { name: any; id: any }) {
  let itemIconUrl =
    "https://game.gtimg.cn/images/yxzj/img201606/itemimg/" + id + ".jpg";
  return (
    <Col style={{ width: "83px" }}>
      <img src={itemIconUrl}></img>
      <p>{name}</p>
    </Col>
  );
}
const ItemsList: React.FC<{ items: ItemsDataType[] }> = ({ items }) => {
  const [value, setValue] = useState(0);

  console.log("items:", items);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);

    setValue(e.target.value);
  };

  const dataSource = items.filter((r) =>
    value === 0 ? true : r.item_type == value
  );
  const FilterItems = () => {
    return (
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={0}>全部</Radio>
        <Radio value={1}>攻击</Radio>
        <Radio value={2}>法术</Radio>
        <Radio value={3}>防御</Radio>
        <Radio value={4}>移动</Radio>
        <Radio value={5}>打野</Radio>
        <Radio value={7}>辅助</Radio>
      </Radio.Group>
    );
  };

  return (
    <>
      <div className="iconList">
        <div style={{ backgroundColor: "white", paddingTop: "24px" }}>
          <Card className="card-small">
            <FilterItems></FilterItems>
          </Card>
          <List
            className="icon"
            grid={{
              xs: 1,
              sm: 4,
              md: 8,
              lg: 8,
              xl: 8,
              xxl: 8,
            }}
            dataSource={dataSource}
            renderItem={(item) => (
              <ItemsIcon name={item.item_name} id={item.item_id}></ItemsIcon>
            )}
          ></List>
        </div>
      </div>
      <footer className="footer"> bbbb </footer>
    </>
  );
};

export default ItemsList;
