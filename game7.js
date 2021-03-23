export class Game7 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Game7'});
        //window.Game7 = this;
        let info0;
        let info1;
        let info2;
        let timer;
        let letra='';
        this.cantSimbolos;
        this.cantAlfabeto;
        this.cantNumeros;
        //let cantSimbolos=10;
        this.simbolos=new Map();
        this.musicPerdiste;
        this.musicReventar;
        this.musicLetra=new Map();
        this.controls;
        this.letrass ='';
        this.text;
        this.debug;
        this.tiempo;
        this.tiempoLimite;
        var timedEvent;
    }
 preload ()
{
    this.cantSimbolos=0;
    this.cantAlfabeto=0;
    this.cantNumeros=0;
    this.load.image('donuts', 'image/alfa3.png');
    this.load.image('fork', 'image/bola2.png');
    
            this.letra='0';
            this.load.audio('perdiste','sound/perdiste.mp3');
            this.load.audio('reventar','sound/popp.mp3');
}

 create ()
{
    this.musicPerdiste=this.sound.add('perdiste');
            this.musicReventar=this.sound.add('reventar');
    //  Mmm, donuts
    this.add.image(0, 0, 'donuts').setOrigin(0);
    //this.octopus2.setAlpha(0.5);
    //  A little fork sprite
    //var fork = this.add.image(1024, 600, 'fork').setOrigin(0.5, 0).setAngle(-20);

    var label = this.add.text(0, 0, '', { font: "48px Arial Black", fill: "#c51b7d" });
    label.setStroke('#de77ae', 8);
////////////numeros
    for(var i=48; i<58;i++){
        var x = Phaser.Math.Between(100, 600);
        var y = Phaser.Math.Between(0, 150);
        //  Rainbow Text
        this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
        this.text1.setStroke('#00f', 16);
        this.text1.setShadow(2, 2, "#333333", 2, true, true);
        //console.log(String.fromCharCode(i));

        this.input.setDraggable(this.text1);
this.cantNumeros++;
        this.text1.name =  '2';
    }
    ///////////////////////SIMBOLOS
    for(var i=33; i<48;i++){
        var x = Phaser.Math.Between(100, 600);
        var y = Phaser.Math.Between(0, 150);
        //  Rainbow Text
        this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
        this.text1.setStroke('#00f', 16);
        this.text1.setShadow(2, 2, "#333333", 2, true, true);
        //console.log(String.fromCharCode(i));

        this.input.setDraggable(this.text1);
this.cantSimbolos++;
        this.text1.name =  '1';
    }
 for(var i=58; i<65;i++){
    var x = Phaser.Math.Between(100, 600);
    var y = Phaser.Math.Between(0, 150);
    //  Rainbow Text
    this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
    this.text1.setStroke('#00f', 16);
    this.text1.setShadow(2, 2, "#333333", 2, true, true);
    //console.log(String.fromCharCode(i));

    this.input.setDraggable(this.text1);
    this.cantSimbolos++;
    this.text1.name =  '1';
 }
for(var i=123; i<127;i++){
    var x = Phaser.Math.Between(100, 600);
    var y = Phaser.Math.Between(0, 150);
    //  Rainbow Text
    this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
    this.text1.setStroke('#00f', 16);
    this.text1.setShadow(2, 2, "#333333", 2, true, true);
    //console.log(String.fromCharCode(i));

    this.input.setDraggable(this.text1);
    this.cantSimbolos++;
    this.text1.name =  '1';

    }
    for(var i=91; i<97;i++){
        var x = Phaser.Math.Between(100, 600);
        var y = Phaser.Math.Between(0, 150);
        //  Rainbow Text
        this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
        this.text1.setStroke('#00f', 16);
        this.text1.setShadow(2, 2, "#333333", 2, true, true);
        //console.log(String.fromCharCode(i));
    
        this.input.setDraggable(this.text1);
    this.cantAlfabeto++;
        this.text1.name =  '1';
    
        }
        ///////////////////letras mayusculas
    for (var i = 65; i < 91; i++)
            {
                var x = Phaser.Math.Between(100, 600);
                var y = Phaser.Math.Between(0, 150);
    
               // var box = this.add.image(x, y, 'crate');

               
                //  Rainbow Text
                this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
                this.text1.setStroke('#00f', 16);
                this.text1.setShadow(2, 2, "#333333", 2, true, true);
                //console.log(String.fromCharCode(i));

                this.input.setDraggable(this.text1);
                this.cantAlfabeto++;
                this.text1.name =  '0';

            }
            for (var i = 97; i < 123; i++)
            {
                var x = Phaser.Math.Between(100, 600);
                var y = Phaser.Math.Between(0, 150);
    
               // var box = this.add.image(x, y, 'crate');

               
                //  Rainbow Text
                this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
                this.text1.setStroke('#00f', 16);
                this.text1.setShadow(2, 2, "#333333", 2, true, true);
//console.log(String.fromCharCode(i));

                this.input.setDraggable(this.text1);
                this.cantAlfabeto++;
                this.text1.name =  '0';

            }
            


  
    

    //  And here's the real content.. some hit zones.
    //  One for each donut in the picture.
    /*
    var zone1 = this.add.zone(0, 250, 250, 430).setRectangleDropZone(300, 300);
    var zone2 = this.add.zone(285, 250, 520, 440).setRectangleDropZone(300, 300);
    var zone3 = this.add.zone(550, 250, 800, 430).setRectangleDropZone(300, 300);
    */
    var zone1 = this.add.zone(0, 250, 250, 430).setOrigin(0).setName('0').setRectangleDropZone(300, 300).setInteractive();
    var zone2 = this.add.zone(285, 250, 520, 440).setOrigin(0).setName('1').setRectangleDropZone(300, 300).setInteractive();
    var zone3 = this.add.zone(550, 250, 800, 430).setOrigin(0).setName('2').setRectangleDropZone(300, 300).setInteractive();

    zone1.input.dropZone = true;
    zone2.input.dropZone = true;
    zone3.input.dropZone = true;
    //  And some events

this.input.on('gameobjectdown', function (pointer, gameObject) {

if(gameObject.name==='0')
{
    label.setText('Caracter\nAlfabetico');
}else{
    if(gameObject.name==='1'){
        label.setText('Caracter\nEspecial');
    }
    else{
        label.setText('Caracter\nNumérico');
    }
}
    
    label.x = gameObject.x;
    label.y = gameObject.y;
    

});
            

            ////////////**************** */
            var zone = this.add.zone(0, 0, 10, 10).setRectangleDropZone(10, 10);
            var graphics = this.add.graphics();
            this.input.on('dragstart', function (pointer, gameObject) {

                this.children.bringToTop(gameObject);
        
            }, this);
        
            this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        
                gameObject.x = dragX;
                gameObject.y = dragY;
        
            });
        
            this.input.on('dragenter', function (pointer, gameObject, dropZone) {
        
                graphics.clear();
                graphics.lineStyle(2, 0x00ffff);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        
            });
        
            this.input.on('dragleave', function (pointer, gameObject, dropZone) {
        
                graphics.clear();
                graphics.lineStyle(2, 0xffff00);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        
            });
var cantA=this.cantAlfabeto;

            this.input.on('drop', function (pointer, gameObject, dropZone) {
                
                if(gameObject.name==zone1.name && pointer.x<280 && pointer.y>250 && pointer.y<440 ||gameObject.name==zone2.name && pointer.x>280 && pointer.x<550 && pointer.y>250&& pointer.y<440|| gameObject.name==zone3.name && pointer.x>550 && pointer.y>250 && pointer.y<440){
                    gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;

                gameObject.input.enabled = false;
//console.log('VEAMOS DE QUE SE TRATA  '+gameObject.name+'  '+zone1.name);
        if(gameObject.name===zone1.name ){
           // console.log('ANTES '+this.cantAlfabeto);
            this.cantAlfabeto--;
            //console.log('ANTES '+this.cantAlfabeto);
        }
        else{
            if(gameObject.name==zone2.name){
                
                this.cantSimbolos--;
            }else{
                this.cantNumeros--;
            }
        }
                gameObject.input.enabled = false;
                
                }
                //console.log(pointer.x+' zona'+gameObject.x);
                //console.log('  alfabeto  '+gameObject.name+' zona1 '+zone1.name);
                //console.log(' simbolos  '+gameObject.name+'  zona  '+zone2.name );
                //console.log('  numeros '+ gameObject.name+'  zona  '+zone3.name );
                
        
            });
        
            this.input.on('dragend', function (pointer, gameObject, dropped) {
        
            if (!dropped )
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
    
            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        
                
        
            });
            ////////////////////-------------------
//  A drop zone



            /////////////////////////---------------


this.reiniciarTemporizador();

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
update ()
        {
            
            if(this.alive==0){

                //console.log('cambiando de escena');
                this.scene.start('Game7');
                
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
            this.text.setText('Tiempo: ' +this.tiempoLimite +'\nCANTIDAD DE LETRAS: '+this.cantAlfabeto);
            
            const size = 700;

        this.debug.fillStyle(0x2d2d2d);
        this.debug.fillRect(50,10, size, 20);
//console.log('es el ..  '+this.timedEvent.repeatCount);
        this.debug.fillStyle(0x2dff2d);
        this.debug.fillRect(50, 10, size-(this.timedEvent.repeatCount)*this.temporizador*10, 20);
//////////////

         
        }
    

        gameOver ()
        {
            
            this.input.off('gameobjectup');
            this.musicPerdiste.play();
            this.scene.start('Game7');
        }

    }

