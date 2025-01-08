import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SinglePlayer = () => {
  return (
    <div>
      <button onClick={useNavigate("./SinglePlayer.jsx")}></button>
    </div>
  );
};
export default SinglePlayer;
