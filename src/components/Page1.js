import logo from '../logo.svg';
const Page1 = ({ onRouteChange }) => {
	return(
	 <div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h2>Welcome To react 1</h2>
	        </header>
	         <button className='disabled'>page1</button>
	         <button onClick={() => onRouteChange('page2')}>page2</button>
	         <button onClick={() => onRouteChange('page3')}>page3</button>
      </div>
		)
}

export default Page1;