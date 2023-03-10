import React, { useEffect } from 'react';
import ContentSection from './ContentSection';
import ContentLast from './ContentLast';
import Footer from './Footer';

type Props = {};

const Main = (props: Props) => {
  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('showContent');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.notShow');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <>
      <ContentSection
        imgsrc='/img/content1.svg'
        h2='Create an invite-only place where you belong'
        p='Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.'
        isOrdered={true}
        isGray={false}
      />

      <ContentSection
        imgsrc='/img/content2.svg'
        h2='Where hanging out is easy'
        p='Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.'
        isOrdered={false}
        isGray={true}
      />

      <ContentSection
        imgsrc='/img/content3.svg'
        h2='From few to a fandom'
        p='Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.'
        isOrdered={true}
        isGray={false}
      />

      {/* Content Bottom */}
      <ContentLast />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Main;
