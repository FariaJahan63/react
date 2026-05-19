

const App = () => {
  return (
    <div>
      <button style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }} 
      
      
      onClick={() => alert("Button clicked!")}>Click me</button>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"  style={{ marginLeft: "20px" }} />
    </div>
  );
};
export default App;