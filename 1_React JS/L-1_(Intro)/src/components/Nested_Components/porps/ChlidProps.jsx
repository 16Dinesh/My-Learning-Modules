// export default function ChildProps(props) {
//     console.log(props)
//   return (
//     <>
//       <div>
//         <h6>
//           This is Text Came from -&rarr; <span>{props.name}</span> Prop
//         </h6>
//       </div>
//     </>
//   );
// }


export default function ChildProps({name}) {
    console.log(name)
  return (
    <>
      <div>
        <h6>
          This is Text Came from -&rarr; <span>{name}</span> Prop
        </h6>
      </div>
    </>
  );
}
