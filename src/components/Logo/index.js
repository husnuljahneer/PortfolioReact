import Image from 'components/Image';
import Logoimg from 'assets/logo.png';
import ProfileImgPlaceholder from 'assets/profile-placeholder.jpg';
import { media } from 'utils/style';
const Logo = () => {
    return (
        <Image
        placeholder={ProfileImgPlaceholder}
        srcSet={`${Logoimg} 480w, ${Logoimg} 960w`}
        sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
        alt="Husnul Jahaneer Logo"
        />
);
};

export default Logo;
