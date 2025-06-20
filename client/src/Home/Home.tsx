

// import styles
import './Home.css'
import List from '../ListBox/ListBox'

export const Home = () => {

  // const allCollections = [['Plates', '12/22/1990'], ['Forks', '12/22/1990'], ['Spoons', '12/22/1990'], ['Knives', '12/22/1990']];
 
    
  return (
    <div className='parent-container'>
      <main className='main-container'>
        <div className='inner-container'>
          <header>
            <h1>
              Collections
            </h1>
          </header>
          <nav className='navbar'>
            <button className='new-collection-button'>New Collection</button>
            <button className='settings-button'>Settings</button>
            <button className='logout-button'>Logout</button>
          </nav>
          <div className='collections-parent-container'>
            <List/>
            {/* <div className='collection-header'><span className='collection-name-header'>Collection Name</span><span className='date-added-header'>Date Added</span></div>
            {allCollections.map((ele, i) => (<div className='collection-item' key={i}><span className='collection'>{ele[0]}</span><span className='date'>{ele[1]}</span></div>))} */}
          </div>
        </div>
      </main>
    </div>
  )
}
