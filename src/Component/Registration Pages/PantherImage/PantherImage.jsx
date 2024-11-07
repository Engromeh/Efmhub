import './PantherImage.css';
import panther from 'path/to/panther-image.png'; 

function PantherImage() {
  return (
    <div className="panther-image">
      <img src={panther} alt="Panther" />
    </div>
  );
}

export default PantherImage;