import { Fragment } from 'react';
import classNames from 'classnames';
import Link from 'components/Link';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Image from 'components/Image';
import Section from 'components/Section';
import Jahneer from 'assets/jahneer.jpg';
import ProfileImgPlaceholder from 'assets/profile-placeholder.jpg';
import { media } from 'utils/style';
import { ReactComponent as KatakanaProfile } from 'assets/katakana-profile.svg';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './Profile.css';

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <Heading
      className={classNames('profile__title')}
      level={3}
      id={titleId}
    >
      <DecoderText text="Hi there" delay={100} />
    </Heading>
    <Text
      className={classNames('profile__description')}
      size="l"
    >
      I’m Hamish, currently I live in Sydney working as a senior product designer at{' '}
      <Link href="https://www.qwilr.com">Qwilr</Link>. My projects include UX design, UI
      animations, and icon illustration. Being comfortable with code allows me to rapidly
      prototype and validate experiences. If you're interested in the tools and software I
      use check out my <Link href="/uses">uses page</Link>.
    </Text>
    <Text
      className={classNames('profile__description')}
      size="l"
    >
      In my spare time I like to practice Brazilian Jiu Jitsu, play video games, and{' '}
      <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing
      about new projects, so feel free to drop me a line.
    </Text>
  </Fragment>
);

const Cv = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >

          <div className="profile__content">
            <div className="profile__column">
              <ProfileText  titleId={titleId} />
              <Button
                secondary
                className={classNames('profile__button')}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className="profile__column">
              <div className="profile__tag" >
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapseDelay={1000}
                />
                <div
                  className={classNames(
                    'profile__tag-text',
                   
                  )}
                >
                  About Me
                </div>
              </div>
              <div className="profile__image-wrapper">
                <Image
                  reveal
                  delay={100}
                  placeholder={ProfileImgPlaceholder}
                  srcSet={`${Jahneer} 480w, ${Jahneer} 960w`}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <KatakanaProfile
                  className={classNames('profile__svg')}
                />
              </div>
            </div>
          </div>    
    </Section>
  );
};

export default Cv;
