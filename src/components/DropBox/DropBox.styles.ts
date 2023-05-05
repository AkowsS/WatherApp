import { styled } from "@mui/system";

export const DropDown = styled("div")({
  ".dropbtn": {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "16px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  },

  ".dropdown": {
    position: "relative",
    display: "inline-block",
  },

  ".dropdown-content": {
    display: "none",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
  },

  ".dropdown:hover .dropdown-content": {
    display: "block",
  },

  ".dropdown:hover .dropbtn" :{
    backgroundColor: "#3e8e41",
  },

});

export const FavCity = styled("div")({
  width:"calc(100% - 20px)",
  ":hover" :{
    backgroundColor: "#f1f1f1"
  },
  cursor:"pointer",
  padding:"10px",
  height:"30px",
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  img:{
    width:"16px",
    height:"16px",
    ":hover":{
      backgroundColor:"black",
    },
  },
});

export const ButtonSubmit = styled("button")({
  width:"100%",
  display:"flex",
  flexDirection:"column",
  background:"none",
  color:"inherit",
  border:"none",
  padding:0,
  font:"inherit",
  cursor:"pointer",
  outline:"inherit",
});

export const SearchDiv = styled("div")({
  button:{
    height:"40px",
    borderRadius:"67px 6px 60px 0px",
    backgroundColor:"#80c047",
    color:"darkgreen",
    border:"none",
    marginLeft:"5px",
    ":hover":{
      color:"white",
      cursor:"pointer",
    }
  },
});