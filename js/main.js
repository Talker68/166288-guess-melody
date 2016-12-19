import CreateWelcome from './screen/welcome-view';
import {data} from './game'

window.onload = () => {
	CreateWelcome(data.rules).renderView();
}
