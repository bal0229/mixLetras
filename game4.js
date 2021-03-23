export class Game4 extends Phaser.Scene {


 
        constructor ()
        {
            //Phaser.Scene.call(this, { key: 'Game4', active: true });
            super({ key: 'Game4', active: true});
            
            let info;
            this.temporizador;
            let letra='';
            this.alive = 0;
            let cantSimbolos=10;
            this.simbolos=new Map();
            this.musicPerdiste;
            this.musicReventar;
            this.musicLetra=new Map();
            this.debug;
            this.text;
            this.tiempo;
            this.tiempoLimite;
            var timedEvent;
        }
    
        preload ()
        {
            
            
            //this.load.image('bg', 'image/fondo6.png');
            this.cantSimbolos=26;
            this.letra='0';
            this.alive=0;
            this.load.audio('perdiste','sound/perdiste.mp3');
            this.load.audio('reventar','sound/popp.mp3');

            for (var i = 0; i < 26; i++)
            {
                this.load.audio(String.fromCharCode(65+i),'alfabeto/'+String.fromCharCode(97+i)+'.mp3');
            }
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
            //this.add.image(400, 300, 'bg');
    
            //  Create a bunch of images
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                var x = Phaser.Math.Between(100, 700);
                var y = Phaser.Math.Between(100, 400);
    
               // var box = this.add.image(x, y, 'crate');

               
                //  Rainbow Text
                this.text1 = this.add.text(x, y, String.fromCharCode(65+i), { font: "74px Arial Black", fill: "#fff" });
                this.text1.setStroke('#00f', 16);
                this.text1.setShadow(2, 2, "#333333", 2, true, true);

                //  Make them all input enabled
                //box.setInteractive();
                this.text1.setInteractive();
    
                //  The images will dispatch a 'clicked' event when they are clicked on
                this.text1.on('clicked', this.clickHandler, this);
    
                this.alive++;
                this.simbolos.set(String.fromCharCode(65+i),this.text1);
            }
    
            //  If a Game Object is clicked on, this event is fired.
            //  We can use it to emit the 'clicked' event on the game object itself.
            this.input.on('gameobjectup', function (pointer, gameObject)
            {
                gameObject.emit('clicked', gameObject);
            }, this);
    
/////////////////////////////////

// this.gem is a local variable.

this.debug = this.add.graphics();
this.temporizador=3;
            this.tiempo=1;
            this.text = this.add.text(32, 32);

    this.timedEvent = this.time.addEvent({ delay: 1000,  onEvent ()
        {
            this.tiempo+=1;
        }, callbackScope: this, repeat: 10*this.temporizador });

this.timer = this.time.addEvent({ delay: 10000*this.temporizador, callback: this.gameOver, callbackScope: this });

//////////*********



        }
        update ()
        {
            if(this.alive==0){

                //console.log('cambiando de escena');
                this.scene.start('Nivel1');
                
            }else{
                if(this.tiempoLimite==0){
                    /*var red = Phaser.Math.Between(50, 255);
                    var green = Phaser.Math.Between(50, 255);
                    var blue = Phaser.Math.Between(50, 255);
                
                    this.cameras.main.fade(2000, red, green, blue);*/

                    //this.scene.start('Game4');
                    //  Get a random color
                    
                    
                }

            }
            /*this.text.setText('Event.progress: ' + this.timedEvent.getProgress().toString().substr(0, 4) + '\nEvent.repeatCount: ' + this.timedEvent.repeatCount);
            */
           this.tiempoLimite=this.timedEvent.repeatCount;
            this.text.setText('Pendiente: ' + this.alive + '\nTiempo: ' +this.tiempoLimite + '\nELIMINADO : ' +this.letra );
            
            const size = 700;

        this.debug.fillStyle(0x2d2d2d);
        this.debug.fillRect(50,10, size, 20);
//console.log('es el ..  '+this.timedEvent.repeatCount);
        this.debug.fillStyle(0x2dff2d);
        this.debug.fillRect(50, 10, size-(this.timedEvent.repeatCount)*this.temporizador*10, 20);
        }
    

        clickHandler (text1)
        {
            this.musicReventar.play();

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
            this.scene.start('Game4');
        }
 
  }