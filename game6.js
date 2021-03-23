export class Game6 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Game6', active: true });
        let info;
        let timer;
        let letra='';
        this.alive = 0;
        let cantSimbolos=10;
        this.simbolos=new Map();
        this.musicPerdiste;
        this.musicReventar;
        this.musicLetra=new Map();
    }
     preload ()
    {
        this.load.image('bola5', 'image/bola5.png');
        this.load.image('bola4', 'image/bola4.png');
        this.cantSimbolos=20;
            this.letra='0';
    }
    
     create ()
    {
        for (var i = 0; i < this.cantSimbolos; i++)
            {
                var x = Phaser.Math.Between(100, 600);
                var y = Phaser.Math.Between(100, 400);
    
               // var box = this.add.image(x, y, 'crate');

               
                //  Rainbow Text
                this.text1 = this.add.text(x, y, String.fromCharCode(65+i), { font: "74px Arial Black", fill: "#fff" });
                this.text1.setStroke('#00f', 16);
                this.text1.setShadow(2, 2, "#333333", 2, true, true);

                //  Make them all input enabled
                //box.setInteractive();
                this.text1.setInteractive();
                this.input.setDraggable(this.text1);
                //  The images will dispatch a 'clicked' event when they are clicked on
                //this.text1.on('clicked', this.clickHandler, this);
    
                
                this.alive++;
                this.simbolos.set(String.fromCharCode(65+i),this.text1);
            }
    
        
    
        //  A drop zone
        var zone1 = this.add.image(0, 400, 'bola4').setInteractive();
        var zone2 = this.add.image(800, 400, 'bola5').setInteractive();
    
        zone1.input.dropZone = true;
        zone2.input.dropZone = true;
    
        this.input.on('dragstart', function (pointer, gameObject) {
    
            this.children.bringToTop(gameObject);
    
        }, this);
    
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    
            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });
    
        this.input.on('dragenter', function (pointer, gameObject, dropZone) {
    
            zone1.setTint(0x00ff00);
    
        });
    
        this.input.on('dragleave', function (pointer, gameObject, dropZone) {
    
            zone1.clearTint();
    
        });
    
        this.input.on('drop', function (pointer, gameObject, dropZone) {
    
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.setScale(1);
    
            gameObject.input.enabled = false;
    
            zone1.clearTint();
    
        });
    
        this.input.on('dragend', function (pointer, gameObject, dropped) {
    
            if (!dropped)
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
    
        });
    
    }
}
