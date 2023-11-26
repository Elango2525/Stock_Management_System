// Staff.js
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Staff = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    const handleNotification = (event) => {
      setNotifications((prevNotifications) => [...prevNotifications, event.detail.message]);
      toast.info(`New Notification: ${event.detail.message}`);
    };

    window.addEventListener('staffNotification', handleNotification);

    return () => {
      window.removeEventListener('staffNotification', handleNotification);
    };
  }, []);

  const handleNotificationClick = (notification) => {
    // Set the selected notification for display
    setSelectedNotification(notification);
  };

  const handleModalClose = () => {
    // Clear the selected notification when the modal is closed
    setSelectedNotification(null);
  };

  return (
    <div>
      <h1>Staff Dashboard</h1>
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} onClick={() => handleNotificationClick(notification)}>
              {notification}
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for displaying notification details */}
      {selectedNotification && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>Notification Details</h2>
            <p>{selectedNotification}</p>
          </div>
        </div>
      )}

      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default Staff;
