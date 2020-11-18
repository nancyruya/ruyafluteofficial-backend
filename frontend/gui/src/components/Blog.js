import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Blogs = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={props.data}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

/*
Among many of the after-classes when I was in primary school, one of them is gymnastics. 
My weakness was flexibility. 
It became extremely painful at the end, teacher put one of my leg on bench and forcing my crotch touching the ground and I cried uncontrobably, which was useless.
Fear quietly came in. 
I was happy that during the way to my last gymnastics lesson, our car had an accident in the middle of the road, so I missed the last lesson.
A scene suddently came into mind.
When I was in college and in the car with friendship family.
I forgot everything else but the family's son (same age with me)'s word "life is fair!"
Wait, I didn't hear what else you've said. I quietly mumbled: "it really isn't!". But I was questioning.
Literally everything.
*/

export default Blogs;
