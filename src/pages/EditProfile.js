import React, { Component } from 'react'

export default class EditProfile extends Component {
    onClick = () => {
        window.location.href = "http://localhost:3000";
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Edit Profile</h2>
                    <div className="register">
                        <p className="newName">
                            New Name: <br />
                            <input type="text" size="30px" placeholder="The name you want to change to..." />
                        </p>
                        <p className="newAddress">
                            New Address: <br />
                            <input type="text" size="30px" placeholder="The address you want to change to..." />
                        </p>
                        <p className="newGenre">
                            New Genre: <br />
                            <input type="text" size="30px" placeholder="The genre you want to change to..." />
                        </p>
                        <p>
                            <button onClick={this.onClick}>Save</button>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
