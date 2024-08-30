import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="header">
        <h1 className="title">Cogni</h1>
        <div className="subtitle">Amplify Your Mind</div>
      </div>
      <div className="content">
        <p>
          Welcome to Cogni, where cutting-edge AI meets human potential. Our revolutionary platform is designed to elevate your cognitive abilities, transforming the way you think, learn, and create.
        </p>
      </div>
      <div className="features">
        <div className="feature-item">
          <div className="feature-icon">🧠</div>
          <h3>AI-Powered Assistance</h3>
          <p>Harness the power of advanced AI to boost your problem-solving skills and creative thinking.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🗺️</div>
          <h3>Mind Mapping</h3>
          <p>Visualize complex ideas with our intuitive and dynamic mind mapping tools.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h3>Adaptive Learning</h3>
          <p>Experience personalized growth with our adaptive learning algorithms.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">👥</div>
          <h3>Collaborative Spaces</h3>
          <p>Connect and innovate in our virtual collaborative environments.</p>
        </div>
      </div>
      <div className="cta">
        <a href="#" className="cta-button">Start Your Journey</a>
      </div>
    </div>
  );
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

  .about-container {
    background-color: #0C0C0C;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }

  .about-container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(232, 72, 229, 0.1) 0%, rgba(82, 24, 250, 0.1) 100%);
    z-index: -1;
    animation: pulse 15s infinite, gradient 30s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes gradient {
    0% { background: radial-gradient(circle, rgba(232, 72, 229, 0.1) 0%, rgba(82, 24, 250, 0.1) 100%); }
    50% { background: radial-gradient(circle, rgba(82, 24, 250, 0.1) 0%, rgba(232, 72, 229, 0.1) 100%); }
    100% { background: radial-gradient(circle, rgba(232, 72, 229, 0.1) 0%, rgba(82, 24, 250, 0.1) 100%); }
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .title {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, #e848e5, #5218fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .subtitle {
    font-size: 1.5rem;
    color: #BDBDBD;
    font-weight: 300;
    letter-spacing: 2px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .content {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 4rem;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .feature-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .feature-item::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(82, 24, 250, 0.1) 0%, rgba(232, 72, 229, 0.1) 100%);
    z-index: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  .feature-item:hover::before {
    opacity: 1;
  }

  .feature-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(82, 24, 250, 0.3);
  }

  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  .feature-item h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #e848e5, #5218fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .feature-item p {
    font-size: 1rem;
    color: #BDBDBD;
    position: relative;
    z-index: 1;
  }

  .cta {
    text-align: center;
  }

  .cta-button {
    display: inline-block;
    background: linear-gradient(45deg, #e848e5, #5218fa);
    color: #ffffff;
    padding: 1rem 3rem;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    text-transform: uppercase;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    letter-spacing: 2px;
    font-size: 1.1rem;
    box-shadow: 0 8px 16px rgba(82, 24, 250, 0.3);
  }

  .cta-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(82, 24, 250, 0.4);
  }

  @media (max-width: 768px) {
    .about-container {
      padding: 3rem 1.5rem;
    }

    .title {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }

    .content {
      font-size: 1rem;
    }

    .features {
      grid-template-columns: 1fr;
    }
  }
`;

const AboutPage = () => (
  <>
    <style>{styles}</style>
    <About />
  </>
);

export default AboutPage;
