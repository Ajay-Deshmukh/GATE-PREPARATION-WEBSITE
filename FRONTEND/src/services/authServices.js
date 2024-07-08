// // services/authServices.js

// // Register a new user
// export async function register(authDetails) {
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       ...authDetails,
//       status: 'notapproved', // Add status field with 'notapproved'
//     }),
//   };

//   try {
//     const response = await fetch('http://localhost:8000/register', requestOptions);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('Registration successful:', data); // Log successful response
//     return data;
//   } catch (error) {
//     console.error('Error registering user:', error);
//     throw error;
//   }
// }

//   // Login user
//   export async function login(authDetails) {
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(authDetails),
//     };
  
//     try {
//       const response = await fetch('http://localhost:8000/login', requestOptions);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       // Handle storing tokens or other data as needed
//       return data;
//     } catch (error) {
//       console.error('Error logging in user:', error);
//       throw error;
//     }
//   }
  
// AuthService.js




const API_URL = 'http://localhost:8000'; // Assuming your backend API URL

export const authServices = {
  register: async (userData) => {
    const { name, email, password, role, approve } = userData;

    try {
      // Check if the user already exists with the provided email
      const existingUserResponse = await fetch(`${API_URL}/users?email=${email}`);
      const existingUsers = await existingUserResponse.json();

      if (existingUsers.length > 0) {
        throw new Error('Email already registered.');
      }

      // If email doesn't exist, proceed with registration
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role, approve }),
      });

      if (!response.ok) {
        throw new Error('Registration failed.');
      }

      const newUser = await response.json();
      return newUser;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },
  
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/users?email=${credentials.email}&password=${credentials.password}`);

      if (!response.ok) {
        throw new Error('Login failed.');
      }

      const users = await response.json();
      const user = users.length > 0 ? users[0] : null;

      if (!user) {
        throw new Error('Invalid email or password.');
      }

      return user;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },
};





