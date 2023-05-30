import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();

  const [ channelDetail, setChannelDetail ] = useState(null);
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippent&id=${id}`)
    .then((data) => {
      setChannelDetail(data?.items[0])
    })
    
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
    .then((data) => {
      setVideos(data?.items)
    })
  }, [id]);

  console.log("channelDetail", channelDetail);
  console.log("videos", videos);
  return (
    <Box
      minHeight="95vh"
    >
      <Box>
        <div 
          style={{ 
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,58,0,1) 0%, rgba(96,154,159,1) 84%, rgba(66,172,189,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px"
          }}
        />
          <ChannelCard channelDetail={channelDetail} marginTop="-95px" />
      </Box>
      <Box display="flex" p="2" justifyContent="center">
          <Videos  videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail