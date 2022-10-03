import '../App.css';

const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <div>
      <button
      style={{
          border: "1px solid black",
          //padding: "16px",
          //width: 300,
          //height: 70,
          textAlign: "center",
          marginBottom: 10,
          backgroundColor: "#131a26",
          color: "#eee",
          fontSize: "24px",
          fontWeight: 300,
          flexWrap: "wrap",
          maxWidth: "33%",
        }}
        onClick = {() => onClick({value})}>
      {value}
      </button>
    </div>
    /*  style={{
        padding: "16px",
        border: "1px solid black",
        width: 60,
        color: "#FFF",
        cursor: "pointer",
        transition: "0.4s"
      }} */



  );
};

export default Number;
