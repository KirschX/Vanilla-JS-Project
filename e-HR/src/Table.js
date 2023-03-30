// export default function Table(data) {
//   const $element = document.createElement("table");
//   document.getElementById("table").appendChild($element);
//   console.log(data);

//   function tableBody(data) {
//     data?.reduce((acc, item) => {
//       return (
//         acc +
//         `<tr>
//           <td>${item?.name}</td>
//           <td>${item?.title}</td>
//           <td>${item?.email}</td>
//           <td>${item?.role}</td>
//       </tr>`
//       );
//     }, "");
//   }

//   console.log(tableBody(data));

//   this.render = () => {
//     $element.innerHTML = data?.reduce((acc, item) => {
//       return (
//         acc +
//         `<tr>
//               <td>${item?.name}</td>
//               <td>${item?.title}</td>
//               <td>${item?.email}</td>
//               <td>${item?.role}</td>
//           </tr>`
//       );
//     }, "");
//   };

//   this.render();
// }

export default function Table(data) {
  const $element = document.createElement("table");
  document.getElementById("table").appendChild($element);
  console.log(data);

  console.log(tableBody(data));

  const tHead = document.createElement("");

  this.render = () => {
    $element.innerHTML = `<thead>
     <tr>
      <th>name</th>
      <th>title</th>
      <th>email</th>
      <th>role</th>
     </tr>
     </thead>
     <tbody>${data?.reduce((acc, item) => {
       return (
         acc +
         `<tr>
              <td>${item?.name}</td>
              <td>${item?.title}</td>
              <td>${item?.email}</td>
              <td>${item?.role}</td>
          </tr>`
       );
     }, "")}
      </tbody>`;
  };

  this.render();
}
