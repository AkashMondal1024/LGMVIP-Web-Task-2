import React from 'react';
const Navbar = ({ getUsers }) => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Amazon Users</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex" role="search">
                            <button class="btn btn-outline-success" onClick={getUsers} type="submit">Get Users</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navbar;
