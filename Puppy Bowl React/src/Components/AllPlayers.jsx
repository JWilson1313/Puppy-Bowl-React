import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const [players, setPlayers] = useState([]);

const deletePlayer = async (id) => {
    try {
      const response = await delPlayer(id).unwrap();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

useEffect(() => {
    const fetchPuppies = async () => {
        try {
            const {data} = await axios.get(api);
            setPuppies(data)
        }
    }
}, []);

const AllPlayer = () => <div>"The AllPlayer Component"</div>;
export default AllPlayer;

return (
    <div className="players">
      {players &&
        players.map((player) => {
          return (
            <div key={player.id}>
              <p>{player}</p>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => editPlayer(user.id)}
              >
                Edit Player
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deletePlayer(player.id)}
              >
                Delete Player
              </button>
            </div>
          );
        })}
    </div>
  );