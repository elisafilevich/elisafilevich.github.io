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
        <a href="https://uni-tuebingen.de/en/faculties/faculty-of-economics-and-social-sciences/subjects/department-of-social-sciences/education-sciences-and-psychology/institute/">
        Hector Research Institute of Education Sciences and Psychology
        </a>
        <br/>
        <a href="https://motivationsciencelab.com">
        Motivation Science Lab
        </a>
        <br/>
          University of Tübingen
          <br/>
          Europastraße 6 
          <br/>
          72072 Tübingen, Germany
          <br/>
          +49 (0) 7071 29-75649
        </p>
      </div><!-- /col-lg-4 -->
      
      <div class="col-lg-4">
        <h4>Email</h4>
        <p>elisa.filevich@uni-tuebingen.de</p><br/>
      </div><!-- /col-lg-4 -->

      <div class="col-lg-4">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.8237457919895!2d9.053511012671931!3d48.51744337116828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799fad16d1fc8c1%3A0x6cad6723574dcb05!2sEuropastra%C3%9Fe%206%2C%2072072%20T%C3%BCbingen!5e0!3m2!1sen!2sde!4v1682192701793!5m2!1sen!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div><!-- /col-lg-4 -->
    </div>
    
  </div>
</div>
        `;
    }
}

customElements.define('footer-component', Footer);
