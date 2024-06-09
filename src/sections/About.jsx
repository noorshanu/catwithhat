import Title from "components/Title";

function About() {
  return (

    <section className="bg-purp mx-8 rounded-b-2xl py-12" >


    <div className="container-wrapper grid lg:grid-cols-2 gap-10 ">
      <div>
        <img src="/images/about.jpeg" className=" rounded-3xl h-auto sm:h-[400px] w-auto" alt="" />
      </div>

      <div>
        <Title className="lh-1_5 mb-3 text-[#000]">
          About Us 
        </Title>

        <p className="font-daughter text-2xl font-medium text-black ">
          Lets dive into the most exhilarating tale ever: 
          whirlwind journey!  This ain't your regular story; it got meme
          adventures, a splash of sarcasm, a pinch of love, and you guessed it –
          a cryptocurrency twist!  A memetic love story between those iconic
          pink and green hearts!  ? Oh honey, she's armed with
          memes that could practically work magic 
        </p>
      </div>
    </div>

    </section>
  );
}

export default About;
