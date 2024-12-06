import './Hero.css'
import photo2 from '../../../../photo/photo2.svg'
import emLogo from "../../../../photo/Vector 1.svg"
const Hero = () => {
  return (
    <section>
     <div className="hero-welcome-section ">
    <h1 className='hero-welcome-text'>Welcome to <span className="hero-highlight relative">EFM  <img src={emLogo} alt="" className='hero-absolute'/></span> hub</h1>
    <div className="hero-about-section-icon-text flex items-center sm:flex-col sm:items-center lg:flex-row lg:items-start sm:gap-2 lg:gap-4 sm:m-auto lg:m-0">
  <p className='hero-section-p text-center lg:text-left'>
    Designed to Lead and Built to Last
  </p>
</div>

    <img src={photo2} alt="Welcome Image" className="hero-welcome-image" />
</div>

      <div className="hero-statistics-section">
      <div className="hero-stat-item">
      <h1 className='hero-number'>450</h1>
      <p className='hero-label'>Total Clients</p>
      </div>
      <div className="hero-stat-item">
      <h1 className='hero-number'>50</h1>
      <p className='hero-label'>Clients Profits</p>
      </div>
      <div className="hero-stat-item">
      <h1 className='hero-number'>500</h1>
      <p className='hero-label'>Clients Contracts</p>
      </div>
      </div>
     

    </section>
  )
}

export default Hero
