import React from "react";

const Account = () => {

    const SignOut = () => {
        alert("Signed out (mock)");
        window.location.href = "/";
    };

    document.title = 'Tesla Account | Tesla';

    const user = {
        displayName: "John Doe"
    }; 

    return (
        <>
            <div className="header">
                <h1>Header (Placeholder)</h1>
            </div>
            <div className="wrapper">
                <div className="navbar">
                    <div className="row">
                        <div className="main">🏠</div>
                        <div className="text"><h2>Dashboard</h2></div>
                    </div>
                    <div className="row">
                        <div className="main">👤</div>
                        <div className="text"><h2>Profile Settings</h2></div>
                    </div>
                    <div className="row">
                        <div className="main">💳</div>
                        <div className="text"><h2>Payment Method</h2></div>
                    </div>
                    <div className="row">
                        <div className="main">⚡</div>
                        <div className="text"><h2>Charging</h2></div>
                    </div>
                    <div className="row">
                        <div className="main">📦</div>
                        <div className="text"><h2>Loot Box</h2></div>
                    </div>
                    <div className="row">
                        <div className="main">🕒</div>
                        <div className="text"><h2>Order History</h2></div>
                    </div>
                    <div className="row" onClick={SignOut}>
                        <div className="main">🚪</div>
                        <div className="text"><h2>Sign Out</h2></div>
                    </div>
                </div>
                <div className="content">
                    <h1>{user.displayName}'s Dashboard</h1>
                    <div className="container">
                        <div className="box box1">
                            <div className="desc">
                                <h3>Order Tesla Solar</h3>
                                <p>Produce energy to power your Tesla life</p>
                                <a href="#">View Solar</a>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="desc">
                                <h3>Reserve a Car</h3>
                                <p>Browse our models</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                        <div className="box_fade">
                            <div className="box3"></div>
                            <div className="desc fade">
                                <h3>Purchased a car from a third party?</h3>
                                <a href="#">Add</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;
