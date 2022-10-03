import '../App.css';

const Screen = ({ value }) => {
  //console.log("In screen ", value);
  return (
    <div
    style={{
        border: "1px solid black",
        padding: "16px",
        //width: 300,
        //height: 70,
        textAlign: "right",
        marginBottom: 10,
        backgroundColor: "#131a26",
        color: "#eee",
        fontSize: "24px",
        fontWeight: 300,
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
