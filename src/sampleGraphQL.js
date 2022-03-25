// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { useQuery, gql } from '@apollo/client';

// const LAUNCH_QUERY = gql`
//   {
//     launches(limit: 10) {
//       id
//       launch_success
//       mission_name
//       rocket {
//         rocket_name
//       }
//     }
//   }
// `

// function App() {
//   const { data, loading, error } = useQuery(LAUNCH_QUERY);

//   if (loading) return 'Loading...';
//   if (error) return <p>{error.message}</p>;
//   let launchInfo = '';
//   if (data) {
//     launchInfo = data.launches.map(item => {
//       return (
//         <div className='rocket-card'>
//           <p>mission name: {item.mission_name}</p>
//           <p>rocket name: {item.rocket.rocket_name}</p>
//           <p>launch status: {item.launch_success ? 'successful' : 'failure'}</p>
//         </div>
//       )
//     });
//   }

//   return (
//     <div className="App">
//       <p>{launchInfo}</p>
//     </div>
//   );
// }

// export default App;