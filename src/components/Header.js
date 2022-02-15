import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import React, {useContext,/*  useState  */} from "react";
import { useNavigate } from "react-router-dom";
import CryptoContext from "../store/crypto-context";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";
import "./Header.css"

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#fff",
    fontWeight: "bold",      
},
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark"
  },
});

const Header = () => {
  const classes = useStyles();
  //const [currency, setCurrency] = useState("USD");
  const navigate = useNavigate();
  const {currency, setCurrency, user} = useContext(CryptoContext);
  
  //console.log(currency, 'check ');


  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar  style={{backgroundColor: "#3f51b5"}} color="transparent" position="fixed">
        <Container>
          <Toolbar>
            <Typography variant="h5" className={classes.title} style={{cursor: "pointer"}} onClick={() => navigate('/')}>
              CRYPTO
            </Typography>
            {/* <Button color="inherit">Login</Button> */}

          { /*  <Select

              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="USD"
              style={{ width: 100, height: 40, marginLeft: 15, color: "#fff", fontWeight: "bold",marginRight:10 }}
              // onChange={(e) => setCurrency(e.target.value)}
            >
               <MenuItem style={{color: "#454545", fontWeight: "bold",backgroundColor: "#fff" }} value={"USD"}></MenuItem>
              {/* <MenuItem style={{color: "gold", fontWeight: "bold"}} value={"INR"}>INR</MenuItem> 
              </Select>

            */}
            <div className='btn-group'>
            <button className='btn'>Connect Wallet</button>
        </div>
            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
