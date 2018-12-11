const MAXIMUM_DAMAGE = 15;
const MAXIMUM_SPECIAL_DAMAGE = 20;
const MAXIMUM_HEALING = 20;

const actors = {
  player: 'PLAYER',
  monster: 'MONSTER'
};

const eventTypes = {
  attack: 'ATTACK',
  healing: 'HEALING'
};

const initialState = {
  playerHealth: 100,
  monsterHealth: 100,
  playing: false,
  events: []
};

const generateNumber = (max) => {
  return Math.round(Math.random() * max);
};

const turnClass = (event) => {
  return event.actor === actors.player ? 'player-turn' : 'monster-turn';
};

const otherActor = (event) => {
  if (event.type === eventTypes.healing) {
    return 'HIMSELF';
  } else if (event.actor === actors.player) {
    return actors.monster;
  } else {
    return actors.player;
  }
};

const turnText = (event) => {
  const verb = event.type === eventTypes.attack ? 'HITS' : 'HEALS';
  return `${event.actor} ${verb} ${otherActor(event)} FOR ${event.health}`;
};
// TODO
// health bar lenght, monster end, reset, give up
// make healths computed
new Vue({
  el: '#app',
  data: {
    MAXIMUM_DAMAGE,
    MAXIMUM_SPECIAL_DAMAGE,
    actors,
    eventTypes,
    ...initialState
  },
  methods: {
    reset: function () {
      this.data = {...this, ...initialState};
    },
    startNewGame: function () {
      this.reset();
      this.playing = true;
    },
    monsterAttack: function () {
      const health = generateNumber(MAXIMUM_DAMAGE);
      this.events.push({actor: actors.monster, type: eventTypes.attack, health});
      this.monsterHealth -= health;
    },
    attack: function (damageSize = MAXIMUM_DAMAGE) {
      console.log({damageSize});
      const health = generateNumber(damageSize);
      this.events.push({actor: actors.player, type: eventTypes.attack, health});
      this.playerHealth -= health;

      this.monsterAttack();
    },
    heal: function () {
      const health = generateNumber(MAXIMUM_HEALING);
      this.events.push({actor: actors.player, type: eventTypes.healing, health});
      this.playerHealth += health;

      this.monsterAttack();
    },
    turnClass,
    turnText
  },
  watch: {
    playerHealth: function (newHealth) {
      if (newHealth < 0) {
        this.playing = false;
        alert("Player lost");
      }
    }
  }
});
