import "./AboutUs.css";
import loggggo from "../../../../photo/logo2.svg";
import photo3 from "../../../../photo/photo3.svg";
import logoo333 from "../../../../photo/logo3.svg";
import icon from "../../../../photo/Icon.svg"
const Aboutus = () => {
<<<<<<< HEAD
    return (
        <div className="about-section-container">
            <div className="about-section-header">
                <div className="about-section-icon-text">
                    <span className="about-section-icon">🚀</span> {/* يمكن استبدال هذا برمز SVG */}
                    <p>Designed to Lead and Built to Last</p>
                </div>
            </div>
            <div className="about-section-content">
                <div className="about-section-left-column">
                    <img src={photo3} alt="Panther Image" className="about-section-panther-image" />
                    <div className="efm-hub-container">
      <img src={loggggo} alt="EFM Logo" className="efm-logo" />
      <span className="efm-text">EFM HUB</span>
    </div>
                </div>
                <div className="about-section-right-column">
                    <h1>About <span className="about-section-highlight">US</span> <img src={logoo333}  alt='ivooo' className='loggo33'/></h1> 
                    <p><strong>EFM</strong> is the strongest company for making money online, offering unparalleled features and strong rewards that make it the best choice for everyone.</p>
                    <br />
                    <p>We believe in the power of innovation and technology and always strive to provide advanced solutions that meet our clients' needs.</p>
                    <br /> 
                    <br />
                    <p>We offer you the opportunity to earn money through simple and enjoyable tasks such as watching videos and interacting on social media channels <br />These tasks will be your means to make money and achieve wealth effortlessly, without any experience, and with minimal investment cost.
                    <br /> <br />We also help companies advertise all their services and products, and in return, we provide them with a large audience and real followers from all over the world. Thanks to our well-thought-out strategies, our clients can reach a targeted audience and significantly increase their visibility.</p>
                </div>
            </div>
            <div className="about-section-goals-vision">
                <div className="about-section-goal-card">
                    <h3>◎ Our goals</h3>
                    <p>Contributing to the transition of the advertising market from centralization to decentralization, ending the monopoly of companies on advertising profits...</p>
                </div>
                <div className="about-section-vision-card">
                    <h3>◎ Our vision</h3>
                    <p>To be the first true online platform to provide passive income to all social classes and help the largest number of smartphone users worldwide achieve financial security.</p>
                </div>
            </div>
            <div className="section-dividerse"></div>

=======
  return (
    <div className="bg-[#f9f9f9]">
      <div className="about-section-container ">
        <div className="about-section-header ">
          <div className="about-section-icon-text sm:m-auto lg:m-0">
            <span className="about-section-icon">🚀</span>{" "}
            {/* يمكن استبدال هذا برمز SVG */}
            <p>Designed to Lead and Built to Last</p>
          </div>
>>>>>>> 4968fcec23fb8cb6c7f7b0341b36d1e8c79d885a
        </div>
        <div className="about-section-content">
          <div className="about-section-left-column">
            <img
              src={photo3}
              alt="Panther Image"
              className="about-section-panther-image"
            />
            <div className="efm-hub-container">
              <img src={loggggo} alt="EFM Logo" className="efm-logo" />
              <span className="efm-text">EFM HUB</span>
            </div>
          </div>
          <div className="about-section-right-column">
            <h1 className="flex">
              <span className="text-3xl lg:text-5xl font-bold ">About <span className="about-section-highlight mr-2">US</span>{" "}</span>
              <img src={logoo333} alt="ivooo" className="loggo33" />
            </h1>
            <p>
              <strong>EFM</strong> is the strongest company for making money
              online, offering unparalleled features and strong rewards that
              make it the best choice for everyone.
            </p>
            <br />
            <p>
              We believe in the power of innovation and technology and always
              strive to provide advanced solutions that meet our clients' needs.
            </p>
            <br />
            <br />
            <p>
              We offer you the opportunity to earn money through simple and
              enjoyable tasks such as watching videos and interacting on social
              media channels <br />
              These tasks will be your means to make money and achieve wealth
              effortlessly, without any experience, and with minimal investment
              cost.
              <br /> <br />
              We also help companies advertise all their services and products,
              and in return, we provide them with a large audience and real
              followers from all over the world. Thanks to our well-thought-out
              strategies, our clients can reach a targeted audience and
              significantly increase their visibility.
            </p>
          </div>
        </div>
        <div className="about-section-goals-vision">
          <div className="about-section-goal-card">
            <h3>◎ Our goals</h3>
            <p>
              Contributing to the transition of the advertising market from
              centralization to decentralization, ending the monopoly of
              companies on advertising profits...
            </p>
          </div>
          <div className="about-section-vision-card">
            <h3>◎ Our vision</h3>
            <p>
              To be the first true online platform to provide passive income to
              all social classes and help the largest number of smartphone users
              worldwide achieve financial security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
