import React, { useState } from "react";
import clsx from "clsx";
import useIsMobile from "../../utils/useIsMobile";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const PortfolioGridItem = ({ title, location, date, body, src, alt }) => {
    const isMobile = useIsMobile();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="flex flex-col transition ease-in-out">
            <img
                className="w-full aspect-square object-cover object-center rounded-lg cursor-pointer"
                src={src}
                alt={alt}
                onClick={handleClickOpen}
            />
            <div className="p-4">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold">{title}</div>
                        <div className="text-sm italic">{date}</div>
                    </div>
                    <p className="text-sm mt-2">{body}</p>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={false}
                fullWidth
                PaperProps={{
                    style: {
                        maxHeight: "80vh",
                        margin: "10vh auto",
                        borderRadius: "8px",
                    },
                }}
            >
                <DialogContent className="p-8 flex items-center justify-center h-[80vh]">
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: 16,
                            top: 16,
                            color: "black",
                            zIndex: 1,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={src}
                        alt={alt}
                        className="max-h-[calc(80vh-4rem)] w-auto object-contain"
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PortfolioGridItem;
