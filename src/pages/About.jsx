const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-md leading-8 max-w-2xl mx-auto px-10 text-start lg:text-lg lg:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa autem, deserunt nihil reiciendis quia eligendi amet. Aut maiores quia possimus, odit quam nostrum, quaerat, laborum aspernatur ad esse asperiores!</p>
    </>
  );
};

export default About;
