
import DecoderText from 'components/DecoderText';
import { Button } from 'components/Button';
function Outro() {
  return (
   

      <div classs="intro__text" style={{textAlign:'right'}}>
            <header>
              <h1 className="intro__title" style={{width:'100%'}}>
                <DecoderText text="FEEL FREE " delay={300} />
                <DecoderText text="TO CONTACT" delay={300} /> 
                <DecoderText text="ME IF YOU " delay={300} /> 
                <DecoderText text="HAVE ANY " delay={300} /> 
                <DecoderText text="PROJECTS " delay={300} />
                <DecoderText text=" TO REQUEST" delay={300} />
              </h1>
              <Button
              style={{marginRight:'40px',marginTop:'30px'}}
                  className={'contact__button'}
                  loadingText="Sending..."
                  type="submit"
                >
                  SEND A HI
                </Button>
            </header>
              </div>
  );
  }

export default Outro;
