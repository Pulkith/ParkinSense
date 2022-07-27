
import { useState } from "react";
import $ from "jquery";
import "./App.css";
import axios from 'axios';
  
function App() {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);

        
    axios.post(form.attr("action"), {})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    };
    
    

  
    return (
        <div className="App">
            <form
                action="http://localhost:8000/server.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}
  
export default App;