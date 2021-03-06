/**
 * Données initiales du jeu
 */

/** Chargement et positionnement du logo Game-Dev.Ninja */
let logo = {
    image: new Image(),
    x: 0,
    y: 0
}
logo.image.onload = function() {
    logo.x = (canvas.width - logo.image.naturalWidth) / 2
    logo.y = (canvas.height - logo.image.naturalHeight) / 2
}
logo.image.src = './assets/images/logo.png'
/** Fin du chargement et positionnement du logo Game-Dev.Ninja */


/**
 * Exécutée une seule fois, au chargement
 */
function LoadGame(canvas, context) {

}

/**
 * Exécutée perpétuellement pour mettre à jour les données
 */
function UpdateGame(deltaTime) {
    if (isKeyDown('ArrowLeft')) {
        logo.x = logo.x - 1
    }
    if (isKeyDown('ArrowRight')) {
        logo.x = logo.x + 1
    }
    if (isKeyDown('ArrowUp')) {
        logo.y = logo.y - 1
    }
    if (isKeyDown('ArrowDown')) {
        logo.y = logo.y + 1
    }
}

/**
 * Exécutée perpétuellement pour dessiner la frame actuelle
 */
function DrawGame(context) {
    // Affichage du logo Game-Dev.Ninja
    context.drawImage(logo.image, 0, 0, logo.image.naturalWidth, logo.image.naturalHeight, logo.x, logo.y, logo.image.naturalWidth, logo.image.naturalHeight)

    context.fillText('X: '+ logo.x, 5, 30)
    context.fillText('Y: '+ logo.y, 5, 50)
}
