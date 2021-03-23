export class GameOver extends Phaser.Scene {

    constructor ()
    {
        super('gameOver');
    }

    create ()
    {
        this.add.rectangle(400, 300, 640, 500, 0x000000, 0.7);

        var list = [
            'Tiny Bonus:',
            '',
            'Minor Prize:',
            '',
            'Major Prize:'
        ];

        var prizes1 = [ 'A Paperclip', 'Half-eaten Sandwich', 'A Boiled Egg', 'Used Gum', 'A Goldfish', 'A Book about Flash' ];
        var prizes2 = [ 'Mario Stickers', 'SNES Joypad', 'Superman Cape', 'Contra Poster', 'Bubble Machine', 'X-Ray Specs', 'Skateboard' ];
        var prizes3 = [ 'Playstation 4', 'A Tardis', 'An X-Wing', 'Super Nintendo', 'Arcade Machine', 'Dragon Egg', 'Personal Cyborg' ];

        var score = this.registry.get('score');

        console.log(score);

        var prizelist = [
            'Nothing (Complete 5 rows)',
            '',
            'Nothing (Complete 10 rows)',
            '',
            'Nothing (Complete 15 rows)'
        ];

        var title = 'GAME OVER!';

        if (score >= 5)
        {
            prizelist[0] = Phaser.Utils.Array.GetRandom(prizes1);
        }

        if (score >= 10)
        {
            prizelist[2] = Phaser.Utils.Array.GetRandom(prizes2);
        }

        if (score === 15)
        {
            prizelist[4] = Phaser.Utils.Array.GetRandom(prizes3);
            title = 'GAME WON!';
        }

        if (score < 5)
        {
            this.sound.play('gamelost');
        }
        else
        {
            this.sound.play('gamewon');
        }

        this.add.text(400, 120, title, { fontFamily: 'bebas', fontSize: 80, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true).setOrigin(0.5);
        this.add.text(400, 200, 'Let\'s see what you have won:', { fontFamily: 'bebas', fontSize: 26, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true).setOrigin(0.5);

        this.add.text(100, 270, list, { fontFamily: 'bebas', fontSize: 26, color: '#ffffff', align: 'right' }).setShadow(2, 2, "#333333", 2, false, true);
        this.add.text(260, 270, prizelist, { fontFamily: 'bebas', fontSize: 26, color: '#ffff00' }).setShadow(2, 2, "#333333", 2, false, true);

        this.add.text(400, 500, 'Space or Click to try again', { fontFamily: 'bebas', fontSize: 26, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true).setOrigin(0.5);

        this.input.keyboard.once('keydown_SPACE', this.restart, this);
        this.input.once('pointerdown', this.restart, this);
    }

    restart ()
    {
        this.scene.start('game');
    }

}
