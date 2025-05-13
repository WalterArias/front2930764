import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { grafica } from "./graficaChart.js";

document.querySelector("#app").innerHTML = `
<div>
<h1> hola vite</h1>

<div class="container">
<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button>
<div class="row">
<div class="col">
<div ><canvas id="datos"></canvas></div>
</div>

</div>
</div>

  </div>
`;
grafica();
