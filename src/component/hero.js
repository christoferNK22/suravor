class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero__text">
                    <img src="/images/heros/hero-image_4.jpg" alt="Hero Image">
                    <h1 class= "hero__title" "tabindex="0">Welcome to Suravor</h1>
                    <p class="hero__body" tabindex="0">Discover the best restaurants in town!</p>
                </div>
            </div>
        `
    }
}

customElements.define('custom', Hero);