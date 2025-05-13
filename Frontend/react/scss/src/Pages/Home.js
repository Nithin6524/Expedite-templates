
import "../scss/pages/Home.scss";

function Home() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>React + SCSS Template</h1>
                <p className="subtitle">A clean, modern starting point for your React projects</p>
                <div className="cta-buttons">
                    <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary">React Docs</a>
                    <a href="https://sass-lang.com/documentation" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">SCSS Docs</a>
                </div>
            </div>

            <div className="features-section">
                <h2>Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Responsive</h3>
                        <p>Fully responsive layout that works on all devices</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3>SCSS Support</h3>
                        <p>Organized styles with variables, mixins, and nesting</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🧩</div>
                        <h3>Component-Based</h3>
                        <p>Modular architecture for easy maintenance</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3>Ready to Extend</h3>
                        <p>Add features and pages as your project grows</p>
                    </div>
                </div>
            </div>

            <div className="getting-started-section">
                <h2>Getting Started</h2>
                <div className="code-block">
                    <code>
                        <pre>{`# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build`}</pre>
                    </code>
                </div>
                <p className="help-text">Edit <code>src/Pages/Home.js</code> to customize this page</p>
            </div>
        </div>
    );
}
export default Home;
