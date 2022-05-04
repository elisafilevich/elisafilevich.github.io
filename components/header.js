class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar navbar-inverse navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">METAMOTOR LAB</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="research.html">Research</a></li>
                    <li><a href="availableTestingSlots.html">Participate!</a></li>
                    <li><a href="publications.html">Publications</a></li>
                    <li><a href="talks.html">Talks</a></li>
                    <li><a href="people.html">People</a></li>
                    <li><a href="jobDescription.html">Join us</a></li>
                    <li><a href="funding.html">Funding</a></li>
                </ul>
            </div>
        </div>
        </div>
        `;
    }
}

customElements.define('header-component', Header);
