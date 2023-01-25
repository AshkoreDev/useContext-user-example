import React, { useEffect, useContext } from 'react';
import UserContext from './../context/User/UserContext.jsx';

const UserList = () => {

	const { users, getUsers, getProfile } = useContext(UserContext);

	useEffect(() => {

		getUsers();

	}, []);

	return (

		<div className="list-group h-100">
			{
				users.map((user) => {

					return (

						<a 
							key={user.id} 
							href="#!" 
							className="list-group-item list-group-action d-flex justify-content-start align-items-center" 
							onClick={() =>  getProfile(user.id)}>
							<img src={user.avatar} alt={`${user.first_name} photo`} className="img-fluid rounded-circle" width="70" height="70" />
							<p className="my-0 mx-4">{`${user.first_name} ${user.last_name}`}</p>
						</a>

					);
				})
			}
		</div>

	);
};

export default UserList;