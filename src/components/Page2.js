import logo from '../logo.svg';
const Page2 = ({ onRouteChange }) => {
	return(
	 <div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h2>Welcome To react 2</h2>
	        </header>
	         <button onClick={() => onRouteChange('page1')}>page1</button>
	         <button className='disabled'>page2</button>
	         <button onClick={() => onRouteChange('page3')}>page3</button>
      </div>
		)
}

export default Page2;