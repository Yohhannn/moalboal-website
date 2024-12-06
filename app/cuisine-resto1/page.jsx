import React from 'react';

const Venz = () => {
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
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c8/10/0f/with-rita-and-sven.jpg?w=800&h=400&s=1"
            alt="resto_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
        Ven'z Kitchen
        </h2>
        <p className="text-gray-600 mt-2">
        Location: Poblacion, Moalboal, Cebu
        </p>
        <p className="text-gray-700 mt-4">
        A delightful culinary escape where you can savor home-cooked Filipino meals, served with a side of warm hospitality. Ven'z Kitchen invites you to indulge in local flavors while experiencing the charm of Moalboal's community.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Food Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/431392415_911519584315441_6466419810333695236_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=18o5DUESW1MQ7kNvgGcEiOZ&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=AfUlBlUhw5oPG7JaxxdJeKz&oh=00_AYBxhNufgY9e8z2ds8_VpuAt_DMtCkAy9Ovz2olu1UXiNA&oe=675897C9"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/462096345_1066475135486551_2555813600081228288_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KunjS8QwQREQ7kNvgHu-Qe6&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=Avsvd-2fw_PQxE2SKTHEO1R&oh=00_AYASnSVzwF-pPw1e9odtv4TbEFctSL3xoQ2mQv4MxgDZwg&oe=675880DE"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-5.fna.fbcdn.net/v/t1.6435-9/147516276_1825928967558586_3710501742510796831_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeGA4tlq1UO8qaC0k00u-Ac5F8gg7NiCRzgXyCDs2IJHOElR0f_0eq6_CsgnarRFvxRh_b_mqDL1uYAY_6x6L_uy&_nc_ohc=S1x4sfTY-ekQ7kNvgFn1roS&_nc_zt=23&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AE15EyXScDt6yUApa5DEQuZ&oh=00_AYBD_8cKFMKCsFT9rgD5ox23YCg4lQWtxGqsbJQJGisjNw&oe=677A217A"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/330599169_229703269492494_570645455513750744_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-AsHfQaGidMmw-XOIUBaRJIZwfqhrAyckhnB-qGsDJ9h4blwNiwcjjyL0yFgKl6W-rz7hrhXTMRVMAtSgoo6k&_nc_ohc=CL6irg8s4v0Q7kNvgE_qrSm&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=AnuHySGQRaGccc3f-XNE_bm&oh=00_AYCwLcnn3C42J2C_UgOE8b1oVP6L_2X2eWEAQ7Zh0vrFxw&oe=67589A3B"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/331044332_1227825344474557_6391951602639143056_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEG3v2h-bOhGB3rjk8nruIKX9IZyqy1qd5f0hnKrLWp3nOZic8b2QVe_KEXGW4Z8D7-Rc9_v2EzdWuOEFflaCyN&_nc_ohc=Jowv1nDr7AwQ7kNvgEBJW3M&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=Ao74U-BL6zJPzoFBjzOxm87&oh=00_AYBYmQbVcJg6k97FqU_XlZ5eS9Jz9rbWMlv0ygzosF8qrA&oe=67587109"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/382365674_800092678791466_7187622379473950278_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHOTVZ0-l1TpUpk1tcmmfFmZCSlX7iVUARkJKVfuJVQBChdF1jh4lAHCocYr8a5f2wbNZ3sYoJGG0wkHlBGI-vg&_nc_ohc=1txoSf3Hjx4Q7kNvgGMONAc&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=A_x8lt01tiYuVs1sYSAyY-r&oh=00_AYDxN9coRGR1BgFpgDHinke66NJQECN_xeAgVx40bXsRNw&oe=67587889"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Venz;
