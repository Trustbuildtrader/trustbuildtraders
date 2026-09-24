const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if(menu && nav){
  menu.addEventListener('click',()=>{
    const open = nav.style.display === 'flex';
    nav.style.display = open ? '' : 'flex';
    if(!open){
      nav.style.position='absolute'; nav.style.top='78px'; nav.style.left='0';
      nav.style.right='0'; nav.style.padding='20px 6%'; nav.style.background='#343837';
      nav.style.flexDirection='column';
    }
  });
}
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);
  const name = data.get('name') || '';
  const phone = data.get('phone') || '';
  const email = data.get('email') || '';
  const service = data.get('service') || '';
  const message = data.get('message') || '';

  const subject = encodeURIComponent('New Quote Request - Trust Build Traders');
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nJob details:\n${message}`
  );

  window.location.href = `mailto:trustbuildtraders@gmail.com?subject=${subject}&body=${body}`;

  document.getElementById('formNote').textContent =
    'Your email app should now open with the quote request ready to send.';
});