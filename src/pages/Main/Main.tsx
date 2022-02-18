import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { VSpacer } from "@/components/common";

const MainEl = styled("main")({
  textAlign: "center",
  paddingTop: "30vh",
});

const Main = () => (
  <MainEl>
    <Typography variant="body1">
      🚧 This website is under construction 🚧
    </Typography>
    <VSpacer size="10vh" />
    <Typography variant="body2">
      {"Check me out at "}
      <Link href="https://github.com/gucosme">Github</Link>
      {" or "}
      <Link href="https://www.linkedin.com/in/gustavo-cosme/">LinkedIn</Link>
    </Typography>
  </MainEl>
);

export default Main;
