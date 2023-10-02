function create(words) {
   const content = document.querySelector('#content');
   for (const word of words) {
      let divRef = document.createElement('div');
      let pRef = document.createElement('p');
      pRef.textContent = word;
      pRef.style.display = 'none';
      divRef.appendChild(pRef);
      content.appendChild(divRef);
      divRef.addEventListener('click', handler);
   }
   function handler(e) {
      let divRef = e.currentTarget;
      let pRef = divRef.children[0];
      pRef.style.display = "block";
   }
}