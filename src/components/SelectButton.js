import { makeStyles } from "@material-ui/core";


const SelectButton = ({ children, selected, onClick }) => {

    
    const useStyles = makeStyles({
      selectbutton: {
        border: "1px solid #3f51b5",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "#3f51b5" : "",
        color: selected ? "white" : "#3f51b5",
        fontWeight: selected ? 700 : 500,
        "&:hover": {
          // backgroundColor: "white",
          // color: "#3f51b5",
        },
        width: "22%",
        //   margin: 5,
      },
    });
  
    const classes = useStyles();
  
    return (
      <span onClick={onClick} className={classes.selectbutton}>
        {children}
      </span>
    );
  };
  
  export default SelectButton;