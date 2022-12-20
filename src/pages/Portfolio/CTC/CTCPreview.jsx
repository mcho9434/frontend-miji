import React, { useState } from "react";
import PreviewCard from "../../../components/PreviewCard";
import Divider from "../../../components/Divider";
import { Dialog } from "@mui/material";
import CTC from "./CTC";
const CTCPreview = () => {
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
              src="logos/code_the_change.png"
              alt="beacons logo"
              className="w-full"
            />
          </div>
          <Divider />
          <div className="text-lg">Code the Change</div>
          <div>Los Angeles</div>
        </div>
      </PreviewCard>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="p-4">
          <CTC />
        </div>
      </Dialog>
    </div>
  );
};

export default CTCPreview;
