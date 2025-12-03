import ImageCarousel from '../components/ImageCarousel';
import '../styles/pages/MenuPage.css';

const menuImagesGlob = import.meta.glob('../assets/images/menu/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const MENU_IMAGES: string[] = Object.keys(menuImagesGlob)
  .sort()
  .map(key => menuImagesGlob[key] as string);

const MenuPage = () => {
  return (
    <section className="menu-section">
      <div className="menu-page">
        <h1 className="menu-title">Our Menu</h1>
        <ImageCarousel images={MENU_IMAGES} className="menu-carousel" />
      </div>
    </section>
  );
};

export default MenuPage;
