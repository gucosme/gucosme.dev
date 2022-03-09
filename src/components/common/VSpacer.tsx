import { styled } from "@mui/material/styles";

interface VSpacerProps {
  size?: number | string;
}
const VSpacer = styled("div")((props: VSpacerProps) => ({
  width: 1,
  height: props.size ?? 10,
}));

export default VSpacer;
