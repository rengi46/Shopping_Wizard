// iPhone 13

// color buttons

const iPinkCircle = document.getElementById( 'i13Pcircle' );
const iBlueCircle = document.getElementById( 'i13Bcircle' );

//  variables

let i13Front = document.getElementById( 'iP13BF' );
let i13Side = document.getElementById( 'iP13BS' );
let i13Center = document.getElementById( 'i13Center' );

// small images clicked display in center

i13Side.addEventListener( 'click', () => {
    i13Center.src = i13Side.src;
} );

i13Front.addEventListener( 'click', () => {
    i13Center.src = i13Front.src;
} );

//  chose and change colors

iPinkCircle.addEventListener( 'click', ( e ) => {

    i13Front.src = "src/assets/img/iphone13-pink.png";
    i13Side.src = 'src/assets/img/iphone-13-pink-side.jpeg';
    i13Center.src = "src/assets/img/iphone13-pink.png";

} );


iBlueCircle.addEventListener( 'click', ( e ) => {

    i13Front.src = "src/assets/img/iphone13-blue.png";
    i13Side.src = 'src/assets/img/iphone13-blue-side.png';
    i13Center.src = "src/assets/img/iphone13-blue.png";

} );


// iPhone 13 Pro

// color buttons

const proGraffitiCircle = document.getElementById( 'proGcircle' );
const proBlueCircle = document.getElementById( 'proBcircle' );

//  variables

let pro13Front = document.getElementById( 'pro13GF' );
let pro13Side = document.getElementById( 'pro13GS' );
let pro13Center = document.getElementById( 'pro13GC' );

// small images clicked display in center

pro13Side.addEventListener( 'click', () => {
    pro13Center.src = pro13Side.src;
} );

pro13Front.addEventListener( 'click', () => {
    pro13Center.src = pro13Front.src;
} );

//  chose and change colors

proGraffitiCircle.addEventListener( 'click', ( e ) => {

    pro13Front.src = "src/assets/img/iphone13-pro-graffiti.png";
    pro13Side.src = 'src/assets/img/iphone-13-pro-graffiti-side.png';
    pro13Center.src = "src/assets/img/iphone13-pro-graffiti.png";

} );


proBlueCircle.addEventListener( 'click', ( e ) => {

    pro13Front.src = "src/assets/img/iphone13-pro-blue.png";
    pro13Side.src = 'src/assets/img/iphone-13-pro-blue-side.jpeg';
    pro13Center.src = "src/assets/img/iphone13-pro-blue.png";

} );

// iPhone 13 Pro Blue


