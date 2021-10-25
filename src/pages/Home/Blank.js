
import DecoderText from 'components/DecoderText';
import Section from 'components/Section';

import './Selection.css';
function Blank() {
  return (
  
    <Section className="selection">
          <div className="profile__content" >
            <div className="profile__column">
            <h1 class="outro__title" style={{width:'100%'}}>
                <DecoderText text=" " delay={300} />
              </h1>
              </div>
              <div className="profile__image-wrapper" >
               
              </div>
            </div>
            </Section>

  );
  }

export default Blank;
