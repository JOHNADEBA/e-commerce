import React,{ useEffect } from "react";
import { useNavigate } from "react-router-dom";

const errorCont = {
  margin:'5rem auto',
  textAlign:'center',
  fontWeight:'bold'
}

const errorPara = {
  marginBottom:'5rem',
  marginTop:'10rem',
}
const Error = () => {
	let navigate = useNavigate();

  useEffect(() => {
   setTimeout(() => {
    navigate("/")
   }, 3000);
  }, [])
  
	return (
		<div style={errorCont}>
			
			<p >
				Opps! It looks like you missed your way. You will be re-directed to the
				home page in 5sec, if not, you can manually go back home.
			</p>
			<button style={errorPara} className="btn" onClick={() => navigate("/")}>
				Go Back Home
			</button>
		</div>
	);
};

export default Error;
