export class Nivel1 extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'Nivel1' });
        this.item;
        this.i = 0;
        this.yy;
        this.text11;
this.cadena;
        this.frases;
        this.musicPasarNivel;
        /////////////////
        let info;
            this.temporizador;
            let letra='';
            this.alive = 0;
            let cantSimbolos;
            this.simbolos=new Map();
            this.musicPerdiste;
            this.musicReventar;
            this.musicLetra=new Map();
            this.debug;
            this.text;
            this.tiempo;
            this.tiempoLimite;
            var timedEvent;
            /////////////////////////////
            ////////////////////
            this.octopus1;
            this.octopus2;
            this.octopus3;
            this.octopus4;
            this.octopus5;
            this.octopus6;

        /////////////////////
    }

    preload ()
    {
        //this.load.audio('theme','assets/audio/audio1.mp3');

this.load.audio('paseNivel','assets/audio/ganador.mp3');
        
        //////////////////////
        this.cantSimbolos=26;
        this.yy=1;
       // this.cadena='UNO';
        this.frases=['UN PULPO ESTA ENAMORADO','DE UNA ESTRELLITA DE MAR','Y SUS TRES CORAZONCITOS','NO DEJAN DE PALPITAR','POR SU LADO LA ESTRELLITA','ALTIVA Y MUY PRESUMIDA','TAN SOLO UN PRINCIPE AZUL','QUIERE TENER EN SU VIDA','EL PULPO BAILA EN EL MAR','DELANTE DE LA ESTRELLITA','Y DE PRONTO UN CORAZON','MUCHO MAS FUERTE PALPITA','EL PULPO NADA EN EL MAR','ESTIRANDO SUS TENTACULOS','PERO LA ESTRELLA NO MIRA','PARA ELLA ES SÓLO UN OBSTACULO','CON FUERZA AL VER A LA ESTRELLA','LATEN SUS TRES CORAZONES','Y AUNQUE QUIERE EN SU INTERIOR','NO ATIENDE EL PULPO A RAZONES','AL SANGRARLE UN CORAZON','SE HA IDO ALEJANDO DE ELLA','SU SANGRE ES COLOR AZUL','LO VE ENSEGUIDA LA ESTRELLA','POR ESO LE LLAMA A GRITOS','CORRIENDO VA DETRAS DE EL,','PERO EL PULPO ENTRISTECIDO','NO QUIERE VOLVERLA A VER'];
        this.cadena=this.frases[0];
            this.letra='0';
            this.alive=0;
            this.load.audio('perdiste','sound/perdiste.mp3');
            this.load.audio('reventar','sound/popp.mp3');

            for (var i = 0; i < this.cantSimbolos; i++)
            {
                this.load.audio(String.fromCharCode(65+i),'sound/'+String.fromCharCode(97+i)+'.mp3');
            }
        /////////////////////////

        this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');

        //  Just a few images to use in our underwater scene
        this.load.image('undersea', 'assets/pics/undersea.jpg');
        this.load.image('coral', 'assets/pics/seabed.png');
    }

    create ()
    {
        //var music = this.sound.add('theme');
        this.musicPasarNivel = this.sound.add('paseNivel');
        //music.play();
        //music.volume=0.1;
        //this.cantSimbolos=2;

        /////////777animales amarinos
       /* this.add.image(400, 300, 'undersea');


        this.anims.create({ key: 'jellyfish', frames: this.anims.generateFrameNames('sea', { prefix: 'blueJellyfish', end: 32, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'crab', frames: this.anims.generateFrameNames('sea', { prefix: 'crab1', end: 25, zeroPad: 4 }), repeat: -1 });
*/
        this.anims.create({ key: 'octopus', frames: this.anims.generateFrameNames('sea', { prefix: 'octopus', end: 24, zeroPad: 4 }), repeat: -1 });
        /*
        this.anims.create({ key: 'purpleFish', frames: this.anims.generateFrameNames('sea', { prefix: 'purpleFish', end: 20, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'stingray', frames: this.anims.generateFrameNames('sea', { prefix: 'stingray', end: 23, zeroPad: 4 }), repeat: -1 });

        const jellyfish = this.add.sprite(400, 300, 'seacreatures').play('jellyfish');
        const bigCrab = this.add.sprite(550, 480, 'seacreatures').setOrigin(0).play('crab');
        const smallCrab = this.add.sprite(730, 515, 'seacreatures').setScale(0.5).setOrigin(0).play('crab');
        */
        this.octopus1 = this.add.sprite(300, 100, 'seacreatures').play('octopus');
        this.octopus2 = this.add.sprite(400, 100, 'seacreatures').play('octopus');
        this.octopus3 = this.add.sprite(500, 100, 'seacreatures').play('octopus');
        this.octopus4 = this.add.sprite(600, 100, 'seacreatures').play('octopus');
        this.octopus5 = this.add.sprite(700, 100, 'seacreatures').play('octopus');
        
        //octopus1.setTintFill(0xffff00, 0xffff00, 0xff0000, 0xff0000);
        this.octopus1.setTintFill(0xffffff);        
        this.octopus1.setAlpha(0.5);
        this.octopus2.setTintFill(0xffffff);        
        this.octopus2.setAlpha(0.5);
        this.octopus3.setTintFill(0xffffff);        
        this.octopus3.setAlpha(0.5);
        this.octopus4.setTintFill(0xffffff);        
        this.octopus4.setAlpha(0.5);
        this.octopus5.setTintFill(0xffffff);        
        this.octopus5.setAlpha(0.5);
        
        

        //const fish = this.add.sprite(600, 200, 'seacreatures').play('purpleFish');
        //const ray = this.add.sprite(100, 300, 'seacreatures').play('stingray');

        this.add.image(0, 466, 'coral').setOrigin(0);
        ///////////////////////////////////////
        this.musicPerdiste=this.sound.add('perdiste');
        this.musicReventar=this.sound.add('reventar');
        for (var i = 0; i < 26; i++)
            {
                //console.log(String.fromCharCode(65+i)+'------'+(String.fromCharCode(65+i)));
                this.musicLetra.set(String.fromCharCode(65+i),this.sound.add(String.fromCharCode(65+i)));
            }

        this.cargarAlfabeto();

this.reiniciarTemporizador();

this.colocarFrase();
       
    }
    colocarFrase(){
        //this.text11.setVisible();
             /////////////////////////////////////
             this.hsv = Phaser.Display.Color.HSVColorWheel();

             //  Rainbow Text
             this.text1 = this.add.text(10, 400, this.cadena, { font: "50px Arial Black", fill: "#fff" });
             this.text1.setStroke('#00f', 16);
             this.text1.setShadow(2, 2, "#333333", 2, true, true);
             ///////////////////////////////////////////
    }
    reiniciarTemporizador(){
        // this.gem is a local variable.

this.debug = this.add.graphics();
this.temporizador=12 ;
            this.tiempo=1;
            this.text = this.add.text(32, 32);

    this.timedEvent = this.time.addEvent({ delay: 1000,  onEvent ()
        {
            this.tiempo+=1;
        }, callbackScope: this, repeat: 10*this.temporizador });

this.timer = this.time.addEvent({ delay: 10000*this.temporizador, callback: this.gameOver, callbackScope: this });

//////////*********
    }
    cargarAlfabeto(){
        /////////////cargar burbujas de letras
        
            this.alive=0;
            //  How many crates can you click on in 10 seconds?
            //this.add.image(400, 300, 'bg');
            var x = 50;
            var y = 150;
            //  Create a bunch of images
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                //var x = Phaser.Math.Between(100, 750);
                //var y = Phaser.Math.Between(100, 400);
                
               // var box = this.add.image(x, y, 'crate');

               //console.log(this.alive+'   esperando restante de letras'+String.fromCharCode(65+i));
                //  Rainbow Text
                if(x>=750){
y=y+80;
x=50;
                }

                this.text11 = this.add.text(x, y, String.fromCharCode(65+i), { font: "74px Arial Black", fill: "#fff" });
                this.text11.setStroke('#00f', 16);
                this.text11.setShadow(2, 2, "#333333", 2, true, true);
x=x+70;
                //  Make them all input enabled
                //box.setInteractive();
                this.text11.setInteractive();
    
                //  The images will dispatch a 'clicked' event when they are clicked on
                //console.log(this.cadena);
                for(var a=0;a<this.cadena.length;a++){
                    if(this.cadena.charAt(a)===String.fromCharCode(65+i)){
                        this.text11.on('clicked', this.clickHandler, this);
                        this.alive++;
                    }
                    else{
                        this.text11.setAlpha(1);
                    }
                }
                
                    
    //console.log(this.alive+'   esperando restante de letras');
                
                this.simbolos.set(String.fromCharCode(65+i),this.text11);
            }
    
            //  If a Game Object is clicked on, this event is fired.
            //  We can use it to emit the 'clicked' event on the game object itself.
            this.input.on('gameobjectup', function (pointer, gameObject)
            {
                gameObject.emit('clicked', gameObject);
            }, this);
    
    }

    update ()
    {
        const top = this.hsv[this.i].color;
        const bottom = this.hsv[359 - this.i].color;

        this.text1.setTint(top, top, bottom, bottom);
        
        this.i++;

        if (this.i === 360)
        {
            this.i = 0;
        }
        /////////////////////////////////////
        if(this.alive==0){
            
            this.letra='0';
            this.alive=0;
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                var text11=this.simbolos.get(String.fromCharCode(65+i));
                text11.off('clicked', this.clickHandler);
                text11.input.enabled = false;
                text11.setVisible(false);
                //this.letra=String.fromCharCode(65+i);
                //this.musicLetra.get(String.fromCharCode(65+i)).play();
                
            }
           // this.text11.setAlpha(0);
            
            this.tiempo=0;
            this.tiempoLimite=0;
            this.musicPasarNivel.play();
            //console.log('aumentar pulpos.....');
            if(this.yy==1)
            {
                this.octopus1.clearTint();      
                this.octopus1.setAlpha(1);
            }else{
                if(this.yy==2)
                {
                    this.octopus2.clearTint();      
                this.octopus2.setAlpha(1);
                }else{
                    if(this.yy==3)
                    {
                        this.octopus3.clearTint();      
                    this.octopus3.setAlpha(1);
                    }else{
                        if(this.yy==4)
                        {
                            this.octopus4.clearTint();      
                        this.octopus4.setAlpha(1);
                        }else{
                            //if(this.yy==5)
                            //{
                                this.octopus5.clearTint();      
                            this.octopus5.setAlpha(1);
                            //}
                            //else{

                                this.scene.start('Game7');
                            //}
                        }
                    }
                }
            }
            this.yy++;
            this.cadena=this.frases[this.yy-1];
            
            this.cargarAlfabeto();

//this.reiniciarTemporizador();

this.colocarFrase();

            
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

        this.tiempoLimite=this.timedEvent.repeatCount;
            this.text.setText('Pendiente: ' + this.alive + '\nTiempo: ' +this.tiempoLimite + '\nELIMINADO : ' +this.letra );
            
            const size = 700;

        this.debug.fillStyle(0x2d2d2d);
        this.debug.fillRect(50,10, size, 20);
//console.log('es el ..  '+this.timedEvent.repeatCount);
        this.debug.fillStyle(0x2dff2d);
        this.debug.fillRect(50, 10, size-(this.timedEvent.repeatCount)*this.temporizador*10, 20);
        ///////////////////////////////////////////
        
    }
    clickHandler (text11)
        {
            this.musicReventar.play();

            this.alive--;
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                if(this.simbolos.get(String.fromCharCode(65+i))==text11){
                    text11.off('clicked', this.clickHandler);
                text11.input.enabled = false;
                text11.setVisible(false);
                this.letra=String.fromCharCode(65+i);
                this.musicLetra.get(String.fromCharCode(65+i)).play();

                var vector=this.cadena.split('');
            //console.log(vector);
            //console.log(String.fromCharCode(65+i));
            //let pos = vector.indexOf(String.fromCharCode(65+i));
            //let elementoEliminado = vector.splice(pos, 1);
            this.cadena=this.cadena.replace(String.fromCharCode(65+i),'');
            //this.cadena=this.cadena.substr(pos,1);
            //console.log(this.cadena);
            this.text1.setText(this.cadena);
                }
            }
            
        }
        gameOver ()
        {
           // if(this.tiempoLimite===0){
//console.log(this.tiempoLimite+' esperando un error !!');
                this.input.off('gameobjectup');
            this.musicPerdiste.play();
            //this.scene.start('Game4');
            this.scene.start('Nivel1');
                
           // }
            
            
        }
}