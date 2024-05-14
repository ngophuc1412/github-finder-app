import React from 'react';
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home(props) {
    return (
        <div>
            <UserSearch />
            <UserResults />
        </div>
    );
}

export default Home;