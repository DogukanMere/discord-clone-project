import React from 'react';
import ContentSection from './ContentSection';

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      <ContentSection
        imgsrc='/img/content1.svg'
        h2='Create an invite-only place where you belong'
        p='Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.'
        order={1}
      />
      <ContentSection
        imgsrc='/img/content2.svg'
        h2='Where hanging out is easy'
        p='Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.'
        order={3}
      />
    </>
  );
};

export default Main;
