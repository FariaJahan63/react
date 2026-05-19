const App = () => {
  let marks = 0;
  return (
    <div>
      {(() => {
        if (marks < 40 && marks >0) {
          return <h1>Fail</h1>;
        } else if (marks >= 40 && marks < 60) {
          return <h1>satisfactory</h1>;
        } 
        else if (marks==0){
          return <h1>Absent</h1>
        }
        else {
          return <h1>Excellent</h1>;
        }
      })()}
    </div>
  );
};
export default App;
