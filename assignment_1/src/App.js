import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = () => {
    const [friendsState, setFriendsState] = useState({
        friends: [
            {
                name: 'Beth',
                friendsLength: 6,
                relationship: 'girlfriend',
                event: 'birthday',
                gift: 'clothes'
            },
            {
                name: 'Josh',
                friendsLength: 13,
                relationship: 'friend',
                event: 'birthday',
                gift: 'beer'
            },
            {
                name: 'Julie',
                friendsLength: 31,
                relationship: 'mom',
                event: 'Christmas',
                gift: 'lake toys'
            }
        ]
    });

    const updateContactsHandler = () => {
        setFriendsState({
            friends: [
                {
                    name: 'Beth',
                    friendsLength: 6,
                    relationship: 'wife',
                    event: 'birthday',
                    gift: 'clothes'
                },
                {
                    name: 'Josh',
                    friendsLength: 13,
                    relationship: 'friend',
                    event: 'bachelor party',
                    gift: 'beer'
                },
                {
                    name: 'Julie',
                    friendsLength: 31,
                    relationship: 'mom',
                    event: 'wedding',
                    gift: 'lake toys'
                }
            ]
        });
    };

    const giftChangeHandler = (event) => {
        setFriendsState({
            friends: [
                {
                    name: 'Beth',
                    friendsLength: 6,
                    relationship: 'wife',
                    event: 'birthday',
                    gift: 'clothes'
                },
                {
                    name: 'Josh',
                    friendsLength: 13,
                    relationship: 'friend',
                    event: 'bachelor party',
                    gift: 'beer'
                },
                {
                    name: 'Julie',
                    friendsLength: 31,
                    relationship: 'mom',
                    event: 'Christmas',
                    gift: event.target.value
                }
            ]
        });
    };

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        display: 'block',
        margin: '16px auto'
    };

    return (
        <div className="App">
            <h1>Friends</h1>
            <UserOutput
                name={friendsState.friends[0].name}
                friendsLength={friendsState.friends[0].friendsLength}
                relationship={friendsState.friends[0].relationship}
                event={friendsState.friends[0].event}
                gift={friendsState.friends[0].gift}
            />
            <UserOutput
                name={friendsState.friends[1].name}
                friendsLength={friendsState.friends[1].friendsLength}
                relationship={friendsState.friends[1].relationship}
                event={friendsState.friends[1].event}
                gift={friendsState.friends[1].gift}
            />

            <UserOutput
                name={friendsState.friends[2].name}
                friendsLength={friendsState.friends[2].friendsLength}
                relationship={friendsState.friends[2].relationship}
                event={friendsState.friends[2].event}
                gift={friendsState.friends[2].gift}
            />
            <UserInput
                currentGift={friendsState.friends[2].gift}
                changed={giftChangeHandler}
            />
            <button style={style} onClick={updateContactsHandler}>
                Update Contacts
            </button>
        </div>
    );
};

export default App;

// friends: [
//   { name: 'Beth', friendsLength: 6, relationship: 'wife', event: 'birthday', gift: 'clothes' }
//   { name: 'Josh', friendsLength: 13, relationship: 'friend', event: 'bachelor party', gift: 'beer' }
//   { name: 'Julie', friendsLength: 31, relationship: 'mom', event: 'Christmas', gift: 'lake toys' }
// ]
