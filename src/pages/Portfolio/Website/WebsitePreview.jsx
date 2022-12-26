import React, { useState } from "react";
import Website from "./Website";
import PreviewCard from "../../../components/PreviewCard";
import Divider from "../../../components/Divider";
import { Dialog } from "@mui/material";

const WebsitePreview = () => {
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
              src="android-chrome-512x512.png"
              alt="wesbite favicon"
              className="w-full"
            />
          </div>
          <Divider />
          <div className="text-3xl">Personal Website</div>
        </div>
      </PreviewCard>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="p-4">
          <Website />
        </div>
      </Dialog>
    </div>
  );
};

export default WebsitePreview;
