export class Game3 extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'Game3', active: true });
        this.item;
        this.i = 0;
    }



    create ()
    {
        this.hsv = Phaser.Display.Color.HSVColorWheel();

        //  Rainbow Text
        this.text1 = this.add.text(50, 100, 'QUE TAL...', { font: "74px Arial Black", fill: "#fff" });
        this.text1.setStroke('#00f', 16);
        this.text1.setShadow(2, 2, "#333333", 2, true, true);

        //  Rainbow Stroke
        this.text2 = this.add.text(50, 300, 'ESTOY MEJOR QUE TU ;)', { font: "74px Arial Black", fill: "#000" });
        this.text2.setStroke('#fff', 16);
        this.text2.setShadow(2, 2, "#333333", 2, true, true);
    }

    update ()
    {
        const top = this.hsv[this.i].color;
        const bottom = this.hsv[359 - this.i].color;

        this.text1.setTint(top, top, bottom, bottom);
        this.text2.setTint(top, bottom, top, bottom);

        this.i++;

        if (this.i === 360)
        {
            this.i = 0;
        }
    }
}