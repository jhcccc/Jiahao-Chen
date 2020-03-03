/** @jsx jsx */
import { Text, Box } from "@theme-ui/components";
import { jsx } from "theme-ui";
import Image from "gatsby-image";
import useAvatar from "../../../src/hooks/use-avatar";
import { List, Avatar } from "antd";
import {
  ToolTwoTone,
  ThunderboltTwoTone,
  HeartTwoTone,
  BookTwoTone
} from "@ant-design/icons";

const data = [
  {
    title: "Code Pragmatist",
    body: "Write tools and web apps that make things eaiser, elegently.",
    icon: <ToolTwoTone twoToneColor="#13c2c2" />
  },
  {
    title: "UI Minimalist",
    body: "Less is more.",
    icon: <ThunderboltTwoTone twoToneColor="#fadb14" />
  },
  {
    title: "UX Perfectionist",
    body: "Believes in user-centric design. ",
    icon: <HeartTwoTone twoToneColor="#ff4d4f" />
  },
  {
    title: "Sci-Fi enthusiast",
    body:
      "Loves science fiction literature and films.  Favorite sci-fi movie: Arrival. ",
    icon: <BookTwoTone twoToneColor="#2f54eb" />
  }
];

const intro = (
  <p>
    I am studying
    <Text
      sx={{
        fontFamily: "Righteous",
        fontSize: [1, 2, 3],
        color: "#2c7a7b",
      }}
    >
      Software Engineering{" "}
    </Text>{" "}
    at McGill University.
  </p>
);

export default () => {
  const avatar = useAvatar();
  return (
    <div
      sx={{
        display: "grid",
        // default to a stacked layout on small screens
        gridTemplateColumns: ["auto", "0.6fr 1fr"]
      }}
    >
      <Image
        fixed={avatar.childImageSharp.fixed}
        sx={{
          m: "auto", // shorthand for all margins. Just center it.
          border: "3px dotted",
          borderColor: "primary",
          borderRadius: "100%"
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <Box sx={{ mx: "auto", px: 3, py: [5, 1, 1] }}>
        
        <Text sx={{ fontFamily: "body", fontSize: [1, 2, 3] }}>
        {intro}
          <List
            bordered={true}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar
                    style={{ backgroundColor: 'rgba(0,0,0,0)' }}
                    icon={item.icon}
                    size="large"
                    />}
                  title={item.title}
                  description={item.body}
                />
              </List.Item>
            )}
          />
        </Text>
      </Box>
    </div>
  );
};
