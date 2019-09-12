import * as Phase from 'phaser'

const gameConfig: Phase.Types.Core.GameConfig = {
    title: 'Your New TCG!',
    type: Phaser.AUTO,

    width: window.innerWidth,
    height: window.innerHeight,

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    parent: 'game',
    backgroundColor: '#000000',
};

export const game = new Phaser.Game(gameConfig);