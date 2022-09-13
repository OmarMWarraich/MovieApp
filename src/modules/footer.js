const Footer = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
        <div class="footer-content">
        <p>Created by Ova, Norman and M.Mohsen</p>
        </div>
    `;
  document.body.appendChild(footer);
};

export default Footer;