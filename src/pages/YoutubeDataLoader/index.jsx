import React from "react";
import Card from "../../components/Card";
import Divider from "../../components/Divider";
import { Link } from "react-router-dom";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";

const YoutubeDataLoader = () => {
    return (
        <Card>
            <div className="text-2xl">Youtube Data Loader</div>
            <Divider />
            <div>
                Just thought of a view where we could utilize more horizontal
                space while viewing vertical content. Think of a book but three
                pages wide with smooth scrolling.
            </div>
            <div className="flex gap-2 w-full mt-4">
                <div className="w-full flex justify-center border border-black p-4 rounded-md">
                    <Link to="/youtube-data-loader/up" className="w-full p-4">
                        <div className="w-full">
                            <div className="w-full flex justify-center">
                                <UploadIcon />
                            </div>
                            <div className="text-center text-xl">Upload</div>
                        </div>
                    </Link>
                </div>
                <div className="w-full flex justify-center border border-black p-4 rounded-md">
                    <Link to="/youtube-data-loader/down" className="w-full p-4">
                        <div className="w-full">
                            <div className="w-full flex justify-center">
                                <DownloadIcon />
                            </div>
                            <div className="text-center text-xl">Decode</div>
                        </div>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default YoutubeDataLoader;
