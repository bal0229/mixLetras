export class Game5 extends Phaser.Scene {
    constructor ()
        {
            super({ key: 'Game5', active: true });
            let info;
            let timer;
            let letra='';
            this.alive = 0;
            let cantSimbolos=10;
            this.simbolos=new Map();
            this.musicPerdiste;
            this.musicReventar;
            this.musicLetra=new Map();
            this.zone;
            this.graphics;
        }
        preload ()
        {
            this.load.image('bg', 'image/fondo6.png');
            this.cantSimbolos=20;
            this.letra='0';
            
            this.load.audio('perdiste','sound/perdiste.mp3');
            this.load.audio('reventar','sound/popp.mp3');

            for (var i = 0; i < 26; i++)
            {
                this.load.audio(String.fromCharCode(65+i),'alfabeto/'+String.fromCharCode(97+i)+'.mp3');
            }
            this.graphics = this.add.graphics();

            /*this.load.audio('a','sound/a.mp3');
            this.load.audio('b','sound/b.mp3');
            this.load.audio('c','sound/c.mp3');
            this.load.audio('d','sound/d.mp3');
            this.load.audio('e','sound/e.mp3');
            this.load.audio('f','sound/f.mp3');
            this.load.audio('g','sound/g.mp3');
            this.load.audio('h','sound/h.mp3');
            this.load.audio('ib','sound/i.mp3');
            this.load.audio('j','sound/j.mp3');
            this.load.audio('k','sound/k.mp3');
            this.load.audio('l','sound/l.mp3');
            this.load.audio('m','sound/m.mp3');
            this.load.audio('n','sound/n.mp3');
            this.load.audio('o','sound/o.mp3');
            this.load.audio('p','sound/p.mp3');
            this.load.audio('q','sound/q.mp3');
            this.load.audio('r','sound/r.mp3');
            this.load.audio('s','sound/s.mp3');
            this.load.audio('t','sound/t.mp3');
            this.load.audio('u','sound/u.mp3');
            this.load.audio('v','sound/v.mp3');
            this.load.audio('w','sound/w.mp3');
            this.load.audio('x','sound/x.mp3');
            this.load.audio('y','sound/y.mp3');
            this.load.audio('z','sound/z.mp3');
            */
        }
    
        create ()
        {
            this.musicPerdiste=this.sound.add('perdiste');
            this.musicReventar=this.sound.add('reventar');

            for (var i = 0; i < 26; i++)
            {
                this.musicLetra.set(String.fromCharCode(65+i),this.sound.add(String.fromCharCode(65+i)));
            }
            //  How many crates can you click on in 10 seconds?
            this.add.image(400, 300, 'bg');
    
            //  Create a bunch of images
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
    
            //  If a Game Object is clicked on, this event is fired.
            //  We can use it to emit the 'clicked' event on the game object itself.
            /*this.input.on('gameobjectup', function (pointer, gameObject)
            {
                gameObject.emit('clicked', gameObject);
            }, this);*/
    
            //  Display the game stats
            this.info = this.add.text(10, 10, '', { font: '48px Arial', fill: '#000000' });
    
            this.timer = this.time.addEvent({ delay: 10000, callback: this.gameOver, callbackScope: this });


            ///************************** */
            
        //  A drop zone positioned at 600x300 with a circular drop zone 128px in radius
        this.zone = this.add.zone(600, 400).setCircleDropZone(128);
    
        //  Just a visual display of the drop zone
        this.graphics = this.add.graphics();
    
        this.graphics.lineStyle(2, 0xffff00);
    
        this.graphics.strokeCircle(this.zone.x, this.zone.y, this.zone.input.hitArea.radius);
    
        this.input.on('dragstart', function (pointer, gameObject) {
    
            this.children.bringToTop(gameObject);
    
        }, this);
    
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    
            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });
    
        this.input.on('dragenter', function (pointer, gameObject, dropZone) {
    
            //this.graphics.clear();
            //this.graphics.lineStyle(2, 0x00ffff);
            //this.graphics.strokeCircle(this.zone.x, this.zone.y, this.zone.input.hitArea.radius);
    
        });
    
        this.input.on('dragleave', function (pointer, gameObject, dropZone) {
    
            this.graphics.clear();
            this.graphics.lineStyle(2, 0xffff00);
            this.graphics.strokeCircle(this.zone.x, this.zone.y, this.zone.input.hitArea.radius);
    
        });
    
        this.input.on('drop', function (pointer, gameObject, dropZone) {
    
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
    
            gameObject.input.enabled = false;
    
        });
    
        this.input.on('dragend', function (pointer, gameObject, dropped) {
    
            if (!dropped)
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
    
        });

        

        }
        update ()
        {
            this.info.setText('Alive: ' + this.alive + '\nTime: ' + Math.floor(10000 - this.timer.getElapsed())+ '\nELIMINADO : ' +this.letra );
            
        }
    

        clickHandler (text1)
        {
            //this.musicReventar.play();

            this.alive--;
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                if(this.simbolos.get(String.fromCharCode(65+i))==text1){
                    text1.off('clicked', this.clickHandler);
                text1.input.enabled = false;
                text1.setVisible(false);

                this.letra=String.fromCharCode(65+i);
                this.musicLetra.get(String.fromCharCode(65+i)).play();
                }
            }
            
            
        }
    
        gameOver ()
        {
            this.input.off('gameobjectup');
            this.musicPerdiste.play();
        }
    
}
