import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

const App = () => {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
};

export default App;
