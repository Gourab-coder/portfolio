import Image from "next/image";
import "./home.css";


export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="text-section">
        <p className="intro-text">Hii, I am Gourab Das</p>
        <h1 className="heading">A Software Developer</h1>
        <p className="description-text">I am a software developer with a passion for creating innovative solutions.</p>
        <p className="description-text">Also excited to solve problems and create efficient, scalable applications.</p>
        <p className="description-text">And always looking for new challenges and opportunities to learn and grow as a developer.</p>
        <button className="resume-btn">Resume</button>
      </div>
      <div className="image-section">
        <Image src="/images/profile.png" alt="Profile Picture" width={500} height={500} className="profile-image" />
      </div>
    </div>
  );
}
