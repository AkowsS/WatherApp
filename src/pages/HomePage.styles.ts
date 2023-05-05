import { styled } from "@mui/system";

export const Container = styled("div")({
  fontFamily:"Varela Round,sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  minHeight: "100vh",
  backgroundImage:
    "radial-gradient(circle 993px at .5% 50.5%,rgba(137,171,245,.37) 0,#f5f7fc 100.2%)",
});

export const MainBox = styled("div")(({theme})=>({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  maxWidth: "1200px",
  background: "hsla(0,0%,100%,.95)",
  boxShadow: "0 8px 32px 0 rgba(83,89,179,.37)",
  backdropFilter: "blur(3px)",
  borderRadius: "30px",
  overflow: "hidden",
  [theme.breakpoints.down(950)]:{
    gridTemplateColumns: "1fr",
    maxWidth:"600px",
    margin:"20px auto",
  },
  [theme.breakpoints.down(600)]:{
    gridTemplateColumns: "1fr",
    maxWidth:"600px",
    margin:0,
  },
  [theme.breakpoints.down(475)]:{
    gridTemplateColumns: "1fr",
    maxWidth:"400px",
    borderRadius: 0,
    margin:0,
  },
}));

export const FavButton = styled("button")({
  background:"none",
  color:"inherit",
  border:"none",
  padding:0,
  font:"inherit",
  cursor:"pointer",
  outline:"inherit",
  width:"30px",
  height:"30px",
  marginLeft:"1ch",
});

export const DivImg = styled("div")(({theme})=>({
  textAlign: "center",
  padding: "30px",
  p:{
    margin:0,
    marginBottom:"20px",
    fontSize:"24px",
  },
  h1:{
    fontSize:"38px",
    margin:0,
    marginBottom:"10px",
  },
  h2:{
    height:"101px",
    fontSize:"84px",
    padding:0,
    margin:0,
  },
  h3:{
    margin:0,
    fontSize:"16px",
    fontWeight:400,
  },
  img:{
    maxHeight:"100%",
    maxWidth:"100%",
  },
  [theme.breakpoints.down(950)]:{
    img:{
      width:"300px",
      height:"300px",
    }
  },
  [theme.breakpoints.down(475)]:{
    img:{
      maxHeight:"100%",
      maxWidth:"100%",
    }
  }
}));

export const DivInfos = styled("div")({
  backgroundColor: "#F7F7F7",
  padding: "30px",
});

export const InputDiv = styled("div")(({theme})=>({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridGap: "20px",
  gap: "20px",
  marginBottom: "20px",
  div: {
    display: "flex",
    alignItems: "center",
  },
  h2:{
    margin:0,
  },
  input: {
    
    padding:"0 10px",
    height: "40px",
    fontSize: "18px",
    color: "#303030",
    textAlign: "right",
    border:"none",
    borderRadius: "10px",
  },
  [theme.breakpoints.down(475)]:{
    gridTemplateColumns: "1fr",
    placeItems:"center",
    div:{
      display:"flex",
      alignItems:"center",
    },
    input:{
      width:"100%",
      padding:0,
    },
    form:{
      width:"100%",
    },
  },
}));

export const DivElements = styled("div")(({theme})=>({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "20px",
  gap: "20px",
  marginBottom: "20px",
  h1:{
    margin: 0,
  },
  p:{
    margin: 0,
  },
  [theme.breakpoints.down(600)]:{
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.down(475)]:{
    gridTemplateColumns: "1fr",
  },
}));
export const Element = styled("div")(({theme})=>({
  background:"hsla(0, 0%, 100%,.95)",
  padding:"20px",
  textAlign:"right",
  borderRadius:"20px",
  h1:{
    alignItems:"right",
  },
  ".elementValue":{
    display:"grid",
    gridTemplateColumns: "1fr 1fr",
  },
  img:{
    maxHeight:"100%",
    maxWidth:"100%",
  },
  [theme.breakpoints.down(475)]:{
    ".elementValue":{
      display:"grid",
      gridTemplateColumns: "1fr 2fr",
    },
  },
}));

export const FirstResearch = styled("div")({
  div:{
    display:"flex",
    justifyContent:"center",
  },
  img:{
    width:"200px",
    height:"200px",
  },
  p:{
    margin:"0 20px",
    fontSize:"20px",
    fontWeight:"bold",
    marginBottom:"10px",
  },
  input: {
    padding:"0 10px",
    height: "40px",
    fontSize: "18px",
    color: "#303030",
    textAlign: "right",
    border:"none",
    borderRadius: "10px",
  },
  h1:{
    textAlign:"center",
    color:"blue",
    display:"flex",
    p:{
      margin:0,
    },
  },
});