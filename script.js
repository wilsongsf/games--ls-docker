let editIndex = null;

// Função para carregar os jogos armazenados no LocalStorage
function loadGames() {
  const games = JSON.parse(localStorage.getItem('games')) || [];
  const tbody = document.querySelector('#gameTable tbody');
  tbody.innerHTML = '';

  games.forEach((game, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${game.name}</td>
      <td>${game.genre}</td>
      <td>${game.releaseYear}</td>
      <td>
        <button onclick="editGame(${index})">Editar</button>
        <button onclick="deleteGame(${index})">Deletar</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

// Função para adicionar um novo jogo ao LocalStorage
function addGame(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const genre = document.getElementById('genre').value;
  const releaseYear = document.getElementById('releaseYear').value;

  const game = { name, genre, releaseYear };

  const games = JSON.parse(localStorage.getItem('games')) || [];
  games.push(game);
  localStorage.setItem('games', JSON.stringify(games));

  document.getElementById('gameForm').reset();
  loadGames();
}

// Função para deletar um jogo do LocalStorage
function deleteGame(index) {
  const games = JSON.parse(localStorage.getItem('games')) || [];
  games.splice(index, 1);
  localStorage.setItem('games', JSON.stringify(games));
  loadGames();
}

// Função para editar um jogo
function editGame(index) {
  const games = JSON.parse(localStorage.getItem('games')) || [];
  const game = games[index];

  document.getElementById('name').value = game.name;
  document.getElementById('genre').value = game.genre;
  document.getElementById('releaseYear').value = game.releaseYear;

  // Define o índice do jogo que está sendo editado
  editIndex = index;

  // Altera os botões para refletir o modo de edição
  document.getElementById('addButton').style.display = 'none';
  document.getElementById('editButton').style.display = 'inline-block';
}

// Função para salvar as alterações do jogo editado
function saveEditedGame() {
  const name = document.getElementById('name').value;
  const genre = document.getElementById('genre').value;
  const releaseYear = document.getElementById('releaseYear').value;

  const games = JSON.parse(localStorage.getItem('games')) || [];
  games[editIndex] = { name, genre, releaseYear };
  localStorage.setItem('games', JSON.stringify(games));

  document.getElementById('gameForm').reset();
  editIndex = null;

  // Volta ao modo de adicionar
  document.getElementById('addButton').style.display = 'inline-block';
  document.getElementById('editButton').style.display = 'none';

  loadGames();
}

// Função para enviar a lista de jogos pelo WhatsApp
function sendWhatsApp() {
  const number = document.getElementById('whatsappNumber').value;
  const games = JSON.parse(localStorage.getItem('games')) || [];

  if (!number) {
    alert('Por favor, insira um número de WhatsApp válido.');
    return;
  }

  if (games.length === 0) {
    alert('Não há jogos para enviar.');
    return;
  }

  let message = 'Lista de Jogos:\n';
  games.forEach(game => {
    message += `Nome: ${game.name}, Gênero: ${game.genre}, Ano: ${game.releaseYear}\n`;
  });

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

document.getElementById('gameForm').addEventListener('submit', addGame);
document.getElementById('editButton').addEventListener('click', saveEditedGame);
document.getElementById('sendWhatsapp').addEventListener('click', sendWhatsApp);

// Carrega a lista de jogos ao carregar a página
loadGames();
