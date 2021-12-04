import axios from "axios";
import React, {useState, useEffect } from 'react'
import UserTable from "./userTable"




function App ()  {
	const [data, setData]= useState([]); 
	useEffect(() => {
			const fetchData = async () => {
		  	const result = await axios('https://jsonplaceholder.typicode.com/users',);
		  setData(result.data);
		};
	 
		fetchData();   {/*async/await   https://www.robinwieruch.de/react-hooks-fetch-data*/}
	  }, []);
	  
		return (
			<div>
				<UserTable data={data}/>
			</div>
			
		)
}
export default App;