import React, { useState, useEffect } from 'react';

const TimeAttendance = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [attendanceStatus, setAttendanceStatus] = useState('Not Marked');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const markAttendance = () => {
    setAttendanceStatus('Marked');
    console.log('Attendance Marked at:', currentTime);
  };

  return (
    <div>
      <h2>Time Attendance</h2>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      <p>Attendance Status: {attendanceStatus}</p>
      <button onClick={markAttendance} disabled={attendanceStatus === 'Marked'}>
        Mark Attendance
      </button>
    </div>
  );
};

export default TimeAttendance;