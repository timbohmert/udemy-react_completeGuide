import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h3>{props.name}</h3>
            <p>
                You have been friends with {props.name} for {props.friendsLength} years. {props.name} is your {props.relationship}.
            </p>
            <p>
                The next celebration with {props.name} that you need to plan for
                is {props.event} and {props.gift} would be an excellent gift!
            </p>
        </div>
    );
};

export default userOutput;
