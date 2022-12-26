import React, { useState } from "react";
import Otis from "./Otis";
import PreviewCard from "../../../components/PreviewCard";
import Divider from "../../../components/Divider";
import { Dialog } from "@mui/material";

const OtisPreview = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <PreviewCard>
        <div
          className="p-2"
          onClick={() => {
            setOpen(true);
          }}
        >
          <div className="aspect-square w-full">
            <img src="logos/otis.png" alt="beacons logo" className="w-full" />
          </div>
          <Divider />
          <div className="text-3xl">Otis</div>
        </div>
      </PreviewCard>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="p-4">
          <Otis />
        </div>
      </Dialog>
    </div>
  );
};

export default OtisPreview;
