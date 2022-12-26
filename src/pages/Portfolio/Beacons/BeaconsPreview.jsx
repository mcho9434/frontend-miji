import React, { useState } from "react";
import PreviewCard from "../../../components/PreviewCard";
import Divider from "../../../components/Divider";
import { Dialog } from "@mui/material";

import Beacons from "./Beacons";

const BeaconsPreview = () => {
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
            <img
              src="logos/beacons.png"
              alt="beacons logo"
              className="w-full"
            />
          </div>
          <Divider />
          <div className="text-3xl">Beacons</div>
        </div>
      </PreviewCard>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="p-4">
          <Beacons />
        </div>
      </Dialog>
    </div>
  );
};

export default BeaconsPreview;
