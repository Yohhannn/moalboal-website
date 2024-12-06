import React from 'react';

const Sinulog = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* First Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <a href="/events">
          <div className="btn mb-5 bg-gray-700 text-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300">
            Return ➤
          </div>
        </a>
        <div className="w-auto h-[500px] mx-auto overflow-hidden rounded-lg">
          <img
            src="event_assets/event_3.png"
            alt="Sardine Run Freediving"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Sinulog sa Kabataan in Moalboal
        </h2>
        <p className="text-gray-600 mt-2">
        A festive and youthful homage to the Sto. Niño, celebrated with vibrant dances and heartfelt devotion.
        </p>
        <p className="text-gray-700 mt-4">
        Sinulog sa Kabataan in Moalboal is a local adaptation of the famous Cebuano tradition, focusing on the participation of children and the youth. Featuring colorful costumes, rhythmic drumbeats, and spirited performances, this event is a spiritual and cultural expression of faith. It serves as a celebration of the Sto. Niño and unites the community in an atmosphere of joy and reverence.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Event Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/419504059_677112134631366_743977338736587006_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J0WlgLsgLcgQ7kNvgHnQEAw&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=Af7XT1Cr7OVZQw8Y0Yi2eJd&oh=00_AYCKUOfuOPO_mmOFfWHN2ls_jVL4FddNaeV0lftnLbbgxg&oe=675740C6"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/419504978_677112054631374_2434443641968846550_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ADXmNn4WLlkQ7kNvgFCflQf&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=A-6HSy7KSk2ysuwMhJ3Rgpt&oh=00_AYC_YjFk0XxjgnFglvX7rTqUOMjEEt0dCrxjd-ujNGcu4A&oe=67573D49"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/419493430_677112104631369_11723095881233231_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QGL71LD2C8QQ7kNvgHy2M1t&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=ACxWd-g9HtVql67y6bxCeQN&oh=00_AYBKBvZavxmkM5Po6RCWkCt58N4AhCacZIn2G8W9K_LKKQ&oe=67575ADF"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/419472764_677112031298043_1752754778433005167_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Hg_nzJZ3AlwQ7kNvgEY9YMB&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=AQZRj-Awj-eU7f6L3eJ2PBK&oh=00_AYANjyv7VwC4g1bdz4QxZmY4Xbw-ZSqw2vzsS5qg8rqfyg&oe=6757611C"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://media.assettype.com/sunstar%2Fimport%2Fuploads%2Fimages%2F2023%2F09%2F03%2F461388.jpg"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFi831TT7KbPir4MZ4IFiRamQGstXhPL2Dg&s"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Sinulog;
