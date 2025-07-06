function About() {
  return (
    <main>
      <section className='container'>
        <h3>About Birthday App</h3>
        <div className='text'>
          <p>
            Welcome to the Birthday App! This application helps you keep track of 
            birthdays and celebrate the special people in your life.
          </p>
          <p>
            Features include:
          </p>
          <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
            <li>• View all birthdays in one place</li>
            <li>• Clear all birthdays with one click</li>
            <li>• Refresh to restore all birthdays</li>
            <li>• Add new people to your birthday list</li>
            <li>• Beautiful neon-styled profile pictures</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            This app was built with React and features modern CSS animations 
            and a responsive design.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About; 