
const randomImgArr = () => {
 const imgArr= ["Img/1.jpeg", "Img/2.jpeg", "Img/3.jpeg"];
 let randomImg = imgArr[Math.floor(Math.random() * 3)];
 return randomImg;
}
  


export default randomImgArr;
