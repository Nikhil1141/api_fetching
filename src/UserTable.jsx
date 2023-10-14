import React, { useState, useEffect } from "react";

function UserTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data.users));
    }, []);

    // console.log(users)

    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Dummy data</h1>
            <table border='2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profile pic</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>maidenname</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td> <img src={user.image} alt="profilepics" style={{ height: '100px', width: '100px' }} /></td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.maidenName}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.username}</td>
                                <td>{user.domain}</td>
                                <td>{user.ip}</td>
                                <td>{user.university}</td>
                            </tr>

                        )}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
