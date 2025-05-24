import React from 'react';


const Image = ({ imageUrl }) => {
  return (
    <div>
      <img 
        src={imageUrl} 
        // alt="User Avatar" 
        // width="150" 
        // height="150" 
        // style={{ borderRadius: '50%' }} 
      />
    </div>
  );
};


Image.defaultProps = {
  imageUrl:"https://in.images.search.yahoo.com/yhs/view;_ylt=AwrKBGaZbjFoiikLy_EO9olQ;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzc5NDUyMzJlY2I5YzY3ZGU5M2I5NzViNzMyOTQwZWY4BGdwb3MDNwRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3Dnature%2Bimages%26ei%3DUTF-8%26type%3Dfc_A7B54195D6A_s58_g_e_d051024_n9998_c999%26fr%3Dyhs-fc-2461%26hsimp%3Dyhs-2461%26hspart%3Dfc%26param1%3D7%26param2%3DeJwtT8lugzAU%252FBUfE8mQ97yAsU9JST6g6qmWDyyGWKwCKqp%252BfUVazWU0izTThtoa954jgMgUWOpGa1yWZcpSd1ggEZiw1FV%252FuqUuzNY4JkBqBqgr4KhLUFI3NRe6LJXXjVKoRdpIS13rJ2tcGC11X4U1bph%252BQt8XFxkDOe1hrKd9JeNGEGIwZA9jIgz5TsSZFPPc%252B92XXdgukqcxT8ipe25DT0kfOk9aX3XTmVTPZRr8BXkSwwGyFk2xhP%252FKsXd9nTwGrH55cfG4XZM3CZGCm4oQ748oE3eIhFSPHK8g8iQ%252F8tURZsBEhBAB%252B0CmMdU8jTHln7%252FuEloM%26tab%3Dorganic%26ri%3D7&w=3840&h=2160&imgurl=images.hdqwalls.com%2Fwallpapers%2Fbest-nature-image.jpg&rurl=https%3A%2F%2Fhdqwalls.com%2Fdownload%2F2560x1600%2Fbest-nature&size=3975KB&p=nature+images&oid=7945232ecb9c67de93b975b732940ef8&fr2=&fr=yhs-fc-2461&tt=2560x1600+Best+Nature+Wallpaper%2C2560x1600+Resolution+HD+4k+Wallpapers+...&b=0&ni=21&no=7&ts=&tab=organic&sigr=sSimJnMqLnpP&sigb=nvPW3rLck8cQ&sigi=.94OdY9gd4z1&sigt=DeAsQtp_Qmtb&.crumb=8GhhJkd8KcF&fr=yhs-fc-2461&hsimp=yhs-2461&hspart=fc&type=fc_A7B54195D6A_s58_g_e_d051024_n9998_c999&param1=7&param2=eJwtT8lugzAU%2FBUfE8mQ97yAsU9JST6g6qmWDyyGWKwCKqp%2BfUVazWU0izTThtoa954jgMgUWOpGa1yWZcpSd1ggEZiw1FV%2FuqUuzNY4JkBqBqgr4KhLUFI3NRe6LJXXjVKoRdpIS13rJ2tcGC11X4U1bph%2BQt8XFxkDOe1hrKd9JeNGEGIwZA9jIgz5TsSZFPPc%2B92XXdgukqcxT8ipe25DT0kfOk9aX3XTmVTPZRr8BXkSwwGyFk2xhP%2FKsXd9nTwGrH55cfG4XZM3CZGCm4oQ748oE3eIhFSPHK8g8iQ%2F8tURZsBEhBAB%2B0CmMdU8jTHln7%2FuEloM"
};

export default Image;