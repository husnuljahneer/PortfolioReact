import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Profile from 'pages/Home/Profile';
import classNames from 'classnames';
import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import { useLocation } from 'react-router-dom';
import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';
import Divider from 'components/Divider';
import './index.css';

import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
 } from 'vertical-timeline-component-react';

 const customTheme = {
  yearColor: '#405b73',
  lineColor: '#d0cdc4',
  dotColor: '#262626',
  borderDotColor: '#d0cdc4',
  titleColor: '#405b73',
  subtitleColor: '#bf9765',
  textColor: '#262626',
 };
const Resume = () => {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  // eslint-disable-next-line
  const [ ScrollIndicatorHidden,setScrollIndicatorHidden] = useState(false); 
  const details = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
 
    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    revealSections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(details.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handleHashchange = (hash, scroll) => {
      clearTimeout(scrollTimeout);
      const hashSections = [details];
      const hashString = hash.replace('#', '');
      const element = hashSections.filter(item => item.current.id === hashString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            scrollTimeout = setTimeout(
              () => {
                element.current.focus();
              },
              prefersReducedMotion ? 0 : 400
            );
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '-20% 0px -20% 0px' }
      );

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (hash && initHash.current && hasEntered) {
      handleHashchange(hash, false);
      initHash.current = false;
    } else if (!hash && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handleHashchange(hash, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [hash, state, prefersReducedMotion, status]);

  return (
    <div className="home">
      <Helmet>
        <title>Husnul Jahneer | Designer + Developer</title>
        <meta
          name="description"
          content="Portfolio of Husnul Jahneer – a digital designer working on web &amp; mobile
          apps with a focus on motion and user experience design."
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
      </Helmet>
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
  <h1 className="outro__title" style={{textAlign: "center",marginBottom:'50px'}}>
        EDUCATION {' \n '} </h1>
      
          <div className="outro__content" style={{display: 'flex', flexDirection: 'row',justifyContent: 'center'}}>
            <div className="profile__column" >
            <Timeline theme={customTheme} dateFormat='ll'>
   <Container>
    <YearContent startDate='2020/07/01' currentYear />
    <BodyContent>
     <Section title='Title'>
      <Description variant='subtitle' text='Subtitle' />
      <Description text='Description' />
      <Description text='Another description' />
     </Section>
     <YearContent startDate='2020/07/01' currentYear />

     <Section title='Another title'>
      <Description text='Description' />
      <Description text='Another description' />
     </Section>
     <YearContent startDate='2020/07/01' currentYear />

     <Section title='Another title'>
      <Description text='Description' />
      <Description text='Another description' />
     </Section>
    </BodyContent>
   </Container>
  </Timeline>
   </div>
   </div>
      <Footer />
    </div>
  );
};

export default Resume;
