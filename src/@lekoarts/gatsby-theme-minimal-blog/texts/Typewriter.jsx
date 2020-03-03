/** @jsx jsx */
import TextLoop from "react-text-loop";
import { jsx } from "theme-ui";

export default () => 
    <div sx={{ fontSize: [3, 4, 5], fontFamily: "spectral, serif" }}>
      I prefer {" "}
      <TextLoop>
        <span>Functional</span>
        <span>Test Driven</span>
        <span>User Centric</span>
        <span>Open Source</span>
      </TextLoop>
      ,{" "} and I code in{" "}
      <TextLoop>
        <span>TypeScript</span>
        <span>Python</span>
        <span>JavaScript</span>
      </TextLoop>
    </div>
;
