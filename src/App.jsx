//importations of individual components
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Content from './components/Content';
import Header from './components/Header';

export default function App() {
  return (
    <main id="main-layout">
      <NavBar />
        <Header />
          <Categories />
            <Content />

    </main>
  )
}