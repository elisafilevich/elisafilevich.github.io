class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div id="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <h4>Find us</h4>
        <p>
          Humboldt-Universitaet zu Berlin<br/>
          Bernstein Center for Computational Neuroscience<br/>
          Philippstr. 13 (Haus 6)
          <br/>Raum 203<br/>
          10115 Berlin, Germany<br/>
          +49 (0) 30 2093 6313
        </p>
      </div><!-- /col-lg-4 -->
      
      <div class="col-lg-4">
        <h4>Email</h4>
        <p>elisa.filevich@bccn-berlin.de</p><br/>
      </div><!-- /col-lg-4 -->

      <div class="col-lg-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d515.3369281074251!2d13.381965338409904!3d52.52591332602748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf002105436346da!2sBernstein+Center+for+Computational+Neuroscience+Berlin!5e0!3m2!1sen!2sde!4v1540062493261" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div><!-- /col-lg-4 -->
    </div>
    
  </div>
</div>
        `;
    }
}

customElements.define('footer-component', Footer);
