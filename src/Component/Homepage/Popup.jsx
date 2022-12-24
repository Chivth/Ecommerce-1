// import React, { useEffect, useState } from "react";

// import classes from "../pages/HomePage.module.css";
// const Popup = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function getAPI() {
//       const api = await fetch(
//         "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
//       );
//       const apiJSON = await api.json();
//       setData(apiJSON);
//     }
//     getAPI();
//   }, [data]);
//   return (
//     <div className={classes.homepage_popup}>
//       <div className={classes.homepage_popup_info}>
//         <div className={classes.homepage_popup_info_img}>
//           <div className={classes.homepage_popup_info_imgs}>
//             <img src="" alt=""/>
//             <img src="" alt=""/>
//             <img src="" alt=""/>
//             <img src="" alt=""/>
//           </div>
//           <div className={classes.homepage_popup_info_img1}>
//           <img src="" alt=""/>
//           </div>
//         </div>
//         <div className={classes.homepage_popup_info_detail}>
//           thông tin về sản phẩm cách sử udujng thời gian sản xuất cùng các thông
//           tin giá bán{" "}
//         </div>
//       </div>
//       <div className={classes.homepage_popup_close}> x</div>
//     </div>
//   );
// };

// export default Popup;
