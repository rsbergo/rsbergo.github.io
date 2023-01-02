class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="index.html">
                    <img src="#" alt="Home">
                </a>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                    </ul>
                </nav>
            </header>
        `
    };
}

customElements.define('custom-header', CustomHeader);