// Fetch the JSON file and generate shader cards
fetch('../shaders.json')
  .then(response => response.json())
  .then(shaders => {
    const container = document.getElementById('shaderContainer');

    shaders.forEach(shader => {
      const card = document.createElement('a');
      card.className = 'shader-card';
      card.href = shader.link;

      const img = document.createElement('img');
      img.className = 'shader-thumb';
      img.src = shader.image;

      const title = document.createElement('b1');
      title.className = 'shader-title';
      title.textContent = shader.title;

      card.appendChild(img);
      card.appendChild(title);
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Failed to load shaders:', err));
