//userService.js

export const fetchUserData = async () => {
    const token = JSON.parse(sessionStorage.getItem("token"));
  
    if (!token) {
      throw new Error("No token found");
    }
  
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await fetch("http://localhost:8000/users", requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };



  