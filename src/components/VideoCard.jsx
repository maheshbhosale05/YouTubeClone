import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoVideoUrl, demoVideoTitle, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id : { videoId }, snippet } }) => {

  return (
    <Card sx={{ width: "320px", boxShadow: "none", borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: "100%", height: 180 }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <Typography variant="subtitle1"  fontWeight="bold" color="#FFFFFF" maxWidth={326}>
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <Typography variant="subtitle2"  fontWeight="bold" color="#808080">
                {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                <CheckCircle  sx={{ fontSize: 12, color: "#808080", ml: "5px"}}/>
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard