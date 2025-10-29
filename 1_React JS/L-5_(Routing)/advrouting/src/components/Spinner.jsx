// export default function Spinner() {
//   return (
//     <div className="spinner-container">
//       <div className="spinner"></div>
//       <p>Loading...</p>

//       <style jsx>{`
//         .spinner-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           min-height: 60vh;
//         }
//         .spinner {
//           width: 50px;
//           height: 50px;
//           border: 5px solid #f3f3f3;
//           border-top: 5px solid #007bff;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import { TailSpin } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <TailSpin height="80" width="80" color="#007bff" ariaLabel="loading" />
    </div>
  );
}
