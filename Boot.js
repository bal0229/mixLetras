export class Boot extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'boot'});
        //super('Boot');
    }

    init ()
    {
        let element = document.createElement('style');

        document.head.appendChild(element);

        element.sheet.insertRule('@font-face { font-family: "bebas"; src: url("assets/fonts/ttf/bebas.ttf") format("truetype"); }', 0);
    }

    preload ()
    {
        this.load.image('bg', 'image/fondo.jpg');
        this.load.image('grid', 'image/fondo3.png');
        this.load.script('webfont', 'image/fondo6.png');

       /* this.load.audio('place', 'sound/popp.mp3');
        //this.load.audio('perdiste','sound/perdiste.mp3');
          //  this.load.audio('reventar','sound/popp.mp3');

        this.load.audio('miss','sound/perdiste.mp3');

        this.load.audio('gamelost', 'sound/perdiste.mp3');

        this.load.audio('gamewon', 'sound/popp.mp3');
        */
    }

    create ()
    {
        let scene = this.scene;

      /*  WebFont.load({
            custom: {
                families: [ 'bebas' ]
            },
            active: function ()
            {*///
                scene.start('instructions');
           // }
        ///});
    }

}


