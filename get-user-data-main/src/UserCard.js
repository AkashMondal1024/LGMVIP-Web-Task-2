import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div class="card">
            <img src={user.avatar} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p class="card-text">{user.email}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
};

export default UserCard;
