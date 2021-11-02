export const useInsert = (insertTo) => {
  const parentElement = document.querySelector(insertTo)
  
  const insert = (type, block) => {
    if (type === 'append') {
      parentElement.appendChild(block);
    }
    if (type === 'prepend') {
      parentElement.prepend(block);
    }
    if (type === 'replace') {
      block.classList.add('footer');
      parentElement.parentNode.replaceChild(block, parentElement);
    }
    if (type === 'fill') {
      parentElement.innerHTML = '';
      parentElement.appendChild(block);
    }
  }

  return {
    insert,
  }
}

export default useInsert;
