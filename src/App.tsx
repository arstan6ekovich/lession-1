import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  interface Value {
    title: string;
  }
  const [value, setValue] = useState("");
  const [endPoint, setEndPoint] = useState<Value[]>([]);
  const [isLouading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      let { data } = await axios.get(
        "https://api.elchocrud.pro/api/v1/3507216dd4ed7a089171776ae6794ed1/mar4ik_dev"
      );
      setEndPoint(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const postData = async () => {
    try {
      let { data } = await axios.post<Value[]>(
        "https://api.elchocrud.pro/api/v1/3507216dd4ed7a089171776ae6794ed1/mar4ik_dev",
        {
          title: value,
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={postData}>Add</button>
      {isLouading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {endPoint.map((el) => (
            <>
              <h4>{el.title}</h4>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
