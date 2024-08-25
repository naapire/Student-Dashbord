import React, { useState } from 'react';
import White from './assets/white.svg';
import Violet from './assets/violet.svg';
import Search from './assets/search.svg';
import Book from './assets/book.svg';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Header from './Header';
import Sidebar from './Sidebar';
import AddStudent from './component/Logins/AddStudent';
import Page2 from './component/page2/page2';

function Home() {
  const [currentPage, setCurrentPage] = useState('home'); // State to manage current page

  // Function to handle card click
  const handleCardClick = () => {
    setCurrentPage('page2');
  };

  if (currentPage === 'page2') {
    return <Page2 />;
  }

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <main className='main-container relative-container'>
        <div className="minor-container">
          <div className="icon-container">
            <div className="icon-wrappe">
              <img src={White} alt="Not" className='icon' />
            </div>
            <div className='text-container'>
              <div className='text-titl'>Total Students</div>
              <div className='text-valu'>1,225</div>
            </div>
          </div>
        </div>
        <div className='search-container'>
          <div className='minor-search'>
            <div className='student-list'>Students List</div>
            <div className='student-input'>
              <input type="text" placeholder='Search' />
              <img src={Search} alt="Not" className='icon' />
            </div>
          </div>
          <div>
            <div className='main-card'>
              <div className='main-cards'>
                {/* Card block repeated */}
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card' onClick={handleCardClick}>
                  <div className='card-inner'>
                    <img src={Violet} alt="Not" className='card_icon' />
                    <h3>James Omokewe</h3>
                    <div className='green'>
                      <div className=''>
                        <img src={Book} alt="Not" className='icon' />
                        -
                      </div>
                      <div>|</div>
                      <div>
                        <img src={Book} alt="Not" className='icon' />
                        90%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='next-container'>
                <button className='arrows'><BsArrowLeft className='icon' /> Previous</button>
                <div className='num-buttons'>
                  <button className='buttons'>1</button>
                  <button className='buttons'>2</button>
                  <button className='buttons'>3</button>
                  <button className='buttons'>4</button>
                  <button className='buttons'>5</button>
                  <button className='buttons'>6</button>
                  <button className='buttons'>7</button>
                  <button className='buttons'>8</button>
                  <button className='buttons'>9</button>
                  <button className='buttons'>10</button>
                  <button className='buttons'>11</button>
                  <button className='buttons'>12</button>
                </div>
                <button className='arrows'>Next <BsArrowRight className='icon' /></button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
