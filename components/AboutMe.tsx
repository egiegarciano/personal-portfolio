const AboutMe = () => {
  return (
    <section className='relative mx-6 space-y-6 py-12'>
      {/* <div className='gradient-03' /> */}
      <div className='space-y-5'>
        <h2 className='text-center text-4xl font-semibold tracking-wider'>
          About Me
        </h2>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className='space-y-6'>
        <div className='space-y-4 [&>p]:text-[15px]'>
          <h3 className='text-2xl font-medium'>Get to know me!</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum will
            uncover many web sites still in their infancy.
          </p>
          <button type='button' className='contact-me__button'>
            Contact
          </button>
        </div>
        <div className='space-y-4'>
          <h3 className='text-center text-2xl font-medium'>Skills</h3>
          <div>
            <p>What I Can Do</p>
            <p>Hover over a skill for current proficiency</p>
          </div>
          <ul className='text-[15px]'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript ES6</li>
            <li>TypeScript</li>
            <li>Front-end Frameworks: React, Next.js</li>
            <li>Back-end Frameworks: Express, Nest</li>
            <li>Testing: Testing Library, Jest</li>
            <li>Tailwind</li>
            <li>API: REST, GraphQL</li>
            <li>Data Fetching: Axios, Apollo Client</li>
            <li>Other Tools: Redux, </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
