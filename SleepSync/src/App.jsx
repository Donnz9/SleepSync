import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/predict",
        {
          age: 22,
          occupation: "Student",
          sleep_duration: 5.5,
          stress_level: 8,
          bmi_category: "Normal",
        }
      );

      setResult(response.data.data.prediction);

    } catch (error) {
      console.error(error);

      setResult("Terjadi error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>SleepSync Prediction</h1>

      <button onClick={handlePredict}>
        {loading ? "Loading..." : "Predict Sleep"}
      </button>

      <h2>Result:</h2>
      <p>{result}</p>
    </div>
  );
}

export default App;