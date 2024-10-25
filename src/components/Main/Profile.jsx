import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import profileImage from '../../../public/img/Profile.jpg';

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        profilePicture: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from API or local storage
        // This is a placeholder. Replace with actual data fetching logic
        const fetchUserData = () => {
            // Simulating API call
            setTimeout(() => {
                setUser({
                    name: 'John Doe',
                    email: 'johndoe@example.com',
                    phone: '+1 234 567 8900',
                    address: '123 Main St, Anytown, USA',
                    profilePicture: profileImage
                });
            }, 1000);
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., update user data)
        console.log('Updated user data:', user);
        // Add API call to update user data here
    };

    const handleLogout = () => {
        // Clear authentication token
        localStorage.removeItem('authToken');
        // Redirect to home page and reload the page
        navigate('/', { replace: true });
        window.location.reload();
    };

    const handleClose = () => {
        // Navigate back to the previous page or to a specific route
        navigate(-1); // This will go back to the previous page
        // Alternatively, you can navigate to a specific route, e.g., navigate('/dashboard');
    };

    return (
        <div className="profile-container">
            <button className="close-button" onClick={handleClose}>×</button>
            <h1 className="profile-title">User Profile</h1>
            <div className="profile-picture">
                <img src={user.profilePicture} alt="Profile" />
                <button className="change-picture-btn">Change Picture</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                        className="form-textarea"
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">Save Changes</button>
            </form>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
