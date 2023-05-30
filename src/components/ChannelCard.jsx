import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop = "auto" }) => {
  return (
    <Box
        sx={{ 
            boxShadow: "none", 
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            width: { xs: "356px", md: "320px"},
            height: "326px",
            margin: "auto",
            marginTop: marginTop
        }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
                sx={{ 
                    display: "flex", 
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#FFFFFF"
            }}
            >
                <CardMedia 
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
                    alt={channelDetail?.snippet?.title}
                    sx={{ 
                        borderRadius: "50%", 
                        height: "180px", 
                        width: "180px",
                        mb: 2,
                        border: "1px solid #E3E3E3"
                    }} 
                />
                <Typography variant="h6">
                    {channelDetail?.snippet?.title}
                    <CheckCircle  sx={{ fontSize: 14, color: "#808080", ml: "5px"}}/>
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscriber
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard