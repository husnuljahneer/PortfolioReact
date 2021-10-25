import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Intro from 'pages/Home/Intro';
import ProjectSummary from 'pages/Home/ProjectSummary';
// import Profile from 'pages/Home/Profile';
import Footer from 'components/Footer';
import Selection from 'pages/Home/Selection';
import Outro from 'pages/Home/Outro';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import { useLocation } from 'react-router-dom';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
// import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
// import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import relicStudio from 'assets/relicstudio.png';
import alllister from 'assets/alllister.jpg';
import alllister2 from 'assets/alllister2.jpg';
import ultrack from 'assets/ultrack.png';
import photocad from 'assets/photocad.png';
import travelo from 'assets/travelo.jpg';
import travelo2 from 'assets/travelo2.jpg';
import streamly from 'assets/streamly.jpg';
import streamly2 from 'assets/streamly2.jpg';
import soka from 'assets/soka.png';
import jvs from 'assets/jvs.png';
import marvelapp from 'assets/marvelapp.jpg';
import marvelapplogo from 'assets/marvelapplogo.jpg';

import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
// import gamestackTexture from 'assets/gamestack-login.jpg';
// import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
// import gamestackTexture2 from 'assets/gamestack-list.jpg';
// import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
// import sliceTexture from 'assets/slice-app.jpg';
// import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';
import './index.css';

const disciplines = ['Developer', 'Prototyper', 'Animator', 'Illustrator', 'Modder'];

const Home = () => {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const projectNine = useRef();
  
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [intro, projectOne, projectTwo, projectThree , projectFour , projectFive , projectSix , projectSeven, projectEight , projectNine];

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

    indicatorObserver.observe(intro.current);

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
      const hashSections = [intro, projectOne];
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
        <title>Husnul Jahaneer | Designer + Developer</title>
        <meta
          name="description"
          content="Portfolio of Husnul Jahaneer – a digital designer working on web &amp; mobile
          apps with a focus on motion and user experience design."
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Selection/>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="RelicStudio.dev Website"
        description="RelicStudio make digital products & experiences that have lasting impact"
        buttonText="View Project"
        buttonLink="https://husnuljahneer.github.io/RelicStudio.dev/"
        model={{
          type: 'laptop',
          alt: 'RelicStudio.dev Website',
          textures: [
            {
              src: relicStudio,
              srcSet: `${relicStudio} 800w, ${relicStudio} 1440w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="AllLister Ecommerce Application"
        description="Your number one source for all products, we're dedicated to giving you the best of product."
        buttonText="Download App"
        buttonLink="https://play.google.com/store/apps/details?id=com.relicstudio.AllListerAPP"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              src: alllister,
              srcSet: `${alllister} 254w, ${alllister} 508w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              src: alllister2,
              srcSet: `${alllister2} 254w, ${alllister2} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Ultrack Website"
        description="I’ve created simple yet modern single product website A design that everyone wants."
        buttonText="View Project"
        buttonLink="https://husnuljahneer.github.io/RelicStudio.dev/project/ultrack/index.html"
        model={{
          type: 'laptop',
          alt: 'Ultrack',
          textures: [
            {
              src: ultrack,
              srcSet: `${ultrack} 980w, ${ultrack } 1376w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Travelo"
        description="Best collaboration app, to find camps and new people."
        buttonText="Download App"
        buttonLink="https://play.google.com/store/apps/details?id=com.jahner.Travelo"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              src: travelo2,
              srcSet: `${travelo2} 254w, ${travelo2} 508w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              src: travelo,
              srcSet: `${travelo} 254w, ${travelo} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Photocad"
        description="I’ve created simple yet modern portfolio website A design that everyone wants."
        buttonText="View Project"
        buttonLink="https://husnuljahneer.github.io/RelicStudio.dev/project/photocad/index.html"
        model={{
          type: 'laptop',
          alt: 'photocad',
          textures: [
            {
              src: photocad,
              srcSet: `${photocad} 980w, ${photocad } 1376w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Streamly"
        description="Anime, K-Drama or International Movies? Streamly is a torrent fetcher, Everything in one!"
        buttonText="Download App"
        buttonLink="https://play.google.com/store/apps/details?id=com.jahner.Streamly"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              src: streamly2,
              srcSet: `${streamly2} 254w, ${streamly2} 508w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              src: streamly,
              srcSet: `${streamly} 254w, ${streamly} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Soka"
        description="I’ve created simple yet modern ecommerce website, A design that everyone loves."
        buttonText="View Project"
        buttonLink="https://husnuljahneer.github.io/RelicStudio.dev/project/soka/index.html"
        model={{
          type: 'laptop',
          alt: 'photocad',
          textures: [
            {
              src: soka,
              srcSet: `${soka} 980w, ${soka } 1376w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-8"
        alternate
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={6}
        title="Marvel Creative Learning Application"
        description="An educational institution application which provides live and recorded classes to encourage students to learn in a good manner"
        buttonText="Download App"
        buttonLink="https://play.google.com/store/apps/details?id=com.relicstudio.marvel"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              src: marvelapp,
              srcSet: `${marvelapp} 254w, ${marvelapp} 508w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              src: marvelapplogo,
              srcSet: `${marvelapplogo} 254w, ${marvelapplogo} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
         <ProjectSummary
        id="project-9"
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={9}
        title="JVS Classes"
        description="Choose the best eduction for your future. An educational website, with live and recorded classes."
        buttonText="View Project"
        buttonLink="https://husnuljahneer.github.io/jvs"
        model={{
          type: 'laptop',
          alt: 'jvs classes',
          textures: [
            {
              src: jvs,
              srcSet: `${jvs} 980w, ${jvs } 1376w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Outro />
      <Footer />
    </div>
  );
};

export default Home;