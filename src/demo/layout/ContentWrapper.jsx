import React from 'react';
import ContentHeader from './ContentHeader';
import MainContent from './MainContent';

export default function ContentWrapper() {
  return (
    <main className="content-wrapper">
      <ContentHeader />
      <MainContent />
    </main>
  );
}
