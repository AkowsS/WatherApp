import { styled } from "@mui/system";

export const Container = styled("div")({
  position:"absolute",
  display:"flex",
  justifyContent:"center",
  width:"100%",
  height:"100%",
  backgroundColor:"gray",
  background: "rgba(0, 0, 0, 0.4)",
  bottom:0,
});

export const LoadImage = styled ("img")({
  marginTop:"25vh",
  width:"150px",
  height:"150px",
  opacity:1,
  WebkitAnimation:"spin 4s linear",
  MozAnimation: "spin 4s linear",
  animation:"spin 4s linear",

  "@MozKeyframes spin": { 
    "100% ":{ MozTransform: "rotate(360deg)" } 
  },
  "@-webkit-keyframes spin" :{
    "100%" :{ WebkitTransform: "rotate(360deg)",}
  },
  "@keyframes spin": { 
    "100%" :{ 
        WebkitTransform:"rotate(360deg)",
        transform:"rotate(360deg)",
    }},
});

