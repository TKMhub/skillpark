import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useRecoilState } from "recoil";
import { backdropCircle } from "@/app/recoil/atoms/atom";

export default function BackdropCircle() {
  const [open, setOpen] = useRecoilState(backdropCircle);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress size={70} />
      </Backdrop>
    </div>
  );
}
