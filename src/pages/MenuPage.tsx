import mainMenu1 from '../assets/images/main-menu/1.png';
import mainMenu2 from '../assets/images/main-menu/2.png';
import mainMenu3 from '../assets/images/main-menu/3.png';
import lunchMenu from '../assets/images/lunch-menu.png';
import '../styles/pages/MenuPage.css';
import ImageCarousel from '../components/ImageCarousel';

const MenuPage = () => {
  return (
    <>
      <section className="menu-section">
        <div className="menu-page">
          <h1 className="section-title">Our Menu</h1>
          <ImageCarousel
            images={[mainMenu1, mainMenu2, mainMenu3, lunchMenu]}
            altTexts={[
              'Main Menu 1',
              'Main Menu 2',
              'Main Menu 3',
              'Lunch Menu',
            ]}
            className="menu-carousel"
          />
        </div>
      </section>
    </>
  );
};

export default MenuPage;
