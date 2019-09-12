import * as Phaser from 'phaser'

const gameConfig: Phaser.Types.Core.GameConfig = {
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
    backgroundColor: '#f00',
};

export const game = new Phaser.Game(gameConfig);