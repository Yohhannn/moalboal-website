import React from 'react';

const Bear = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* First Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <a href="/cuisine">
          <div className="btn mb-5 bg-gray-700 text-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300">
            Return ➤
          </div>
        </a>
        <div className="w-auto h-[500px] mx-auto overflow-hidden rounded-lg">
          <img
            src="https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL01VREgySzlyUkZtQ2tCR25PbFU2c0EiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0="
            alt="resto_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
        The Three Bears
        </h2>
        <p className="text-gray-600 mt-2">
        Location: Panagsama Beach, Moalboal, Cebu
        </p>
        <p className="text-gray-700 mt-4">
        A cozy family café where every bite feels like home. The Three Bears serves up hearty breakfast favorites, freshly baked pastries, and a cup of comforting coffee, making it the perfect spot to start your Moalboal adventure.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Food Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://scontent.fmnl9-6.fna.fbcdn.net/v/t51.75761-15/466480217_18203067055294776_5986356492775851512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG1RkGoNsoWx5ymC6fllk2GgaKkZ4-R4x2BoqRnj5HjHab2AvJYoLTZEGRd-NmdjUUBRogMaBkJppAX2-w3-leM&_nc_ohc=XnuaUJLeoeAQ7kNvgGucCIQ&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=Acw8nncJxOTnpzqEeqUaBHj&oh=00_AYBnLxsOmIyXoV_xwYnJ80OINK_111fa69InXmow4HzYrg&oe=6758A4EF"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t51.75761-15/465736689_18202508611294776_7746014746071641539_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHQxRIJ6BbMd2A9UneD4z2w3FlyXLZCMbfcWXJctkIxtwLlwySPBNIhP7qVZzGyyXyspZVX2_EtD0x6yPu69faJ&_nc_ohc=O022zO39848Q7kNvgELHdZ6&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=AbppedlQcB6nOUgRdhdBpQD&oh=00_AYDQrko_jnmNACD2MpOfhH21AyRVe0nRWvgnyc41tSXErQ&oe=6758A2F5"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t51.75761-15/469109328_18205479943294776_7217390935910034897_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHQEZsCuTmdIM-cQGsZte-fd-jbejlFrOx36Nt6OUWs7Ggg2tJ-HYDTRhfsIgc1Xp05wUE7W4-EgdYEvAiFBpft&_nc_ohc=vQYuaIsjxTIQ7kNvgEcmUOR&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=A186fA5kTu6O2WXJILnU-oh&oh=00_AYBiLFBcaS5qUkutIza-sHw53FuS7eZO5qM5H09hhkdXoQ&oe=6758B3C8"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/294789438_1116072535653411_8685194163326904205_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHDv1Y3vRkFpZ3OjVW-nCGF2Cp_3LpKJMvYKn_cukoky3a-cI6-yf279HbTaZs-ACIicNTtzfXLcMGKgwlOZ04u&_nc_ohc=fvsK1bIEkkYQ7kNvgE2g4Ch&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=AmG_h_DmngZLIMDlzkx75BY&oh=00_AYBmHiN3E_40LzFWSXJBgrpIjLlxnpC5Kqg9jVHJQ_xA6Q&oe=6758D548"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://images.happycow.net/venues/1024/31/36/hcmp313692_1866939.jpeg"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://images.happycow.net/venues/1024/31/36/hcmp313692_1946183.jpeg"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Bear;
