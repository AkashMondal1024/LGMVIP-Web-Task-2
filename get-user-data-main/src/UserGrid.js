import React from 'react';
import UserCard from './UserCard';

const UserGrid = ({ users }) => {
    return (
        <div className="row">
            {users.map(user => (
                <div className="col-md-3" key={user.id}>
                    <UserCard user={user} />
                </div>
            ))}
        </div>
    );
};

export default UserGrid;
