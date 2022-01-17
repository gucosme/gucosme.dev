import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Main = styled("main")({
  textAlign: "center",
  paddingTop: "30vh",
});

interface VSpacerProps {
  size?: number | string;
}
const VSpacer = styled("div")((props: VSpacerProps) => ({
  width: 1,
  height: props.size ?? 10,
}));

export default function App() {
  return (
    <Main>
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
    </Main>
  );
}
