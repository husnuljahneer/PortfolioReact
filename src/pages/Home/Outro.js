import DecoderText from 'components/DecoderText';
import Section from 'components/Section';
import Image from 'components/Image';
import Arrow from 'assets/arrow.png';
import ProfileImgPlaceholder from 'assets/profile-placeholder.jpg';
import { media } from 'utils/style';
import Link from 'components/Link';
import './Outro.css';
function Outro() {
  return (
     
    <Section
    className="outro">
          <div className="outro__content" style={{justifyContent: 'center'}}>
            <div className="outro__column" >
            <h1 class="outro__title" style={{width:'100%'}}>
                <DecoderText text="FEEL FREE TO CONTACT ME IF YOU HAVE ANY PROJECTS TO REQUEST" delay={300} />
              </h1>
              </div>
              <Image style={{height:'200px',width:'200px',marginTop:'-90px'}}
                  placeholder={ProfileImgPlaceholder}
                  srcSet={`${Arrow} 80w, ${Arrow} 960w`}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Arrow"
                />
                
            </div>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'flex-start',marginTop:'100px'}}> 
            <div>
            <Link primary className="footer__link" href="/contact" target="_blank">
            Say Hello!
            </Link>
            </div>
            <div>
            <span className="footer__date" style={{marginTop:'10px'}}>
            +91 7012 093 953
            </span>
            </div>   
            </div>
            </Section>

  );
  }

export default Outro;
