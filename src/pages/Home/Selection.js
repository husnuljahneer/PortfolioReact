
import DecoderText from 'components/DecoderText';
import Section from 'components/Section';

import './Selection.css';
function Selection() {
  return (
  
    <Section className="selection">
          <div className="profile__content" >
            <div className="profile__column">
            <h1 class="intro__title" style={{width:'100%'}}>
                <DecoderText text="SELECTED_ WORKS: " delay={300} />
              </h1>
              </div>
              <div className="profile__image-wrapper" >
               
              </div>
            </div>
            </Section>

  );
  }

export default Selection;
