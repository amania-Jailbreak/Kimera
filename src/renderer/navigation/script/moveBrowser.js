let engine;

function moveBrowser() {
  const word = document.getElementsByTagName('input')[0].value;
  document.activeElement.blur();

  let url;
  try {
    url = new URL(word);
  } catch (e) {
    if (word.match(/\S+\.\S+/)) {
      url = new URL(`http://${word}`);
    } else {
      url = new URL(engine + word);
    }
  }
  node.moveBrowser(url.href);
}

document.getElementById('textbox').addEventListener('keydown', (e) => {
  const word = document.getElementById('textbox').value;

  if (!e.isComposing && e.key === 'ArrowUp') {
    node.suggestUp();
  } else if (!e.isComposing && e.key === 'ArrowDown') {
    node.suggestDown();
  } else if (!e.isComposing && e.key === 'Enter') {
    node.suggestSelect();
  }

  if (!e.isComposing && e.key === 'Enter' && word != null) {
    // <span#opened>
    moveBrowser();
  }
});

