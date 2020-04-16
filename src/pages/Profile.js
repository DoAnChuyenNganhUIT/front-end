import React, { Component } from 'react'
import './style.css'
export default class Profile extends Component {
    onClick = () => {
        window.location.href = "http://localhost:3000/editprofile";
    }
    render() {
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>User Profile</h2>
                <div className="card">
                    <img src="default.png" alt="default" style={{ width: '60%' }} />
                    <h1 className="name">Tien Nguyen</h1>
                    <p className="address">TP Ho Chi Minh</p>
                    <p className="genre">Nam</p>
                    <p className="email">tien@gmail.com</p>
                    <p>
                        <button>Change Picture  <i className="fas fa-pen" /></button>
                    </p>
                    <p>
                        <button onClick={this.onClick}>Edit Profile <i className="fas fa-pen" /></button>
                    </p>
                </div>
            </div>
        )
    }
}
