import React from 'react';
import Nav from './components/Nav';
import CardList from './components/CardList';
import Card from './components/Card';

const App = () => (
  <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <Nav />
    <section className="bg-white py-8">
      {/* <CardList /> */}
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <Card title={'Bird'} category={'Poem'} />
      </div>
    </section>
  </div>
);

export default App;
