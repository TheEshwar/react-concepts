import React from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

function Users() {
	const { userId, city } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
  
  const showActiveUsers = searchParams.get("filter") === 'active';

	console.log("use params :- ", showActiveUsers);
	return (
		<div>
			All available users :- <br />
			<Link to="1">User 1</Link>
			<br />
			<Link to="2">User 2</Link>
			<br />
			<Link to="3">User 3</Link>
			<Outlet />
			<div>
				<button
					onClick={() => {
						setSearchParams({ filter: "active" });
					}}
				>
					Active Users
				</button>
				<button
					onClick={() => {
						setSearchParams({});
					}}
				>
					Reset Filters
				</button>
			</div>

      {showActiveUsers ? <h4>Showing Filtered Users</h4> : <h4>Showing All Users</h4>}
		</div>
	);
}

export default Users;
