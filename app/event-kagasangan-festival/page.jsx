import React from 'react';

const Kagasangan = () => {
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
            src="event_assets/event_2.png"
            alt="Sardine Run Freediving"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Kagasangan Festival in Moalboal
        </h2>
        <p className="text-gray-600 mt-2">
        A vibrant celebration of culture, history, and community spirit that highlights the rich marine biodiversity of Moalboal.
        </p>
        <p className="text-gray-700 mt-4">
        The Kagasangan Festival is a cultural event in Moalboal that pays tribute to its roots as a coastal town. The term "Kagasangan" translates to "corals" in English, symbolizing the town's abundant marine life and its connection to the sea. Featuring vibrant street dances, intricate costumes inspired by marine biodiversity, and festive activities, the event highlights Moalboal’s identity as a haven for underwater wonders. This annual celebration is a showcase of creativity, tradition, and pride for locals and visitors alike, offering a truly immersive cultural experience rooted in the town's heritage and natural beauty.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Event Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://scontent.fmnl9-6.fna.fbcdn.net/v/t1.6435-9/175533914_2656680564630002_7464465155249932561_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGPGlWrRETQGUk1q0VwfxGIpt8ZN1i7MUum3xk3WLsxS5pRq6MUESXT-Jk5pD8AhIaR0CfYl-5iAzqOrT0g670y&_nc_ohc=S9V1YcF0z2AQ7kNvgHde7F8&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=Ap-Y1TJJguX_SXjER6njbuL&oh=00_AYCPoSEfOf5V45I5pXvlIih8hebSzNJgvP8SZXO2ct3HuQ&oe=6778EBBE"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/175567708_2656680731296652_4991642745433457119_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHsUI7-T-Pa3jl0rjhL0UIcVtrqbIgPlLhW2upsiA-UuPgMTcOzD-GQ-28_SXtbeKrDF558sRncuZf4TAlb801X&_nc_ohc=2jQhdwQg-7MQ7kNvgFrMBmR&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=AIbRoWj07t7WEEr_X8kjwX8&oh=00_AYBu-9znT5CUA1hrwWcu8UtxfO0D6aSQfbanwpu_LvD8ag&oe=6778DC4F"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/175589873_2656680937963298_1166406257847084134_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGresa43nSNjKGuYtFnFRwHVhRqSMihf8tWFGpIyKF_yyLvPQ2oyLZ5xUVeC2RVVUknKbE_9nRhApiFt34SgL0K&_nc_ohc=iVzcSh9_JZUQ7kNvgH7GS6o&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=AqSZ4tpwcoxnQliu5YhhmMf&oh=00_AYCrlp_MXHO0vUDFXY3RyeVN86G-6ohLk05LrbaRIDHpig&oe=6778E433"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-5.fna.fbcdn.net/v/t1.6435-9/175681413_2656680387963353_705742462422212148_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHi6pxNAmHFxXTBzQ-LMnmEUVHrND9iZuxRUes0P2Jm7AQ_iKwESosrppiPqTUTr-Lv3F4Asenp7BHvGEEFBtv-&_nc_ohc=vvxQOWJTmP4Q7kNvgEqikd8&_nc_zt=23&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=Amf_Y8Bqus43gG4HNmfJv19&oh=00_AYCiJRjQS9ptVhefnmm3BZLyqAbAN7J7wGFQUx3HPRflcA&oe=6778FEFB"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://pbs.twimg.com/media/EC0H2EOUUAAOr17.jpg:large"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/457149442_8066540416766666_4318309088169539588_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGC-j7QkSpPEyRPmZpLUlStsuWJk03dJHay5YmTTd0kdnEEuVyXqYM0qBSpKq2Q9Mmc8mxWLlQ8ap6xpH9oBSBM&_nc_ohc=ImJXOdtuMdMQ7kNvgG6eGUo&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=ATwcPKacYfRbKZoHCQDPdWm&oh=00_AYAUFK1K6TuMC40oh-GGLvoj11z0xh9uinIL5h7h4Az71Q&oe=6757557B"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Kagasangan;
