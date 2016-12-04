import * as domConstructors from './dom-constructors';
import createMainWelcome from './welcome';
import {data} from './game';

domConstructors.renderElement(createMainWelcome(data.rules));
