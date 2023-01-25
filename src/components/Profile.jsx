import React, { useContext } from 'react';
import UserContext from './../context/User/UserContext.jsx';

const Profile = () => {

	const { selectedUser } = useContext(UserContext);
	
	return (

		<>
			{
				selectedUser
				? (<div className="card card-body text-center">
				  	<img 
				  		src={selectedUser.avatar} 
				  		alt={`${selectedUser.first_name} photo`} 
				  		className="img-fluid rounded-circle m-auto" 
				  		width="150" 
				  		height="150"/>

				  	<h2 className="fw-bold mt-2">{`${selectedUser.first_name} ${selectedUser.last_name}`}</h2>

				  	<h5 className="fw-bold">Email: {" "} 
				  		<span className="fw-normal">{selectedUser.email}</span>
				  	</h5>
				  </div>)
				: (<h2 className="">No user selected.</h2>)
			}
		</>

	);
};

export default Profile;