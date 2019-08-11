<template>
  <div class="content--panel">
    <div class="panel--outer">
      <ul class="data-list">
        <li v-for="game in games" :key="game.title">
          <div class="data-item">
            <h3>{{ game.title }}</h3>
            <p>{{ game.description }}</p>
            <br>
            Genre: <span v-for="genre in game.genre" :key="genre">{{ genre }}, </span>
          </div>
        </li>
      </ul>
    </div>
    <button 
      @click="grabStats"
      class="btn">
      Grab Stats
    </button>
  </div>
</template>

<script>
import { value } from 'vue-function-api';

const API_URL = 'https://cors-adder.joshuaferr1s.now.sh/cors/https://api.steampowered.com/';

const USER_ID = 'sharpie360';

const gamesList = [
  {
    title: 'Fallout 3',
    description: 'A post nuclear survival rpg where bottle caps are currency and radiation is the new soap...',
    genre: ['Survival', 'Adventure', 'RPG', 'Shooter'],
    rating: 'M',
  },
  {
    title: 'Dishonored 2',
    description: 'Save Dunwall once again from certain doom, play as either Corvo or Emily and play your own way...',
    genre: ['Stealth', 'Adventure', 'RPG', 'Shooter'],
    rating: 'M',
  },
  {
    title: 'The Escapists',
    description: 'Youre in the slammer, your one job is to escape, by any means necessary...',
    genre: ['8Bit', 'Puzzle', 'Adventure'],
    rating: 'E',
  },
  {
    title: 'Bioshock Infinite',
    description: 'Booker DeWitt must enlist the help of Elizabeth to help him take down Comstock and the new utopia...',
    genre: ['Hybrid Shooter', 'Adventure', 'RPG'],
    rating: 'M',
  },
]

export default {
  setup() {
    const games = value(gamesList);
    const grabStats = async () => {
      console.log(API_URL)
      const response = await fetch(`${API_URL}/IPlayerService/GetOwnedGames/v1/?steamid=${USER_ID}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          Authorization: '',
        }
      });
      data = await response.json(); 
    }
    return {
      grabStats,
      games,
    }
  }
}
</script>

<style scoped>
.content--panel {
  height: 60vh;
  padding: 1.5rem 1.5rem 0 1.5rem;
  background-color: var(--dark-blue);
}
.panel--outer {
  height: 90%;
}
.data-list {
  list-style: none;
}
.data-item {
  min-height: 4rem;
  font-size: .8rem;
  margin-bottom: .5rem;
  border-bottom: 3px solid var(--header-grey);
}

</style>
