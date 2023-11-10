import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import App from './App';
import './index.css';

const root = document.getElementById('root');
const body = document.querySelector('body');
body.style.background = "#f2f9f9"

render(
  () => (
    <Router>
      <App />
    </Router>
  ),root);
