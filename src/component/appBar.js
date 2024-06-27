class appBar extends HTMLElement {
    conectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="app-bar">
            <div class="app-bar__menu">
                <button class="btn" id="hamburgerButton" tabindex="0">☰</span>
            </div>
            <div class="app-bar__brand">
                <img tabindex="0" src="/images/LogoBrand.png" alt="Suravor Logo">
                <h1 tabindex="0">Suravor</h1>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                    <li>
                        <a href="/" tabindex="0">Home</a>
                    </li> 
                    <li>
                        <a href="/favorites" tabindex="0">Favorites</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/christofer-nathanael-0b1192254/" tabindex="0">About Us</a>
                    </li>
                </ul>
            </nav>
        </div>
        `
    }
}

customElements.define('custom-header', appBar);