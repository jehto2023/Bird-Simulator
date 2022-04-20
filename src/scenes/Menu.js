class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('mountain', './assets/mountain.png');
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_shimmer', './assets/shimmer.wav');
        this.load.audio('sfx_crow', './assets/crow_caw.wav');
        this.load.audio('bg', './assets/lovely.wav');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Cheri',
            fontSize: '75px',
            backgroundColor: '#2e2037',
            color: '#fff6e2',
            align: 'right',
            padding: {
                top: 0.1,
                bottom: 0.1,
            },
            fixedWidth: 0
        }

        let buttonConfig = {
          fontFamily: 'Cheri',
          fontSize: '50px',
          backgroundColor: '#2e2037',
          color: '#fff6e2',
          align: 'right',
          padding: {
              top: 0.1,
              bottom: 0.1,
          },
          fixedWidth: 0
      }
        
        this.mountain = this.add.tileSprite(0, 0, 640, 480, 'mountain').setOrigin(0, 0);
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding*10, 'Bird Simulator', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px';
        menuConfig.backgroundColor = '#2e2037';
        menuConfig.color = '#fff6e2';
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding*3, 'Use ←→ arrows to move and F to fire', menuConfig).setOrigin(0.5);
        //this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        // play music
        var music = this.sound.add('bg');
        music.setLoop(true);
        music.play();

        buttonConfig.backgroundColor = '#728C69';
        var textE = this.add.text(game.config.width-530,350, 'Easy', buttonConfig);
        textE.setInteractive({ useHandCursor: true });
        textE.on('pointerdown', () => this.clickButtonE());


        buttonConfig.backgroundColor = '#BC544B';
        var textH = this.add.text(game.config.width-230,350, 'Hard', buttonConfig);
        textH.setInteractive({ useHandCursor: true });
        textH.on('pointerdown', () => this.clickButtonH());

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    // buttons
    clickButtonE() {
      game.settings = {
        spaceshipSpeed: 3,
        beeSpeed: 5,
        gameTimer: 60000    
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");  
    }

    clickButtonH() {
      game.settings = {
        spaceshipSpeed: 4,
        beeSpeed: 7,
        gameTimer: 45000    
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");  
    }
}